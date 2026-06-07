import imgDificultad from "../../assets/Portada_emergencias/Emergencias_leves/Emergencias_graves/dificultad pararespirar-GRAVE.png"
import iconoPaso1 from "../../assets/Emergencias_graves_iconos/dificultad_para_respirar/dificultad_para_respirar_paso-1.jpg"
import iconoPaso2 from "../../assets/Emergencias_graves_iconos/dificultad_para_respirar/dificultad_para_respirar_paso-2.jpg"
import iconoPaso3 from "../../assets/Emergencias_graves_iconos/dificultad_para_respirar/dificultad_para_respirar_paso-3.jpg"
import iconoPaso4 from "../../assets/Emergencias_graves_iconos/dificultad_para_respirar/dificultad_para_respirar_paso-4.jpg"
import iconoPaso5 from "../../assets/Emergencias_graves_iconos/dificultad_para_respirar/dificultad_para_respirar_paso-5.jpg"
import iconoPaso6 from "../../assets/Emergencias_graves_iconos/dificultad_para_respirar/dificultad_para_respirar_paso-6.jpg"
import { useNavigate } from "react-router-dom"
import BackButton from "../../components/BackButton"

const pasos = [
  {
    numero: 1,
    titulo: "Evalúa y tranquiliza a la persona",
    descripcion: "Mantén la calma y habla con voz tranquila. La ansiedad puede empeorar la falta de aire.",
    icono: iconoPaso1,
  },
  {
    numero: 2,
    titulo: "Ayúdala a sentarse en posición cómoda",
    descripcion: "Siéntala inclinada hacia adelante con los brazos apoyados. Esto facilita la respiración.",
    icono: iconoPaso2,
  },
  {
    numero: 3,
    titulo: "Facilita que respire mejor",
    descripcion: "Afloja ropa ajustada y asegura ventilación. Abre ventanas o llévala a un lugar con aire fresco.",
    icono: iconoPaso3,
  },
  {
    numero: 4,
    titulo: "Si usa inhalador, ayúdala a usarlo",
    descripcion: "Sigue las instrucciones del medicamento. Si no mejora o no tiene inhalador, llama a emergencias.",
    icono: iconoPaso4,
  },
  {
    numero: 5,
    titulo: "Llama a emergencias si no mejora",
    descripcion: "Llama al 112 si tiene dificultad para hablar, labios azules, confusión o no mejora con el inhalador.",
    icono: iconoPaso5,
    esAlerta: true,
  },
  {
    numero: 6,
    titulo: "Permanece con la persona",
    descripcion: "Observa su respiración, color de piel y nivel de conciencia hasta que llegue ayuda.",
    icono: iconoPaso6,
  },
]

export default function DificultadParaRespirar() {
  const navigate = useNavigate()

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", backgroundColor: "#f0f4f8", minHeight: "100vh", paddingBottom: 100 }}>

      {/* Header con imagen */}
      <div style={{ position: "relative", height: 220, overflow: "hidden", borderBottomLeftRadius: 24, borderBottomRightRadius: 24 }}>
        <img src={imgDificultad} alt="Dificultad para respirar" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", top: 16, left: 16, zIndex: 10 }}>
          <BackButton onClick={() => navigate("/emergencias/grave")} />
        </div>
      </div>

      {/* Título */}
      <div style={{ padding: "20px 20px 8px" }}>
        <h1 style={{ fontSize: 26, fontWeight: 800, color: "#0d1b2a", margin: 0 }}>
          Dificultad para respirar
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
        <a href="tel:25289700" style={{ fontSize: 14, fontWeight: 700, color: "#1a56db", textDecoration: "none" }}>
          FOSALUD 2528-9700
        </a>
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