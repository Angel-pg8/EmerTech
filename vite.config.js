import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { createChatResponse, getChatHealth } from "./server/chatService.js"

export default defineConfig({
  plugins: [react(), emertechApi()],
})

function emertechApi() {
  return {
    name: "emertech-api",
    configureServer(server) {
      server.middlewares.use("/api/health", (_request, response) => {
        sendJson(response, 200, getChatHealth())
      })

      server.middlewares.use("/api/chat", async (request, response) => {
        if (request.method !== "POST") {
          sendJson(response, 405, {
            error: "Metodo no permitido para el chat.",
          })
          return
        }

        try {
          const body = await readRequestJson(request)
          const result = await createChatResponse(body)
          sendJson(response, result.status, result.body)
        } catch {
          sendJson(response, 400, {
            error: "La solicitud del chat no tiene un JSON valido.",
          })
        }
      })
    },
  }
}

function sendJson(response, status, body) {
  response.statusCode = status
  response.setHeader("Content-Type", "application/json")
  response.end(JSON.stringify(body))
}

function readRequestJson(request) {
  return new Promise((resolve, reject) => {
    let rawBody = ""

    request.on("data", (chunk) => {
      rawBody += chunk
    })

    request.on("end", () => {
      try {
        resolve(rawBody ? JSON.parse(rawBody) : {})
      } catch (error) {
        reject(error)
      }
    })

    request.on("error", reject)
  })
}
