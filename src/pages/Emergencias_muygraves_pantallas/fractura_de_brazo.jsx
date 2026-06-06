import imgFractura from "../../assets/Portada_emergencias/Emergencias_leves/Emergencias_muygraves/fracturadebrazo-MUY GRAVE.png"
import iconoPaso1 from "../../assets/emergencias_muy_graves/fractura_de_brazo/paso1-fractura-muy grave.png"
import iconoPaso2 from "../../assets/emergencias_muy_graves/fractura_de_brazo/paso2-fractura-muy grave.png"
import iconoPaso3 from "../../assets/emergencias_muy_graves/fractura_de_brazo/paso3-fractura-muy grave.png"
import iconoPaso4 from "../../assets/emergencias_muy_graves/fractura_de_brazo/paso4-fractura-muygrave.png"
import iconoPaso5 from "../../assets/emergencias_muy_graves/fractura_de_brazo/paso5-fractura-muy grave.png"
import iconoPaso6 from "../../assets/emergencias_muy_graves/fractura_de_brazo/paso6-fractura-muy grave.png"
import { useNavigate } from "react-router-dom"
import BackButton from "../../components/BackButton"

const pasos = [
  {
    numero: 1,
    titulo: "Identifica la lesión",
    descripcion: "Observa si la persona siente dolor, inflamación o dificultad para mover el brazo. No fuerces ningún movimiento.",
    icono: iconoPaso1,
  },
  {
    numero: 2,
    titulo: "Inmoviliza el brazo",
    descripcion: "Coloca el brazo en un cabestrillo usando una tela o pañuelo para evitar movimientos y reducir el dolor.",
    icono: iconoPaso2,
  },
  {
    numero: 3,
    titulo: "Aplica frío",
    descripcion: "Pon una bolsa con hielo o compresa fría envuelta en tela sobre la zona afectada para disminuir la inflamación. No apliques hielo directamente sobre la piel.",
    icono: iconoPaso3,
  },
  {
    numero: 4,
    titulo: "Descansa y mantén el brazo elevado",
    descripcion: "La persona debe permanecer sentada o en reposo con el brazo elevado por encima del nivel del corazón para reducir la hinchazón.",
    icono: iconoPaso4,
  },
  {
    numero: 5,
    titulo: "Toma agua o medicamentos solo si es necesario",
    descripcion: "Si el médico lo recomienda, la persona puede hidratarse o tomar medicamentos indicados para el dolor. No administres nada sin indicación médica.",
    icono: iconoPaso5,
  },
  {
    numero: 6,
    titulo: "Consulta a un médico",
    descripcion: "Busca atención médica de inmediato para revisar la lesión con rayos X y recibir el tratamiento adecuado. No intentes acomodar el hueso por tu cuenta.",
    icono: iconoPaso6,
    esAlerta: true,
  },
]

export default function FracturaDeBrazo() {
  const navigate = useNavigate()

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", backgroundColor: "#f0f4f8", minHeight: "100vh", paddingBottom: 100 }}>

      {/* Header con imagen */}
      <div style={{ position: "relative", height: 220, overflow: "hidden", borderBottomLeftRadius: 24, borderBottomRightRadius: 24 }}>
        <img src={imgFractura} alt="Fractura de brazo" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", top: 16, left: 16, zIndex: 10 }}>
          <BackButton onClick={() => navigate("/emergencias/muygraves")} />
        </div>
      </div>

      {/* Título */}
      <div style={{ padding: "20px 20px 8px" }}>
        <h1 style={{ fontSize: 26, fontWeight: 800, color: "#0d1b2a", margin: 0 }}>
          Fractura de brazo
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
        <span style={{ fontSize: 14, fontWeight: 700, color: "#1a56db" }}>911 / FOSALUD 2528-9700</span>
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