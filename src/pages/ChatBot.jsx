import { useState } from "react"

function ChatBot() {
  const [mensaje, setMensaje] = useState("")
  const [respuesta, setRespuesta] = useState("")
  const [cargando, setCargando] = useState(false)

  async function enviarMensaje(evento) {
    evento.preventDefault()

    if (!mensaje.trim()) {
      return
    }

    setCargando(true)

    // Esta respuesta temporal mantiene la pantalla funcional
    // mientras el servicio de Ollama se conecta desde otra máquina.
    await new Promise((resolve) => setTimeout(resolve, 600))

    setRespuesta(
      "Conexión pendiente con Ollama. La interfaz ya quedó lista para enviar el prompt del usuario y mostrar la respuesta cuando conectemos el backend.",
    )
    setCargando(false)
  }

  return (
    <main className="min-h-screen bg-[#0d1120] px-4 py-6 pb-24 text-white">
      <header className="mb-6">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#00c9b1]">
          Chat de asistencia
        </p>
        <h1 className="mt-2 text-3xl font-black">Asistente EmerTech</h1>
        <p className="mt-3 text-sm leading-6 text-white/70">
          Esta pantalla queda preparada para conectar el prompt del usuario con
          Ollama en la siguiente fase.
        </p>
      </header>

      <section className="rounded-[28px] bg-white p-4 text-gray-900 shadow-xl">
        <form onSubmit={enviarMensaje} className="space-y-4">
          <label className="block">
            <span className="mb-2 block text-sm font-bold">
              Describe tu situación
            </span>
            <textarea
              value={mensaje}
              onChange={(evento) => setMensaje(evento.target.value)}
              placeholder="Ejemplo: tengo una quemadura leve en la mano, ¿qué hago primero?"
              className="min-h-36 w-full rounded-2xl border border-gray-200 p-4 outline-none"
            />
          </label>

          <button
            type="submit"
            className="w-full rounded-2xl bg-[#00c9b1] px-4 py-3 font-bold text-[#0d1120]"
          >
            {cargando ? "Enviando..." : "Enviar mensaje"}
          </button>
        </form>

        <div className="mt-5 rounded-2xl bg-[#f3f8fb] p-4">
          <p className="text-sm font-bold text-[#1e3a8a]">Respuesta</p>
          <p className="mt-2 text-sm leading-6 text-gray-700">
            {respuesta || "Aquí aparecerá la respuesta de Ollama."}
          </p>
        </div>
      </section>
    </main>
  )
}

export default ChatBot
