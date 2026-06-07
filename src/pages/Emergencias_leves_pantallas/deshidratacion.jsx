import imgDeshidratacion from "../../assets/Portada_emergencias/Emergencias_leves/Emergencias_leves/deshidratacion-LEVE.png"
import iconoPaso1 from "../../assets/Emergencias_leves_iconos/deshidratacion/Deshidratacion - paso 1- leve.jpeg"
import iconoPaso2 from "../../assets/Emergencias_leves_iconos/deshidratacion/Deshidratacion - paso 2- leve.jpeg"
import iconoPaso3 from "../../assets/Emergencias_leves_iconos/deshidratacion/Deshidratacion - paso 3- leve.jpeg"
import iconoPaso4 from "../../assets/Emergencias_leves_iconos/deshidratacion/Deshidratacion - paso 4- leve.jpeg"
import iconoPaso5 from "../../assets/Emergencias_leves_iconos/deshidratacion/Deshidratacion - paso 5- leve.jpeg"
import iconoPaso6 from "../../assets/Emergencias_leves_iconos/deshidratacion/Deshidratacion - paso 6- leve.jpeg"
import { useNavigate } from "react-router-dom"
import BackButton from "../../components/BackButton"

const pasos = [
  {
    numero: 1,
    titulo: "Reconoce los sintomas",
    descripcion: "Sed, boca seca, cansancio, orina oscura y poca cantidad.",
    icono: iconoPaso1,
  },
  {
    numero: 2,
    titulo: "Bebe liquidos poco a poco",
    descripcion: "Agua o solucion de rehidratacion oral (SRO).",
    icono: iconoPaso2,
  },
  {
    numero: 3,
    titulo: "Descansa en un lugar fresco y sombreado",
    descripcion: "Evita la exposicion al sol y el calor.",
    icono: iconoPaso3,
  },
  {
    numero: 4,
    titulo: "Usa ropa ligera y fresca",
    descripcion: "La ropa ligera ayuda a regular la temperatura corporal.",
    icono: iconoPaso4,
  },
  {
    numero: 5,
    titulo: "Evita el ejercicio y el calor intenso",
    descripcion: "Descansa hasta que te sientas mejor.",
    icono: iconoPaso5,
  },
  {
    numero: 6,
    titulo: "Consulta si los sintomas no mejoran o empeoran",
    descripcion:
      "Busca atencion si hay vomitos, diarrea, fiebre o mareos fuertes.",
    icono: iconoPaso6,
    esAlerta: true,
  },
]

export default function Deshidratacion() {
  const navigate = useNavigate()

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", backgroundColor: "#f0f4f8", minHeight: "100vh", paddingBottom: 100 }}>

      {/* Header con imagen */}
      <div style={{ position: "relative", height: 220, overflow: "hidden", borderBottomLeftRadius: 24, borderBottomRightRadius: 24 }}>
        <img src={imgDeshidratacion} alt="Deshidratacion" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", top: 16, left: 16, zIndex: 10 }}>
          <BackButton onClick={() => navigate("/emergencias/leve")} />
        </div>
      </div>

      {/* Título */}
      <div style={{ padding: "20px 20px 8px" }}>
        <h1 style={{ fontSize: 26, fontWeight: 800, color: "#0d1b2a", margin: 0 }}>
          Deshidratación
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