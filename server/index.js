import express from "express"
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { EMERTECH_SYSTEM_PROMPT } from "./prompts.js"

const app = express()

const PORT = Number(process.env.PORT || 3001)
const OLLAMA_BASE_URL = process.env.OLLAMA_BASE_URL || "http://localhost:11434"
const OLLAMA_MODEL = process.env.OLLAMA_MODEL || "gemma3"
const TIEMPO_LIMITE_MS = 45000

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const distPath = path.resolve(__dirname, "../dist")

app.use(express.json())

app.get("/api/health", (_request, response) => {
  response.json({
    ok: true,
    model: OLLAMA_MODEL,
    ollamaBaseUrl: OLLAMA_BASE_URL,
  })
})

app.post("/api/chat", async (request, response) => {
  const mensaje = request.body?.mensaje

  if (typeof mensaje !== "string" || !mensaje.trim()) {
    return response.status(400).json({
      error: "Debes enviar un mensaje valido para consultar a EmerTech.",
    })
  }

  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), TIEMPO_LIMITE_MS)

  try {
    const respuestaOllama = await fetch(`${OLLAMA_BASE_URL}/api/generate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      signal: controller.signal,
      body: JSON.stringify({
        model: OLLAMA_MODEL,
        system: EMERTECH_SYSTEM_PROMPT,
        prompt: mensaje.trim(),
        stream: false,
      }),
    })

    const datos = await respuestaOllama.json().catch(() => null)

    if (!respuestaOllama.ok) {
      return response.status(502).json({
        error:
          datos?.error ||
          "Ollama devolvio un error al procesar la consulta.",
      })
    }

    const contenido = datos?.response?.trim()

    if (!contenido) {
      return response.status(502).json({
        error: "Ollama respondio sin contenido util para mostrar.",
      })
    }

    return response.json({
      respuesta: contenido,
      model: datos?.model || OLLAMA_MODEL,
    })
  } catch (errorCapturado) {
    if (errorCapturado.name === "AbortError") {
      return response.status(504).json({
        error:
          "Ollama tardo demasiado en responder. Verifica que el modelo siga cargado y vuelve a intentar.",
      })
    }

    return response.status(503).json({
      error:
        "No fue posible conectarse con Ollama local. Verifica que este encendido en http://localhost:11434 y que el modelo este disponible.",
    })
  } finally {
    clearTimeout(timeout)
  }
})

if (fs.existsSync(distPath)) {
  app.use(express.static(distPath))

  app.get(/^(?!\/api).*/, (_request, response) => {
    response.sendFile(path.join(distPath, "index.html"))
  })
}

app.listen(PORT, () => {
  console.log(`Servidor EmerTech disponible en http://localhost:${PORT}`)
  console.log(`Ollama esperado en ${OLLAMA_BASE_URL} usando el modelo ${OLLAMA_MODEL}`)
})
