import { useState } from "react"

function ChatBot() {
  const [mensaje, setMensaje] = useState("")
  const [respuesta, setRespuesta] = useState("")
  const [error, setError] = useState("")
  const [cargando, setCargando] = useState(false)

  async function enviarMensaje(evento) {
    evento.preventDefault()

    const mensajeLimpio = mensaje.trim()

    if (!mensajeLimpio) {
      return
    }

    setCargando(true)
    setError("")
    setRespuesta("")

    try {
      const peticion = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mensaje: mensajeLimpio,
        }),
      })

      const datos = await peticion.json()

      if (!peticion.ok) {
        throw new Error(datos.error || "No fue posible obtener una respuesta.")
      }

      setRespuesta(datos.respuesta || "Ollama no devolvio contenido.")
    } catch (errorCapturado) {
      setError(
        errorCapturado.message ||
          "No se pudo conectar con el asistente en este momento.",
      )
    } finally {
      setCargando(false)
    }
  }

  return (
    <main className="min-h-screen bg-[#0d1120] px-4 py-6 pb-24 text-white">
      <header className="mb-6">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#00c9b1]">
          Chat de asistencia
        </p>
        <h1 className="mt-2 text-3xl font-black">Asistente EmerTech</h1>
        <p className="mt-3 text-sm leading-6 text-white/70">
          Describe la emergencia o tu duda. EmerTech enviara tu mensaje al
          backend y este consultara a Ollama en local.
        </p>
      </header>

      <section className="rounded-[28px] bg-white p-4 text-gray-900 shadow-xl">
        <form onSubmit={enviarMensaje} className="space-y-4">
          <label className="block">
            <span className="mb-2 block text-sm font-bold">
              Describe tu situacion
            </span>
            <textarea
              value={mensaje}
              onChange={(evento) => setMensaje(evento.target.value)}
              placeholder="Ejemplo: tengo una quemadura leve en la mano, que hago primero?"
              className="min-h-36 w-full rounded-2xl border border-gray-200 p-4 outline-none"
            />
          </label>

          <button
            type="submit"
            disabled={cargando}
            className="w-full rounded-2xl bg-[#00c9b1] px-4 py-3 font-bold text-[#0d1120] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {cargando ? "Consultando a Ollama..." : "Enviar mensaje"}
          </button>
        </form>

        <div className="mt-5 rounded-2xl bg-[#f3f8fb] p-4">
          <p className="text-sm font-bold text-[#1e3a8a]">Respuesta</p>

          {error ? (
            <p className="mt-2 text-sm leading-6 text-red-600">{error}</p>
          ) : (
            <p className="mt-2 text-sm leading-6 text-gray-700">
              {respuesta || "Aqui aparecera la respuesta de Ollama."}
            </p>
          )}
        </div>
      </section>
    </main>
  )
}

export default ChatBot
