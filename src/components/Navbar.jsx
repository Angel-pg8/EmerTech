import { Link, useLocation } from "react-router-dom"

function Navbar() {
  const location = useLocation()

  function isActive(path) {
    if (path === "/") {
      return location.pathname === path
    }

    return location.pathname === path || location.pathname.startsWith(`${path}/`)
  }

  return (
    <nav
      className="fixed bottom-0 left-0 z-50 w-full"
      style={{ backgroundColor: "#b2ebf2" }}
    >
      <div className="flex items-center justify-around py-2">
        <Link
          to="/"
          className={`flex flex-col items-center gap-1 px-4 py-1 ${
            isActive("/") ? "text-[#0d1120]" : "text-[#546e7a]"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </svg>
          <span className="text-xs font-bold">Inicio</span>
        </Link>

        <Link to="/emergencias" className="flex flex-col items-center gap-1 px-4 py-1">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600 shadow-lg">
            <span className="text-xs font-black tracking-wider text-white">SOS</span>
          </div>
        </Link>

        <Link
          to="/chat"
          className={`flex flex-col items-center gap-1 px-4 py-1 ${
            isActive("/chat") ? "text-[#0d1120]" : "text-[#546e7a]"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
          </svg>
          <span className="text-xs font-bold">Chat Bot</span>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
