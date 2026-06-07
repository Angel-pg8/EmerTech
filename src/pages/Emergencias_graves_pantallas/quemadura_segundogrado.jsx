import imgQuemadura from "../../assets/Portada_emergencias/Emergencias_leves/Emergencias_graves/quemadura-GRAVE.png"
import iconoPaso1 from "../../assets/Emergencias_graves_iconos/quemadura_segundogrado/Quemadura de segundo grado- paso 1- grave.png"
import iconoPaso2 from "../../assets/Emergencias_graves_iconos/quemadura_segundogrado/Quemadura de segundo grado- paso 2- grave.png"
import iconoPaso3 from "../../assets/Emergencias_graves_iconos/quemadura_segundogrado/Quemadura de segundo grado- paso 3- grave.png"
import iconoPaso4 from "../../assets/Emergencias_graves_iconos/quemadura_segundogrado/Quemadura de segundo grado- paso 4- grave.png"
import iconoPaso5 from "../../assets/Emergencias_graves_iconos/quemadura_segundogrado/Quemadura de segundo grado- paso 5- grave.png"
import iconoPaso6 from "../../assets/Emergencias_graves_iconos/quemadura_segundogrado/Quemadura de segundo grado- paso 6- grave.png"
import { useNavigate } from "react-router-dom"
import BackButton from "../../components/BackButton"

const pasos = [
  {
    numero: 1,
    titulo: "Evalúa la quemadura",
    descripcion: "Es de segundo grado si hay enrojecimiento, ampollas, dolor e hinchazón. No revientes las ampollas.",
    icono: iconoPaso1,
  },
  {
    numero: 2,
    titulo: "Enfría la quemadura",
    descripcion: "Coloca la zona bajo agua corriente fresca durante 15–20 minutos. Usa agua fresca, no helada.",
    icono: iconoPaso2,
  },
  {
    numero: 3,
    titulo: "Limpia suavemente",
    descripcion: "Lava la quemadura con agua y jabón suave. Retira suciedad o residuos con cuidado.",
    icono: iconoPaso3,
  },
  {
    numero: 4,
    titulo: "Cubre la quemadura",
    descripcion: "Usa un apósito estéril no adherente o gasa limpia. No uses algodón, pomadas, aceites ni remedios caseros.",
    icono: iconoPaso4,
  },
  {
    numero: 5,
    titulo: "Controla el dolor",
    descripcion: "Toma paracetamol o ibuprofeno según indicaciones del envase. No des aspirina a niños.",
    icono: iconoPaso5,
  },
  {
    numero: 6,
    titulo: "Busca atención médica",
    descripcion:
      "Acude si la quemadura es extensa, está en cara, manos, pies o articulaciones, o si hay signos de infección: aumento del dolor, secreción amarilla o fiebre.",
    esAlerta: true,
    icono: iconoPaso6,
  },
]

export default function QuemaduraSegundoGrado() {
  const navigate = useNavigate()

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", backgroundColor: "#f0f4f8", minHeight: "100vh", paddingBottom: 100 }}>

      {/* Header con imagen */}
      <div style={{ position: "relative", height: 220, overflow: "hidden", borderBottomLeftRadius: 24, borderBottomRightRadius: 24 }}>
        <img src={imgQuemadura} alt="Quemadura de segundo grado" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", top: 16, left: 16, zIndex: 10 }}>
          <BackButton onClick={() => navigate("/emergencias/grave")} />
        </div>
      </div>

      {/* Título */}
      <div style={{ padding: "20px 20px 8px" }}>
        <h1 style={{ fontSize: 26, fontWeight: 800, color: "#0d1b2a", margin: 0 }}>
          Quemadura de 2° grado
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

              {paso.icono && (
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
              )}

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