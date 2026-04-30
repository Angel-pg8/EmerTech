import { Link, useLocation } from "react-router-dom"
import chatBotIcono from "../assets/chat_bot_icono.png"
import inicioIcono from "../assets/inicio_icono.png"
import sosIcono from "../assets/sos_icono.png"

function Navbar({ isChatOpen, onToggleChat }) {
  const location = useLocation()

  function isActive(path) {
    if (path === "/") {
      return location.pathname === path
    }

    return location.pathname === path || location.pathname.startsWith(`${path}/`)
  }

  return (
    <nav
      className="fixed bottom-0 left-1/2 z-50 w-full max-w-md -translate-x-1/2 bg-transparent"
    >
      <div
        className="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center px-4 pt-3"
        style={{ paddingBottom: "calc(0.65rem + env(safe-area-inset-bottom, 0px))" }}
      >
        <Link
          to="/"
          className={`flex min-h-[72px] flex-col items-center justify-center gap-1 px-2 py-1 ${
            isActive("/") ? "text-[#45e3df]" : "text-white/80"
          }`}
        >
          <img
            src={inicioIcono}
            alt=""
            className="h-7 w-7 object-contain"
            aria-hidden="true"
          />
          <span className="text-xs font-black">Inicio</span>
        </Link>

        <div className="h-16 w-px bg-[#65708f]" aria-hidden="true" />

        <a
          href="tel:911"
          className="flex min-h-[72px] flex-col items-center justify-center gap-1 px-2 py-1 text-center text-white/80"
          aria-label="Llamar a emergencias"
        >
          <img
            src={sosIcono}
            alt=""
            className="h-10 w-10 object-contain drop-shadow-lg"
            aria-hidden="true"
          />
          <span className="max-w-[92px] text-xs font-black leading-tight">
            Llamadas de emergencias
          </span>
        </a>

        <div className="h-16 w-px bg-[#65708f]" aria-hidden="true" />

        <button
          type="button"
          onClick={onToggleChat}
          className={`flex min-h-[72px] flex-col items-center justify-center gap-1 px-2 py-1 ${
            isChatOpen ? "text-[#45e3df]" : "text-white/80"
          }`}
          aria-expanded={isChatOpen}
          aria-label="Abrir chat de asistencia"
        >
          <img
            src={chatBotIcono}
            alt=""
            className="h-9 w-9 object-contain"
            aria-hidden="true"
          />
          <span className="text-xs font-black">Chatbot</span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
