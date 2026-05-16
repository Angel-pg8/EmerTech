import { useState, useEffect } from "react"
import { BrowserRouter, Navigate, Routes, Route, useLocation } from "react-router-dom"
import ChatWidget from "./components/ChatWidget"
import GoogleAdBanner from "./components/GoogleAdBanner"
import Navbar from "./components/Navbar"
import Emergencias from "./pages/Emergencias"
import EmergenciasLeve from "./pages/EmergenciasLeve"
import EmergenciasGrave from "./pages/EmergenciasGraves"
import EmergenciasMuyGrave from "./pages/EmergenciasMuyGrave"
import EmergenciaDetalle from "./pages/EmergenciaDetalle"
import EmergenciaDetalleGrave from "./pages/EmergenciaDetalleGraves"
import EmergenciaDetalleMuyGrave from "./pages/EmergenciaDetalleMuyGrave"
import Organizaciones from "./pages/Organizaciones"
import OrganizacionDetalle from "./pages/OrganizacionDetalle"
import OrganizacionesLista from "./pages/OrganizacionesLista"
import DolorOido from "./pages/Emergencias_leves_pantallas/dolor_oido"

function AppRoutes() {
  const location = useLocation()

  return (
    <div key={location.pathname} className="screen-transition">
      <Routes location={location}>
        <Route path="/" element={<Emergencias />} />
        <Route path="/emergencias" element={<Emergencias />} />
        <Route path="/emergencias/leve" element={<EmergenciasLeve />} />
        <Route path="/emergencias/leve/:id" element={<EmergenciaDetalle />} />
        <Route path="/emergencias/grave/:id" element={<EmergenciaDetalleGrave />} />
        <Route path="/emergencias/muygraves" element={<EmergenciasMuyGrave />} />
        <Route path="/emergencias/muygraves/:id" element={<EmergenciaDetalleMuyGrave />} />
        <Route path="/emergencias/grave" element={<EmergenciasGrave />} />
        <Route path="/organizaciones" element={<Organizaciones />} />
        <Route path="/organizaciones/:zona" element={<OrganizacionesLista />} />
        <Route path="/organizaciones/:zona/:id" element={<OrganizacionDetalle />} />
        <Route path="/chat" element={<Navigate to="/" replace />} />
        <Route path="/emergencias/leve/Dolor de oido" element={<DolorOido onBack={() => navigate(-1)} />} />
      </Routes>
    </div>
  )
}

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  // En móvil: app normal sin marco
  if (isMobile) {
    return (
      <BrowserRouter>
        <div className="relative flex h-screen min-h-screen flex-col bg-[#0a0e1a]">
          <div className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: "none" }}>
            <GoogleAdBanner />
            <AppRoutes />
          </div>
          <ChatWidget isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
          <div className="fixed bottom-0 left-0 right-0 z-50">
            <Navbar
              isChatOpen={isChatOpen}
              onToggleChat={() => setIsChatOpen((v) => !v)}
            />
          </div>
        </div>
      </BrowserRouter>
    )
  }

  // En desktop: con marco iPhone
  return (
    <BrowserRouter>
      <div className="flex min-h-screen items-center justify-center bg-gray-900 p-6">
        <div
          className="relative overflow-hidden rounded-[44px] bg-[#0a0e1a]"
          style={{
            width: 390,
            height: 844,
            border: "10px solid #1a1a1a",
            boxShadow: `
              0 0 0 1px #3a3a3a,
              0 0 0 14px #111,
              0 0 0 15px #444,
              0 40px 100px rgba(0,0,0,0.6)
            `,
          }}
        >
          {/* Botones laterales izquierdos */}
          <div className="absolute left-[-13px] top-[80px] h-6 w-[3px] rounded-l bg-[#2a2a2a]" />
          <div className="absolute left-[-13px] top-[120px] h-11 w-[3px] rounded-l bg-[#2a2a2a]" />
          <div className="absolute left-[-13px] top-[175px] h-11 w-[3px] rounded-l bg-[#2a2a2a]" />
          {/* Botón lateral derecho */}
          <div className="absolute right-[-13px] top-[110px] h-16 w-[3px] rounded-r bg-[#2a2a2a]" />

          {/* Dynamic Island */}
          <div className="mx-auto mt-3 h-7 w-24 rounded-full bg-black" />

          {/* Contenido */}
          <div className="relative flex flex-col overflow-hidden" style={{ height: "calc(844px - 60px)" }}>
            <div className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: "none" }}>
              <GoogleAdBanner />
              <AppRoutes />
            </div>
            <ChatWidget isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />

            <div className="absolute bottom-0 left-0 right-0 z-50">
              <Navbar
                isChatOpen={isChatOpen}
                onToggleChat={() => setIsChatOpen((v) => !v)}
              />
            </div>
          </div>

          {/* Home indicator */}
          <div className="absolute bottom-2 left-1/2 h-1 w-24 -translate-x-1/2 rounded-full bg-white/30" />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
