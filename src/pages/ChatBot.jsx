import { useState } from "react"

function ChatBot() {
  const [mensaje, setMensaje] = useState("")
  const [mensajes, setMensajes] = useState([
    {
      id: "bienvenida",
      autor: "bot",
      texto:
        "Hola, soy el asistente de EmerTech. Cuentame que esta pasando y te orientare con los primeros pasos.",
    },
  ])
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
    setMensajes((mensajesActuales) => [
      ...mensajesActuales,
      {
        id: `usuario-${Date.now()}`,
        autor: "usuario",
        texto: mensajeLimpio,
      },
    ])
    setMensaje("")

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

      setMensajes((mensajesActuales) => [
        ...mensajesActuales,
        {
          id: `bot-${Date.now()}`,
          autor: "bot",
          texto: datos.respuesta || "Ollama no devolvio contenido.",
        },
      ])
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
    <main className="min-h-screen bg-[#0d1120] px-4 py-5 text-white">
      <section className="mx-auto flex min-h-[calc(100vh-9rem)] w-full max-w-md flex-col overflow-hidden rounded-[32px] border border-white/10 bg-[#12182b] shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
        <header className="border-b border-white/10 bg-[#171f35] px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#00c9b1] text-lg font-black text-[#0d1120]">
              AI
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#7ce9d8]">
                Chat de asistencia
              </p>
              <h1 className="mt-1 text-xl font-black">Asistente EmerTech</h1>
            </div>
          </div>
        </header>

        <div className="flex-1 space-y-4 overflow-y-auto bg-[radial-gradient(circle_at_top,_rgba(0,201,177,0.12),_transparent_38%)] px-4 py-5">
          {mensajes.map((item) => {
            const esUsuario = item.autor === "usuario"

            return (
              <article
                key={item.id}
                className={`flex ${esUsuario ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-[24px] px-4 py-3 text-sm leading-6 shadow-lg ${
                    esUsuario
                      ? "rounded-br-md bg-[#00c9b1] text-[#0d1120]"
                      : "rounded-bl-md bg-white/10 text-white"
                  }`}
                >
                  {item.texto}
                </div>
              </article>
            )
          })}

          {cargando ? (
            <article className="flex justify-start">
              <div className="rounded-[24px] rounded-bl-md bg-white/10 px-4 py-3 text-sm text-white/75">
                Consultando a Ollama...
              </div>
            </article>
          ) : null}

          {error ? (
            <article className="rounded-2xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm leading-6 text-red-100">
              {error}
            </article>
          ) : null}
        </div>

        <form
          onSubmit={enviarMensaje}
          className="border-t border-white/10 bg-[#171f35] p-3"
        >
          <div className="flex items-end gap-3 rounded-[28px] border border-white/10 bg-white px-3 py-3 shadow-inner">
            <textarea
              value={mensaje}
              onChange={(evento) => setMensaje(evento.target.value)}
              placeholder="Escribe tu mensaje..."
              className="max-h-32 min-h-[48px] flex-1 resize-none bg-transparent px-1 text-sm text-gray-900 outline-none placeholder:text-gray-400"
            />

            <button
              type="submit"
              disabled={cargando || !mensaje.trim()}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#00c9b1] text-[#0d1120] transition disabled:cursor-not-allowed disabled:opacity-50"
              aria-label="Enviar mensaje"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M3.4 20.4 21 12 3.4 3.6l.1 6.2 12.5 2.2-12.5 2.2-.1 6.2Z" />
              </svg>
            </button>
          </div>
        </form>
      </section>
    </main>
  )
}

export default ChatBot
