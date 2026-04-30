import { useState } from "react"
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom"
import ChatWidget from "./components/ChatWidget"
import Navbar from "./components/Navbar"
import WelcomeScreen from "./components/WelcomeScreen"
import Home from "./pages/Home"
import Emergencias from "./pages/Emergencias"
import EmergenciasLeve from "./pages/EmergenciasLeve"
import EmergenciasGrave from "./pages/EmergenciasGraves"
import EmergenciaDetalle from "./pages/EmergenciaDetalle"
import EmergenciaDetalleGrave from "./pages/EmergenciaDetalleGraves"
import EmergenciasPlaceholder from "./pages/EmergenciasPlaceholder"
import Organizaciones from "./pages/Organizaciones"
import OrganizacionDetalle from "./pages/OrganizacionDetalle"
import OrganizacionesLista from "./pages/OrganizacionesLista"
import { getStoredUserProfile } from "./utils/userProfile"

function App() {
  const [userProfile, setUserProfile] = useState(() => getStoredUserProfile())
  const [isChatOpen, setIsChatOpen] = useState(false)

  if (!userProfile) {
    return <WelcomeScreen onComplete={setUserProfile} />
  }

  return (
    <BrowserRouter>
      <div className="relative mx-auto min-h-screen min-h-dvh max-w-md shadow-2xl">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/emergencias" element={<Emergencias />} />
          <Route path="/emergencias/leve" element={<EmergenciasLeve />} />
          <Route path="/emergencias/leve/:id" element={<EmergenciaDetalle />} />
          <Route path="/emergencias/grave/:id" element={<EmergenciaDetalleGrave />} />
          <Route path="/emergencias/grave" element={<EmergenciasGrave/>} />
          <Route
            path="/emergencias/muy-grave"
            element={
              <EmergenciasPlaceholder
                titulo="Emergencias críticas"
                descripcion="Esta categoría está en preparación. Por ahora dejamos la navegación lista para que el flujo no se rompa."
              />
            }
          />
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
