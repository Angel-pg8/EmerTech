import { useNavigate } from "react-router-dom"
import emergenciaIcono from "../assets/emergencia_icono.png"
import headerImg from "../assets/header.png"
import organizacionesIcono from "../assets/organizaciones_icono.png"

function Home() {
  const navigate = useNavigate()

  return (
    <main className="flex min-h-screen flex-col items-center bg-[#0a0e1a] pb-20">
      <img src={headerImg} alt="header" className="h-40 w-full object-cover" />

      <div className="mt-5 flex w-full flex-1 flex-col justify-center gap-5 px-6">
        <div
          onClick={() => navigate("/emergencias")}
          className="flex w-full cursor-pointer items-center justify-between rounded-2xl bg-white px-5 py-10 shadow-lg transition-transform active:scale-95"
        >
          <img
            src={emergenciaIcono}
            alt="emergencias"
            className="h-28 w-24 object-contain"
          />
          <div className="ml-4 flex-1">
            <h3 className="text-lg font-extrabold text-[#1e3a8a]">EMERGENCIAS</h3>
            <div className="my-1 h-1 w-10 rounded-full bg-[#00c9b1]" />
            <p className="text-sm font-bold text-gray-600">
              Informacion de primera mano
            </p>
          </div>
          <span className="ml-2 self-center text-2xl font-bold text-[#0a0e1a]">
            &rsaquo;
          </span>
        </div>

        <div
          onClick={() => navigate("/organizaciones")}
          className="flex w-full cursor-pointer items-center justify-between rounded-2xl bg-white px-5 py-10 shadow-lg transition-transform active:scale-95"
        >
          <img
            src={organizacionesIcono}
            alt="organizaciones"
            className="h-28 w-24 object-contain"
          />
          <div className="ml-4 flex-1">
            <h3 className="text-lg font-black text-[#0d6e7a]">ORGANIZACIONES</h3>
            <div className="my-1 h-1 w-10 rounded-full bg-[#00c9b1]" />
            <p className="text-sm font-bold text-gray-600">
              Encuentra centros de salud cercanos
            </p>
          </div>
          <span className="text-2xl font-bold text-[#0a0e1a]">&rsaquo;</span>
        </div>
      </div>
    </main>
  )
}

export default Home
