import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Emergencias from "./pages/Emergencias"
import EmergenciasCategoria from "./pages/EmergenciasCategoria"
import EmergenciaDetalle from "./pages/EmergenciaDetalle"
import Organizaciones from "./pages/Organizaciones"
import OrganizacionesLista from "./pages/OrganizacionesLista"
import OrganizacionDetalle from "./pages/OrganizacionDetalle"
import ChatBot from "./pages/ChatBot"

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen pb-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/emergencias" element={<Emergencias />} />
          <Route path="/emergencias/:categoria" element={<EmergenciasCategoria />} />
          <Route path="/emergencias/:categoria/:id" element={<EmergenciaDetalle />} />
          <Route path="/organizaciones" element={<Organizaciones />} />
          <Route path="/organizaciones/:zona" element={<OrganizacionesLista />} />
          <Route
            path="/organizaciones/:zona/:id"
            element={<OrganizacionDetalle />}
          />
          <Route path="/chat" element={<ChatBot />} />
        </Routes>
      </div>
      <Navbar />
    </BrowserRouter>
  )
}

export default App
