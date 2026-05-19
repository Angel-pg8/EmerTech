import imgDolorOido from "../../assets/Portada_emergencias/Emergencias_leves/Emergencias_leves/dolordeoido-LEVE.png"
import iconoPaso1 from "../../assets/Emergencias_leves_iconos/dolor_oido/icono_paso_1.PNG"
import iconoPaso2 from "../../assets/Emergencias_leves_iconos/dolor_oido/icono_paso_2.PNG"
import iconoPaso3 from "../../assets/Emergencias_leves_iconos/dolor_oido/icono_paso_3.PNG"
import iconoPaso4 from "../../assets/Emergencias_leves_iconos/dolor_oido/icono_paso_4.PNG"
import iconoPaso5 from "../../assets/Emergencias_leves_iconos/dolor_oido/icono_paso_5.PNG"
import iconoPaso6 from "../../assets/Emergencias_leves_iconos/dolor_oido/icono_paso_6.PNG"
import { useNavigate } from "react-router-dom"
import BackButton from "../../components/BackButton"
import EmergenciaDetalleLayout from "../../components/EmergenciaDetalleLayout"

const pasos = [
  {
    numero: 1,
    titulo: "Manten el oido seco y limpio",
    descripcion: "Evita que entre agua en el oido.",
    icono: iconoPaso1,
  },
  {
    numero: 2,
    titulo: "No introduzcas objetos ni hisopos",
    descripcion: "Puede empeorar la irritacion o causar lesiones.",
    icono: iconoPaso2,
  },
  {
    numero: 3,
    titulo: "Aplica una compresa tibia en el oido externo",
    descripcion: "Puede ayudar a aliviar el dolor.",
    icono: iconoPaso3,
  },
  {
    numero: 4,
    titulo: "Puedes tomar un analgesico si es necesario",
    descripcion:
      "Paracetamol o ibuprofeno segun lo indicado. Lee las instrucciones y no excedas la dosis.",
    icono: iconoPaso4,
  },
  {
    numero: 5,
    titulo: "Evita cambios bruscos de presion",
    descripcion:
      "Evita viajes en avion o subir a zonas altas si el dolor persiste.",
    icono: iconoPaso5,
  },
  {
    numero: 6,
    titulo: "Consulta a un profesional si el dolor no mejora",
    descripcion:
      "Si el dolor dura mas de 2 dias, aumenta o hay fiebre o secrecion, consulta a un medico.",
    icono: iconoPaso6,
    esAlerta: true,
  },
]

export default function DolorOido() {
  const navigate = useNavigate() // ✅ agregado aquí

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", backgroundColor: "#f0f4f8", minHeight: "100vh", paddingBottom: 100 }}>

      {/* Header con imagen */}
      <div style={{ position: "relative", height: 220, overflow: "hidden", borderBottomLeftRadius: 24, borderBottomRightRadius: 24 }}>
        <img src={imgDolorOido} alt="Dolor de oído" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      
        <div style={{ position: "absolute", top: 16, left: 16, zIndex: 10 }}>
          <BackButton onClick={() => navigate("/emergencias/leve")} />
        </div>
      </div>

      {/* Título */}
      <div style={{ padding: "20px 20px 8px" }}>
        <h1 style={{ fontSize: 26, fontWeight: 800, color: "#0d1b2a", margin: 0 }}>
          Dolor de oído
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
        <span style={{ fontSize: 14, fontWeight: 700, color: "#1a56db" }}>FOSALUD 2528-9700</span>
      </div>

      {/* Tarjeta infografía */}
      <div style={{
        margin: "0 16px 20px",
        backgroundColor: "#fff",
        borderRadius: 20,
        overflow: "hidden",
        boxShadow: "0 4px 20px rgba(0,0,0,0.09)",
      }}>

        {/* Subtítulo ¿Qué hacer? */}
        <div style={{
          backgroundColor: "#1a3a6b",
          padding: "14px 20px",
          textAlign: "center",
        }}>
          <p style={{ color: "#93c5fd", fontSize: 20, fontWeight: 600, margin: 0 }}>¿Qué hacer?</p>
        </div>

        {/* Grid de pasos */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: 1,
          backgroundColor: "#e5e7eb",
        }}>
          {pasos.map((paso) => (
            <div key={paso.numero} style={{
              backgroundColor: "#fff",
              padding: "14px 12px",
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}>
              {/* Número + título */}
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

              {/* Imagen */}
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

              {/* Descripción o alerta */}
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