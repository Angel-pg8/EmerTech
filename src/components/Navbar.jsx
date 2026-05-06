import { Link, useLocation } from "react-router-dom"
import chatBotIcono from "../assets/chat_bot_icono.png"
import inicioIcono from "../assets/inicio_icono.png"
import organizacionesIcono from "../assets/organizaciones_icono.png"
import sosIcono from "../assets/sos_icono.png"

function Navbar({ isChatOpen, onToggleChat }) {
  const location = useLocation()

  function isEmergenciasActive() {
    return (
      location.pathname === "/" ||
      location.pathname === "/emergencias" ||
      location.pathname.startsWith("/emergencias/")
    )
  }

  function isSectionActive(path) {
    return location.pathname === path || location.pathname.startsWith(`${path}/`)
  }

  return (
    <nav
      className="w-full"
      style={{ backgroundColor: "#0d1120" }}
    >
      <div
        className="grid grid-cols-4 items-center gap-1 px-2 pt-2"
        style={{ paddingBottom: "calc(0.4rem + env(safe-area-inset-bottom, 0px))" }}
      >
        <Link
          to="/"
          className={`flex min-h-[58px] flex-col items-center justify-center gap-1 rounded-2xl px-1 py-1 text-center ${
            isEmergenciasActive() ? "text-[#45e3df]" : "text-white/80"
          }`}
        >
          <img
            src={inicioIcono}
            alt=""
            className="h-7 w-7 object-contain"
            aria-hidden="true"
          />
          <span className="text-[11px] font-black leading-tight">Emergencias</span>
        </Link>

        <Link
          to="/organizaciones"
          className={`flex min-h-[58px] flex-col items-center justify-center gap-1 rounded-2xl px-1 py-1 text-center ${
            isSectionActive("/organizaciones") ? "text-[#45e3df]" : "text-white/80"
          }`}
        >
          <img
            src={organizacionesIcono}
            alt=""
            className="h-7 w-7 object-contain"
            aria-hidden="true"
          />
          <span className="text-[11px] font-black leading-tight">
            Organizaciones
          </span>
        </Link>

        <a
          href="tel:911"
          className="flex min-h-[58px] flex-col items-center justify-center gap-1 rounded-2xl px-1 py-1 text-center text-white/80"
          aria-label="Llamar a emergencias"
        >
          <img
            src={sosIcono}
            alt=""
            className="h-10 w-10 object-contain drop-shadow-lg"
            aria-hidden="true"
          />
          <span className="text-[11px] font-black leading-tight">SOS</span>
        </a>

        <button
          type="button"
          onClick={onToggleChat}
          className={`flex min-h-[58px] flex-col items-center justify-center gap-1 rounded-2xl px-1 py-1 text-center ${
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
