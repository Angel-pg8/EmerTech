import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Emergencias from "./pages/Emergencias"
import EmergenciasLeve from "./pages/EmergenciasLeve"
import EmergenciaDetalle from "./pages/EmergenciaDetalle"
import EmergenciasPlaceholder from "./pages/EmergenciasPlaceholder"
import Organizaciones from "./pages/Organizaciones"
import ChatBot from "./pages/ChatBot"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/emergencias" element={<Emergencias />} />
        <Route path="/emergencias/leve" element={<EmergenciasLeve />} />
        <Route
          path="/emergencias/leve/:id"
          element={<EmergenciaDetalle />}
        />
        <Route
          path="/emergencias/grave"
          element={
            <EmergenciasPlaceholder
              titulo="Emergencias graves"
              descripcion="Esta categoría está en preparación. Por ahora dejamos la navegación lista para que el flujo no se rompa."
            />
          }
        />
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
        <Route path="/chat" element={<ChatBot />} />
      </Routes>
      <Navbar />
    </BrowserRouter>
  )
}

export default App
