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
      className="fixed bottom-0 left-1/2 z-50 w-full max-w-md -translate-x-1/2 bg-white/10 backdrop-blur-md"
    >
      <div
        className="flex items-center justify-around border-t border-white/15 px-2 py-2"
        style={{ paddingBottom: "calc(0.5rem + env(safe-area-inset-bottom, 0px))" }}
      >
        <Link
          to="/"
          className={`flex flex-col items-center gap-1 px-4 py-1 ${
            isActive("/") ? "text-[#0d1120]" : "text-[#546e7a]"
          }`}
        >
          <img
            src={inicioIcono}
            alt=""
            className="h-7 w-7 object-contain"
            aria-hidden="true"
          />
          <span className="text-xs font-bold">Inicio</span>
        </Link>

        <a
          href="tel:911"
          className="flex flex-col items-center gap-1 px-4 py-1"
          aria-label="Llamar a emergencias"
        >
          <img
            src={sosIcono}
            alt=""
            className="h-14 w-14 object-contain drop-shadow-lg"
            aria-hidden="true"
          />
        </a>

        <button
          type="button"
          onClick={onToggleChat}
          className={`flex flex-col items-center gap-1 px-4 py-1 ${
            isChatOpen ? "text-white" : "text-white/75"
          }`}
          aria-expanded={isChatOpen}
          aria-label="Abrir chat de asistencia"
        >
          <img
            src={chatBotIcono}
            alt=""
            className="h-7 w-7 object-contain"
            aria-hidden="true"
          />
          <span className="text-xs font-bold">Chat Bot</span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
