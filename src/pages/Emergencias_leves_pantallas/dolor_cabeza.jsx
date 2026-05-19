import imgDolorCabeza from "../../assets/Portada_emergencias/Emergencias_leves/Emergencias_leves/dolordecabeza-LEVE.png"
import iconoPaso1 from "../../assets/Emergencias_leves_iconos/dolor_cabeza/Dolor de cabeza - paso 1 - leve.jpeg"
import iconoPaso2 from "../../assets/Emergencias_leves_iconos/dolor_cabeza/Dolor de cabeza - paso 2 - leve.jpeg"
import iconoPaso3 from "../../assets/Emergencias_leves_iconos/dolor_cabeza/Dolor de cabeza - paso 3 - leve.jpeg"
import iconoPaso4 from "../../assets/Emergencias_leves_iconos/dolor_cabeza/Dolor de cabeza - paso 4 - leve.jpeg"
import iconoPaso5 from "../../assets/Emergencias_leves_iconos/dolor_cabeza/Dolor de cabeza - paso 5 - leve.jpeg"
import iconoPaso6 from "../../assets/Emergencias_leves_iconos/dolor_cabeza/Dolor de cabeza - paso 6 - leve.jpeg"
import { useNavigate } from "react-router-dom"
import BackButton from "../../components/BackButton"

const pasos = [
  {
    numero: 1,
    titulo: "Descansa en un lugar tranquilo y con poca luz",
    descripcion: "El ruido y la luz pueden empeorar el dolor de cabeza.",
    icono: iconoPaso1,
  },
  {
    numero: 2,
    titulo: "Bebe agua con regularidad",
    descripcion: "La deshidratacion puede causar dolor de cabeza.",
    icono: iconoPaso2,
  },
  {
    numero: 3,
    titulo: "Puedes tomar un analgesico si es necesario",
    descripcion:
      "Paracetamol o ibuprofeno segun lo indicado. Lee las instrucciones y no excedas la dosis.",
    icono: iconoPaso3,
  },
  {
    numero: 4,
    titulo: "Aplica compresas frias en la frente o sienes",
    descripcion: "Puede ayudar a reducir el dolor.",
    icono: iconoPaso4,
  },
  {
    numero: 5,
    titulo: "Evita pantallas, ruidos fuertes y luces intensas",
    descripcion: "Reduce los estimulos que agravan el dolor.",
    icono: iconoPaso5,
  },
  {
    numero: 6,
    titulo: "Si el dolor no mejora o empeora, consulta a un profesional",
    descripcion:
      "Busca atencion si el dolor es intenso, frecuente o acompañado de otros sintomas (nauseas, vision borrosa, fiebre, mareo, etc.).",
    icono: iconoPaso6,
    esAlerta: true,
  },
]

export default function DolorCabeza() {
  const navigate = useNavigate()

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", backgroundColor: "#f0f4f8", minHeight: "100vh", paddingBottom: 100 }}>

      {/* Header con imagen */}
      <div style={{ position: "relative", height: 220, overflow: "hidden", borderBottomLeftRadius: 24, borderBottomRightRadius: 24 }}>
        <img src={imgDolorCabeza} alt="Dolor de cabeza" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", top: 16, left: 16, zIndex: 10 }}>
          <BackButton onClick={() => navigate("/emergencias/leve")} />
        </div>
      </div>

      {/* Título */}
      <div style={{ padding: "20px 20px 8px" }}>
        <h1 style={{ fontSize: 26, fontWeight: 800, color: "#0d1b2a", margin: 0 }}>
          Dolor de cabeza
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
                <p style={{ fontSize: 15, fontWeight: 700, color: "#1a3a6b", lineHeight: 1.3, margin: 0, paddingTop: 3 }}>
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