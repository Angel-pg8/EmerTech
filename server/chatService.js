import fs from "node:fs"
import path from "node:path"
import { EMERTECH_SYSTEM_PROMPT } from "./prompts.js"

const TIEMPO_LIMITE_MS = 45000
const DEFAULT_GROQ_BASE_URL = "https://api.groq.com/openai/v1"
const DEFAULT_GROQ_MODEL = "llama-3.1-8b-instant"

export function loadLocalEnv() {
  loadEnvFile(path.resolve(process.cwd(), ".env.local"))
  loadEnvFile(path.resolve(process.cwd(), ".env"))
}

export function getChatHealth() {
  loadLocalEnv()

  return {
    ok: true,
    model: getGroqModel(),
    provider: "groq",
    configured: Boolean(process.env.GROQ_API_KEY),
  }
}

export async function createChatResponse({ mensaje }) {
  loadLocalEnv()

  if (typeof mensaje !== "string" || !mensaje.trim()) {
    return {
      status: 400,
      body: {
        error: "Debes enviar un mensaje valido para consultar a EmerTech.",
      },
    }
  }

  if (!process.env.GROQ_API_KEY) {
    return {
      status: 500,
      body: {
        error:
          "Falta configurar GROQ_API_KEY en el servidor donde esta desplegada la app.",
      },
    }
  }

  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), TIEMPO_LIMITE_MS)

  try {
    const respuestaGroq = await fetch(`${getGroqBaseUrl()}/chat/completions`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        "Content-Type": "application/json",
      },
      signal: controller.signal,
      body: JSON.stringify({
        model: getGroqModel(),
        messages: [
          {
            role: "system",
            content: EMERTECH_SYSTEM_PROMPT,
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

    const rawBody = await respuestaGroq.text()
    const datos = parseJson(rawBody)

    if (!respuestaGroq.ok) {
      return {
        status: 502,
        body: {
          error:
            datos?.error?.message ||
            datos?.error ||
            rawBody ||
            "La API de IA devolvio un error al procesar la consulta.",
        },
      }
    }

    const contenido = datos?.choices?.[0]?.message?.content?.trim()

    if (!contenido) {
      return {
        status: 502,
        body: {
          error: "La API de IA respondio sin contenido util para mostrar.",
        },
      }
    }

    return {
      status: 200,
      body: {
        respuesta: contenido,
        model: datos?.model || getGroqModel(),
      },
    }
  } catch (errorCapturado) {
    if (errorCapturado.name === "AbortError") {
      return {
        status: 504,
        body: {
          error: "La API de IA tardo demasiado en responder. Vuelve a intentar.",
        },
      }
    }

    return {
      status: 503,
      body: {
        error: buildConnectionError(errorCapturado),
      },
    }
  } finally {
    clearTimeout(timeout)
  }
}

function getGroqBaseUrl() {
  return process.env.GROQ_BASE_URL || DEFAULT_GROQ_BASE_URL
}

function getGroqModel() {
  return process.env.GROQ_MODEL || DEFAULT_GROQ_MODEL
}

function loadEnvFile(envPath) {
  if (!fs.existsSync(envPath)) {
    return
  }

  const envFile = fs.readFileSync(envPath, "utf8")

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

function parseJson(value) {
  if (!value?.trim()) {
    return null
  }

  try {
    return JSON.parse(value)
  } catch {
    return null
  }
}

function buildConnectionError(error) {
  const reason =
    error?.cause?.code ||
    error?.cause?.message ||
    error?.message ||
    "sin detalle tecnico disponible"

  return `No fue posible conectarse con la API de IA en este momento. Detalle: ${reason}.`
}
