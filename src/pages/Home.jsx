import { useNavigate } from "react-router-dom"
import logo from "../assets/Logo.png"

function Home() {
  const navigate = useNavigate()

  return (
    <main className="flex min-h-screen flex-col items-center bg-[#0d1120] pb-20">
      <div className="flex w-full justify-center pt-4 pb-0">
        <img src={logo} alt="EMERTECH" className="w-72 object-contain" />
      </div>

      <p className="mb-10 text-center text-xl leading-relaxed text-white">
        <span className="font-bold text-[#00c9b1]">Cuidamos</span> de ti en
        <br />
        cada momento
      </p>

      <div className="flex w-full flex-col gap-5 px-6">
        <div
          onClick={() => navigate("/emergencias")}
          className="relative flex w-full cursor-pointer items-center justify-between overflow-hidden rounded-3xl bg-white p-5 shadow-lg transition-transform active:scale-95"
        >
          <div className="absolute -left-6 top-1/2 h-20 w-20 -translate-y-1/2 rounded-full bg-[#00c9b1] opacity-20" />
          <div className="absolute -left-2 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full bg-[#00c9b1] opacity-30" />

          <div className="z-10 ml-10">
            <h3 className="text-xl font-black text-gray-900">EMERGENCIAS</h3>
            <p className="mt-1 text-sm text-gray-400">
              Información de primera mano
            </p>
          </div>

          <div className="absolute -right-6 top-1/2 h-20 w-20 -translate-y-1/2 rounded-full bg-[#00c9b1] opacity-20" />
          <div className="absolute -right-2 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full bg-[#00c9b1] opacity-30" />
        </div>

        <div
          onClick={() => navigate("/organizaciones")}
          className="relative flex w-full cursor-pointer items-center justify-between overflow-hidden rounded-3xl bg-white p-5 shadow-lg transition-transform active:scale-95"
        >
          <div className="absolute -left-6 top-1/2 h-20 w-20 -translate-y-1/2 rounded-full bg-[#1e3a8a] opacity-20" />
          <div className="absolute -left-2 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full bg-[#1e3a8a] opacity-30" />

          <div className="z-10 ml-10">
            <h3 className="text-xl font-black text-gray-900">ORGANIZACIONES</h3>
            <p className="mt-1 text-sm text-gray-400">
              Encuentra centros de salud
            </p>
          </div>

          <div className="absolute -right-6 top-1/2 h-20 w-20 -translate-y-1/2 rounded-full bg-[#1e3a8a] opacity-20" />
          <div className="absolute -right-2 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full bg-[#1e3a8a] opacity-30" />
        </div>
      </div>
    </main>
  )
}

export default Home
