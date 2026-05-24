import imgMordedura from "../../assets/Portada_emergencias/Emergencias_leves/Emergencias_graves/mordidadeanimal-GRAVE.png"
import iconoPaso1 from "../../assets/Emergencias_graves_iconos/mordedura_animal/mordedura_animal_pasos_1.jpg"
import iconoPaso2 from "../../assets/Emergencias_graves_iconos/mordedura_animal/mordedura_animal_pasos_2.jpg"
import iconoPaso3 from "../../assets/Emergencias_graves_iconos/mordedura_animal/mordedura_animal_pasos_3.jpg"
import iconoPaso4 from "../../assets/Emergencias_graves_iconos/mordedura_animal/mordedura_animal_pasos_4.jpg"
import iconoPaso5 from "../../assets/Emergencias_graves_iconos/mordedura_animal/mordedura_animal_pasos_5.jpg"
import iconoPaso6 from "../../assets/Emergencias_graves_iconos/mordedura_animal/mordedura_animal_pasos_6.jpg"
import { useNavigate } from "react-router-dom"
import BackButton from "../../components/BackButton"

const pasos = [
  {
    numero: 1,
    titulo: "Asegura tu seguridad",
    descripcion: "Aléjate del animal y asegúrate de que no haya peligro para ti ni para otros. No intentes sujetar al animal.",
    icono: iconoPaso1,
  },
  {
    numero: 2,
    titulo: "Limpia la herida",
    descripcion: "Lava la herida con agua y jabón suave durante 5–10 minutos. No uses alcohol, yodo o agua oxigenada.",
    icono: iconoPaso2,
  },
  {
    numero: 3,
    titulo: "Detén el sangrado",
    descripcion: "Si hay sangrado, presiona suavemente con una gasa o paño limpio hasta que el sangrado se detenga.",
    icono: iconoPaso3,
  },
  {
    numero: 4,
    titulo: "Desinfecta y cubre",
    descripcion: "Desinfecta la herida con un antiséptico (povidona yodada o clorhexidina) y cúbrela con una gasa estéril o apósito limpio.",
    icono: iconoPaso4,
  },
  {
    numero: 5,
    titulo: "Observa y cuida",
    descripcion: "Vigila la herida durante los próximos días por si aparecen signos de infección: enrojecimiento, hinchazón, dolor que empeora, secreción o fiebre.",
    icono: iconoPaso5,
  },
  {
    numero: 6,
    titulo: "Busca atención médica",
    descripcion:
      "Acude a un centro de salud lo antes posible, especialmente si la mordedura es profunda o de un animal desconocido. Puede necesitar vacuna antirrábica y refuerzo antitetánico.",
    icono: iconoPaso6,
    esAlerta: true,
  },
]

export default function MordeduraAnimal() {
  const navigate = useNavigate()

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", backgroundColor: "#f0f4f8", minHeight: "100vh", paddingBottom: 100 }}>

      {/* Header con imagen */}
      <div style={{ position: "relative", height: 220, overflow: "hidden", borderBottomLeftRadius: 24, borderBottomRightRadius: 24 }}>
        <img src={imgMordedura} alt="Mordedura de animal" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", top: 16, left: 16, zIndex: 10 }}>
          <BackButton onClick={() => navigate("/emergencias/grave")} />
        </div>
      </div>

      {/* Título */}
      <div style={{ padding: "20px 20px 8px" }}>
        <h1 style={{ fontSize: 26, fontWeight: 800, color: "#0d1b2a", margin: 0 }}>
          Mordedura de animal
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