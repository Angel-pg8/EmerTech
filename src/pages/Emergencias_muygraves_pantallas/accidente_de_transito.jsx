import imgAccidente from "../../assets/Portada_emergencias/Emergencias_leves/Emergencias_muygraves/accidentetransito-MUYGRAVE.png"
import iconoPaso1 from "../../assets/emergencias_muy_graves/Accidente_de_transito/paso1-accidente-muy grave.png"
import iconoPaso2 from "../../assets/emergencias_muy_graves/Accidente_de_transito/paso2-accidente-muy gave.png"
import iconoPaso3 from "../../assets/emergencias_muy_graves/Accidente_de_transito/paso3-accidente -muy grave.png"
import iconoPaso5 from "../../assets/emergencias_muy_graves/Accidente_de_transito/paso5-accidente-muy grave.png"
import iconoPaso6 from "../../assets/emergencias_muy_graves/Accidente_de_transito/paso6-accidente-muy grave.png"
import { useNavigate } from "react-router-dom"
import BackButton from "../../components/BackButton"

const pasos = [
  {
    numero: 1,
    titulo: "Asegura la zona y evalúa la situación",
    descripcion: "Antes de actuar, verifica que el área sea segura. Enciende las luces de emergencia y coloca señales si las tienes disponibles.",
    icono: iconoPaso1,
  },
  {
    numero: 2,
    titulo: "Verifica la respuesta y el estado de las personas",
    descripcion: "Habla con las víctimas para saber si están conscientes. Observa si respiran con normalidad y si tienen heridas visibles.",
    icono: iconoPaso2,
  },
  {
    numero: 3,
    titulo: "Llama a emergencias",
    descripcion: "Contacta de inmediato al 911. Indica la ubicación exacta, número de víctimas y estado aparente de los heridos.",
    icono: iconoPaso3,
  },
  {
    numero: 4,
    titulo: "Si no responde, inicia RCP",
    descripcion: "Si la persona no respira ni reacciona, comienza compresiones torácicas firmes al centro del pecho hasta que llegue ayuda médica.",
    icono: iconoPaso5,
  },
  {
    numero: 5,
    titulo: "Mantener a la persona abrigada y en observación",
    descripcion: "Cubre a la víctima con una manta o ropa para evitar el shock por frío. Monitorea su respiración y nivel de conciencia constantemente.",
    icono: iconoPaso6,
    esAlerta: true,
  },
]

export default function AccidenteDeTransito() {
  const navigate = useNavigate()

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", backgroundColor: "#f0f4f8", minHeight: "100vh", paddingBottom: 100 }}>

      {/* Header con imagen */}
      <div style={{ position: "relative", height: 220, overflow: "hidden", borderBottomLeftRadius: 24, borderBottomRightRadius: 24 }}>
        <img src={imgAccidente} alt="Accidente de tránsito" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", top: 16, left: 16, zIndex: 10 }}>
          <BackButton onClick={() => navigate("/emergencias/muygraves")} />
        </div>
      </div>

      {/* Título */}
      <div style={{ padding: "20px 20px 8px" }}>
        <h1 style={{ fontSize: 26, fontWeight: 800, color: "#0d1b2a", margin: 0 }}>
          Accidente de tránsito
        </h1>
      </div>

      {/* Contacto */}
      <div style={{
        margin: "0 20px 20px",
        backgroundColor: "#fff",
        borderRadius: 14,
        padding: "12px 16px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
      }}>
        <span style={{ fontSize: 13, color: "#6b7280", fontWeight: 500 }}>Entidades a contactar</span>
        <span style={{ fontSize: 14, fontWeight: 700, color: "#1a56db" }}>911 / PNC 1222</span>
      </div>

      {/* Tarjeta infografía */}
      <div style={{
        margin: "0 16px 20px",
        backgroundColor: "#fff",
        borderRadius: 20,
        overflow: "hidden",
        boxShadow: "0 4px 20px rgba(0,0,0,0.09)",
      }}>
        <div style={{ backgroundColor: "#1a3a6b", padding: "14px 20px", textAlign: "center" }}>
          <p style={{ color: "#93c5fd", fontSize: 20, fontWeight: 600, margin: 0 }}>¿Qué hacer?</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 1, backgroundColor: "#e5e7eb" }}>
          {pasos.map((paso) => (
            <div key={paso.numero} style={{
              backgroundColor: "#fff",
              padding: "14px 12px",
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                <div style={{
                  width: 28, height: 28, borderRadius: 8,
                  backgroundColor: "#1a3a6b", color: "#fff",
                  fontSize: 20, fontWeight: 800,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  {paso.numero}
                </div>
                <p style={{ fontSize: 15, fontWeight: 700, color: "#0d1b2a", lineHeight: 1.3, margin: 0, paddingTop: 3 }}>
                  {paso.titulo}
                </p>
              </div>

              <div style={{
                backgroundColor: "#ffffff",
                borderRadius: 12,
                padding: 4,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: 120,
              }}>
                <img
                  src={paso.icono}
                  alt={`Paso ${paso.numero}`}
                  style={{ width: "100%", maxWidth: 250, height: 150, objectFit: "contain" }}
                />
              </div>

              {paso.esAlerta ? (
                <div style={{
                  display: "flex", alignItems: "flex-start", gap: 6,
                  backgroundColor: "#fff7ed", borderRadius: 8, padding: "6px 8px",
                }}>
                  <span style={{ fontSize: 20, flexShrink: 0 }}>⚠️</span>
                  <p style={{ fontSize: 15, color: "#92400e", lineHeight: 1.4, margin: 0 }}>
                    {paso.descripcion}
                  </p>
                </div>
              ) : (
                <p style={{ fontSize: 15, color: "#4b5563", lineHeight: 1.4, margin: 0, textAlign: "center" }}>
                  {paso.descripcion}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}