import { useState } from "react"
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom"
import ChatWidget from "./components/ChatWidget"
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

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false)

  return (
    <BrowserRouter>
      <div className="relative mx-auto min-h-screen min-h-dvh max-w-md shadow-2xl">
        <Routes>
          <Route path="/" element={<Emergencias />} />
          <Route path="/emergencias" element={<Emergencias />} />
          <Route path="/emergencias/leve" element={<EmergenciasLeve />} />
          <Route path="/emergencias/leve/:id" element={<EmergenciaDetalle />} />
          <Route
            path="/emergencias/grave/:id"
            element={<EmergenciaDetalleGrave />}
          />
          <Route path="/emergencias/muygraves" element={<EmergenciasMuyGrave />} />
          <Route
            path="/emergencias/muygraves/:id"
            element={<EmergenciaDetalleMuyGrave />}
          />
          <Route path="/emergencias/grave" element={<EmergenciasGrave />} />
          <Route path="/organizaciones" element={<Organizaciones />} />
          <Route path="/organizaciones/:zona" element={<OrganizacionesLista />} />
          <Route
            path="/organizaciones/:zona/:id"
            element={<OrganizacionDetalle />}
          />
          <Route path="/chat" element={<Navigate to="/" replace />} />
        </Routes>
        <ChatWidget isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
        <Navbar
          isChatOpen={isChatOpen}
          onToggleChat={() => setIsChatOpen((currentValue) => !currentValue)}
        />
      </div>
    </BrowserRouter>
  )
}

export default App
