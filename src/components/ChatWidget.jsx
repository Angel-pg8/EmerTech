import { useState } from "react"

function ChatWidget({ isOpen, onClose }) {
  const [mensaje, setMensaje] = useState("")
  const [mensajes, setMensajes] = useState([])
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

      const datos = await readJsonResponse(peticion)

      if (!peticion.ok) {
        throw new Error(datos?.error || "No fue posible obtener una respuesta.")
      }

      setMensajes((mensajesActuales) => [
        ...mensajesActuales,
        {
          id: `bot-${Date.now()}`,
          autor: "bot",
          texto: datos?.respuesta || "El asistente no devolvio contenido.",
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

  if (!isOpen) {
    return null
  }

  return (
    <section className="absolute inset-x-3 bottom-20 z-40 mx-auto">
      <div className="flex h-[min(62vh,540px)] flex-col overflow-hidden rounded-[28px] border border-white/10 bg-[#12182b] text-white shadow-[0_28px_70px_rgba(0,0,0,0.45)]">
        <header className="flex items-center justify-between border-b border-white/10 bg-[#171f35] px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#3eb9bc] text-sm font-black text-[#0d1120]">
              AI
            </div>
            <div>
              <p className="text-xs font-bold uppercase text-[#7ce9d8]">
                Asistente EmerTech
              </p>
              <h2 className="text-base font-black">Chat de asistencia</h2>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-xl font-bold text-white transition active:scale-95"
            aria-label="Cerrar chat"
          >
            x
          </button>
        </header>

        <div className="flex-1 space-y-3 overflow-y-auto bg-[radial-gradient(circle_at_top,_rgba(62,185,188,0.18),_transparent_42%)] px-4 py-4">
          {mensajes.map((item) => {
            const esUsuario = item.autor === "usuario"

            return (
              <article
                key={item.id}
                className={`flex ${esUsuario ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-[22px] px-4 py-3 text-sm leading-6 shadow-lg ${
                    esUsuario
                      ? "rounded-br-md bg-[#3eb9bc] text-[#0d1120]"
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
              <div className="rounded-[22px] rounded-bl-md bg-white/10 px-4 py-3 text-sm text-white/75">
                Consultando...
              </div>
            </article>
          ) : null}

          {error ? (
            <article className="rounded-2xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm leading-6 text-red-100">
              {error}
            </article>
          ) : null}
        </div>

        <form onSubmit={enviarMensaje} className="border-t border-white/10 bg-[#171f35] p-3">
          <div className="flex items-end gap-3 rounded-[24px] border border-white/10 bg-white px-3 py-3 shadow-inner">
            <textarea
              value={mensaje}
              onChange={(evento) => setMensaje(evento.target.value)}
              placeholder="Escribe tu mensaje..."
              className="max-h-28 min-h-[44px] flex-1 resize-none bg-transparent px-1 text-sm text-gray-900 outline-none placeholder:text-gray-400"
            />

            <button
              type="submit"
              disabled={cargando || !mensaje.trim()}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#3eb9bc] text-lg font-black text-[#0d1120] transition active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
              aria-label="Enviar mensaje"
            >
              &gt;
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

async function readJsonResponse(response) {
  const text = await response.text()

  if (!text.trim()) {
    return null
  }

  try {
    return JSON.parse(text)
  } catch {
    throw new Error("El servidor respondio con un formato inesperado.")
  }
}

export default ChatWidget
