import { useEffect, useState } from "react"
import { useNavigate, useParams, useLocation } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../firebase"
import BackButton from "../components/BackButton"

import imgBajoAzucar from "../assets/Portada_emergencias/Emergencias_leves/Emergencias_muygraves/bajoazucar-MUYGRAVE.png";
import imgConvulsion from "../assets/Portada_emergencias/Emergencias_leves/Emergencias_muygraves/convulsionsevera-MUYGRAVE.png";
import imgDolorPecho from "../assets/Portada_emergencias/Emergencias_leves/Emergencias_muygraves/dolorenelpecho-MUYGRAVE.png";
import imgFiebre from "../assets/Portada_emergencias/Emergencias_leves/Emergencias_muygraves/fiebrealta-MUYGRAVE.png";

// Imágenes de pasos — agrégalas a assets/Emergencias/MuyGraves/
import pasosConvulsion from "../assets/Emergencias/Muy_graves/convulsion_pasos.jpeg"
import pasosDolorPecho from "../assets/Emergencias/Muy_graves/dolor_pecho_pasos.jpeg"
import pasosFiebre from "../assets/Emergencias/Muy_graves/fiebre_alta_persistente_pasos.jpeg"
import pasosHipoglucemia from "../assets/Emergencias/Muy_graves/hipoglucemia_pasos.jpeg"

const imagenesLocales = {
  "Convulsión": imgConvulsion,
  "Dolor de pecho": imgDolorPecho,     
  "Fiebre alta persistente": imgFiebre,
  "Hipoglucemia": imgBajoAzucar,
}

const imagenesPasos = {
  "Convulsión": pasosConvulsion,
    "Dolor de pecho": pasosDolorPecho, 
  "Fiebre alta persistente": pasosFiebre,
  "Hipoglucemia": pasosHipoglucemia,
}

function EmergenciaDetalleMuyGrave() {
  const navigate = useNavigate()
  const { id } = useParams()
  const { state } = useLocation()
  const docId = state?.docId || id
  const [emergencia, setEmergencia] = useState(null)
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    const fetchEmergencia = async () => {
      try {
        const docRef = doc(db, "Emergencias muy graves", docId)
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
          setEmergencia({ id: docSnap.id, ...docSnap.data() })
        }
      } catch (error) {
        console.error("Error:", error)
      } finally {
        setCargando(false)
      }
    }
    fetchEmergencia()
  }, [docId])

  if (cargando) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#0d1120]">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-white/20 border-t-[#3EB9BC]" />
      </main>
    )
  }

  if (!emergencia) {
    return (
      <main className="min-h-screen bg-[#0d1120] px-4 py-8 pb-20 text-white">
        <BackButton onClick={() => navigate(-1)} className="mb-6" />
        <div className="rounded-3xl bg-white/10 p-6 text-center">
          <h1 className="text-2xl font-bold">Emergencia no encontrada</h1>
        </div>
      </main>
    )
  }

  const nombreEmergencia = emergencia["Nombre de la emergencia"]
  const imagen = imagenesLocales[nombreEmergencia] || null
  const imagenPasos = imagenesPasos[nombreEmergencia] || null

  return (
    <main className="min-h-screen bg-white pb-20 text-white">

      <div className="relative">
        {imagen && (
          <img
            src={imagen}
            alt={nombreEmergencia}
            className="h-48 w-full object-cover"
          />
        )}
        <BackButton onClick={() => navigate(-1)} className="absolute left-4 top-4" />
      </div>

      <div className="rounded-t-[28px] bg-white -mt-4 relative text-gray-900 px-5 pt-6 pb-8 min-h-[calc(100vh-12rem)]">

        <p className="text-sm text-gray-400 font-semibold">
          {emergencia["Tipo de emergencia"]}
        </p>
        <h1 className="mt-1 text-2xl font-black text-gray-900">
          {nombreEmergencia}
        </h1>

        <div className="my-4 h-px bg-gray-100" />

        <div className="flex gap-4">
          <p className="w-32 shrink-0 text-sm text-gray-400 font-medium">
            Entidades a contactar
          </p>
          <p className="text-sm text-gray-800 font-semibold leading-6 whitespace-pre-line">
            {emergencia["Entidades a contactar"]}
          </p>
        </div>

        {imagenPasos && (
          <div className="mt-6">
            <img
              src={imagenPasos}
              alt={`Pasos para ${nombreEmergencia}`}
              className="w-full rounded-2xl object-contain"
            />
          </div>
        )}

      </div>
    </main>
  )
}

export default EmergenciaDetalleMuyGrave
