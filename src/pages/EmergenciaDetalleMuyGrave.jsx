import { useEffect, useState } from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../firebase"
import BackButton from "../components/BackButton"
import EmergenciaDetalleLayout from "../components/EmergenciaDetalleLayout"
import { normalizarTexto } from "../data/organizaciones"

import imgBajoAzucar from "../assets/Portada_emergencias/Emergencias_leves/Emergencias_muygraves/bajoazucar-MUYGRAVE.png"
import imgConvulsion from "../assets/Portada_emergencias/Emergencias_leves/Emergencias_muygraves/convulsionsevera-MUYGRAVE.png"
import imgDolorPecho from "../assets/Portada_emergencias/Emergencias_leves/Emergencias_muygraves/dolorenelpecho-MUYGRAVE.png"
import imgFiebre from "../assets/Portada_emergencias/Emergencias_leves/Emergencias_muygraves/fiebrealta-MUYGRAVE.png"

import pasosConvulsion from "../assets/Emergencias/Muy_graves/convulsion_pasos.jpeg"
import pasosDolorPecho from "../assets/Emergencias/Muy_graves/dolor_pecho_pasos.jpeg"
import pasosFiebre from "../assets/Emergencias/Muy_graves/fiebre_alta_persistente_pasos.jpeg"
import pasosHipoglucemia from "../assets/Emergencias/Muy_graves/hipoglucemia_pasos.jpeg"

const imagenesLocales = {
  Convulsion: imgConvulsion,
  "Dolor de pecho": imgDolorPecho,
  "Fiebre alta persistente": imgFiebre,
  Hipoglucemia: imgBajoAzucar,
}

const imagenesPasos = {
  Convulsion: pasosConvulsion,
  "Dolor de pecho": pasosDolorPecho,
  "Fiebre alta persistente": pasosFiebre,
  Hipoglucemia: pasosHipoglucemia,
}

function obtenerRecursoPorNombre(recursos, nombre) {
  return Object.entries(recursos).find(
    ([clave]) => normalizarTexto(clave) === normalizarTexto(nombre),
  )?.[1]
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

  return (
    <EmergenciaDetalleLayout
      nombre={nombreEmergencia}
      imagen={obtenerRecursoPorNombre(imagenesLocales, nombreEmergencia) || null}
      contacto={emergencia["Entidades a contactar"]}
      imagenPasos={obtenerRecursoPorNombre(imagenesPasos, nombreEmergencia) || null}
    />
  )
}

export default EmergenciaDetalleMuyGrave
