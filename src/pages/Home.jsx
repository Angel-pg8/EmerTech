import { useNavigate } from "react-router-dom"
import logo from "../assets/Logo.png"

function Home() {
  const navigate = useNavigate()

  return (
    <main className="min-h-screen bg-[#0d1120] flex flex-col items-center pb-20">

      {/* LOGO */}
      <div className="w-full flex justify-center pt-4 pb-0">
        <img src={logo} alt="EMERTECH" className="w-72 object-contain" />
      </div>

      {/* SUBTÍTULO */}
      <p className="text-center text-xl text-white mb-10 leading-relaxed">
        <span className="text-[#00c9b1] font-bold">Cuidamos</span> de ti en<br />
        cada momento
      </p>

      {/* TARJETAS */}
      <div className="flex flex-col w-full px-6 gap-5">

        {/* TARJETA EMERGENCIAS */}
        <div
          onClick={() => navigate("/emergencias")}
          className="w-full bg-white rounded-3xl p-5 flex items-center justify-between cursor-pointer active:scale-95 transition-transform shadow-lg overflow-hidden relative"
        >
          {/* Círculo decorativo izquierda */}
          <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-[#00c9b1] opacity-20"></div>
          <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#00c9b1] opacity-30"></div>

          {/* Texto */}
          <div className="ml-10 z-10">
            <h3 className="text-xl font-black text-gray-900">EMERGENCIAS</h3>
            <p className="text-gray-400 text-sm mt-1">Información de primera mano</p>
          </div>

          {/* Círculo decorativo derecha */}
          <div className="absolute -right-6 top-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-[#00c9b1] opacity-20"></div>
          <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#00c9b1] opacity-30"></div>
        </div>

        {/* TARJETA ORGANIZACIONES */}
        <div
          onClick={() => navigate("/organizaciones")}
          className="w-full bg-white rounded-3xl p-5 flex items-center justify-between cursor-pointer active:scale-95 transition-transform shadow-lg overflow-hidden relative"
        >
          {/* Círculo decorativo izquierda */}
          <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-[#1e3a8a] opacity-20"></div>
          <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#1e3a8a] opacity-30"></div>

          {/* Texto */}
          <div className="ml-10 z-10">
            <h3 className="text-xl font-black text-gray-900">ORGANIZACIONES</h3>
            <p className="text-gray-400 text-sm mt-1">Encuentra centros de salud</p>
          </div>

          {/* Círculo decorativo derecha */}
          <div className="absolute -right-6 top-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-[#1e3a8a] opacity-20"></div>
          <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#1e3a8a] opacity-30"></div>
        </div>

      </div>
    </main>
  )
}

export default Home