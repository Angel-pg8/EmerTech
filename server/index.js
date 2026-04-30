import express from "express"
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { createChatResponse, getChatHealth, loadLocalEnv } from "./chatService.js"

const app = express()

loadLocalEnv()

const PORT = Number(process.env.PORT || 3001)

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const distPath = path.resolve(__dirname, "../dist")

app.use(express.json())

app.get("/api/health", (_request, response) => {
  response.json(getChatHealth())
})

app.post("/api/chat", async (request, response) => {
  const result = await createChatResponse(request.body || {})
  response.status(result.status).json(result.body)
})

if (fs.existsSync(distPath)) {
  app.use(express.static(distPath))

  app.get(/^(?!\/api).*/, (_request, response) => {
    response.sendFile(path.join(distPath, "index.html"))
  })
}

app.listen(PORT, () => {
  console.log(`Servidor EmerTech disponible en http://localhost:${PORT}`)
  console.log(`Asistente IA usando Groq con el modelo ${getChatHealth().model}`)
})
