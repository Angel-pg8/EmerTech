import express from "express"
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { EMERTECH_SYSTEM_PROMPT } from "./prompts.js"

const app = express()

const PORT = Number(process.env.PORT || 3001)
const GROQ_BASE_URL = process.env.GROQ_BASE_URL || "https://api.groq.com/openai/v1"
const GROQ_MODEL = process.env.GROQ_MODEL || "llama-3.1-8b-instant"
const TIEMPO_LIMITE_MS = 45000

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const distPath = path.resolve(__dirname, "../dist")
const envLocalPath = path.resolve(__dirname, "../.env.local")

loadLocalEnv()

app.use(express.json())

app.get("/api/health", (_request, response) => {
  response.json({
    ok: true,
    model: GROQ_MODEL,
    provider: "groq",
  })
})

app.post("/api/chat", async (request, response) => {
  const mensaje = request.body?.mensaje
  const perfilMedico = request.body?.perfilMedico

  if (typeof mensaje !== "string" || !mensaje.trim()) {
    return response.status(400).json({
      error: "Debes enviar un mensaje valido para consultar a EmerTech.",
    })
  }

  if (!process.env.GROQ_API_KEY) {
    return response.status(500).json({
      error: "Falta configurar la clave GROQ_API_KEY del asistente.",
    })
  }

  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), TIEMPO_LIMITE_MS)

  try {
    const respuestaGroq = await fetch(`${GROQ_BASE_URL}/chat/completions`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        "Content-Type": "application/json",
      },
      signal: controller.signal,
      body: JSON.stringify({
        model: GROQ_MODEL,
        messages: [
          {
            role: "system",
            content: EMERTECH_SYSTEM_PROMPT,
          },
          {
            role: "system",
            content: formatMedicalProfile(perfilMedico),
          },
          {
            role: "user",
            content: mensaje.trim(),
          },
        ],
        temperature: 0.3,
        max_completion_tokens: 700,
      }),
    })

    const datos = await respuestaGroq.json().catch(() => null)

    if (!respuestaGroq.ok) {
      return response.status(502).json({
        error:
          datos?.error?.message ||
          datos?.error ||
          "La API de IA devolvio un error al procesar la consulta.",
      })
    }

    const contenido = datos?.choices?.[0]?.message?.content?.trim()

    if (!contenido) {
      return response.status(502).json({
        error: "La API de IA respondio sin contenido util para mostrar.",
      })
    }

    return response.json({
      respuesta: contenido,
      model: datos?.model || GROQ_MODEL,
    })
  } catch (errorCapturado) {
    if (errorCapturado.name === "AbortError") {
      return response.status(504).json({
        error:
          "La API de IA tardo demasiado en responder. Vuelve a intentar.",
      })
    }

    return response.status(503).json({
      error:
        "No fue posible conectarse con la API de IA en este momento.",
    })
  } finally {
    clearTimeout(timeout)
  }
})

function loadLocalEnv() {
  if (!fs.existsSync(envLocalPath)) {
    return
  }

  const envFile = fs.readFileSync(envLocalPath, "utf8")

  envFile
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith("#") && line.includes("="))
    .forEach((line) => {
      const separatorIndex = line.indexOf("=")
      const key = line.slice(0, separatorIndex).trim()
      const value = line.slice(separatorIndex + 1).trim()

      if (key && !process.env[key]) {
        process.env[key] = value.replace(/^["']|["']$/g, "")
      }
    })
}

function formatMedicalProfile(profile) {
  if (!profile || typeof profile !== "object") {
    return "No hay perfil medico guardado para este usuario."
  }

  const fields = [
    ["Nombre", profile.nombre],
    ["Edad", profile.edad],
    ["Contacto de emergencia", profile.contactoEmergencia],
    ["Alergias", profile.alergias],
    ["Condiciones medicas", profile.condiciones],
    ["Medicamentos actuales", profile.medicamentos],
    ["Notas medicas", profile.notasMedicas],
  ]

  const content = fields
    .map(([label, value]) => `${label}: ${sanitizeProfileValue(value)}`)
    .join("\n")

  return `
Perfil local del usuario para considerar al responder.
No reveles estos datos salvo que sea necesario para orientar la emergencia.
Usalos como contexto, no como base para diagnosticos definitivos.

${content}
`.trim()
}

function sanitizeProfileValue(value) {
  if (typeof value !== "string" && typeof value !== "number") {
    return "No indicado"
  }

  const cleanValue = String(value).replace(/\s+/g, " ").trim()

  return cleanValue ? cleanValue.slice(0, 500) : "No indicado"
}

if (fs.existsSync(distPath)) {
  app.use(express.static(distPath))

  app.get(/^(?!\/api).*/, (_request, response) => {
    response.sendFile(path.join(distPath, "index.html"))
  })
}

app.listen(PORT, () => {
  console.log(`Servidor EmerTech disponible en http://localhost:${PORT}`)
  console.log(`Asistente IA usando Groq con el modelo ${GROQ_MODEL}`)
})
