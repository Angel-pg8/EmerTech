import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Emergencias from "./pages/Emergencias"
import Organizaciones from "./pages/Organizaciones"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/emergencias" element={<Emergencias />} />
        <Route path="/organizaciones" element={<Organizaciones />} />
      </Routes>
      <Navbar />
    </BrowserRouter>
  )
}

export default App