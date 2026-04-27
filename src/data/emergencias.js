import imgEjemplo from "../assets/ejemplo.jpg"

export const emergenciasPorCategoria = {
  leve: {
    titulo: "Emergencias leves",
    items: [
      {
        id: "1",
        nombre: "Heridas leves con sangrado",
        tipo: "Lesion fisica",
        descripcion:
          "Limpia la zona con agua, aplica presion suave con un pano limpio y revisa si el sangrado disminuye.",
        imagen: imgEjemplo,
      },
      {
        id: "2",
        nombre: "Intoxicacion alimentaria",
        tipo: "Sanitaria",
        descripcion:
          "Manten hidratacion constante, evita alimentos pesados y vigila senales de deshidratacion.",
        imagen: imgEjemplo,
      },
      {
        id: "3",
        nombre: "Fracturas o esguinces",
        tipo: "Lesion fisica",
        descripcion:
          "Inmoviliza la zona, aplica frio local y evita apoyar peso hasta recibir atencion profesional.",
        imagen: imgEjemplo,
      },
      {
        id: "4",
        nombre: "Reaccion alergica leve",
        tipo: "Sanitaria",
        descripcion:
          "Alejate del desencadenante, observa la respiracion y busca ayuda si los sintomas empeoran.",
        imagen: imgEjemplo,
      },
      {
        id: "5",
        nombre: "Quemadura leve",
        tipo: "Lesion fisica",
        descripcion:
          "Enfria la zona con agua corriente durante varios minutos y no apliques hielo directo.",
        imagen: imgEjemplo,
      },
      {
        id: "6",
        nombre: "Dolor de cabeza",
        tipo: "Neurologica",
        descripcion:
          "Descansa en un lugar tranquilo, hidrate y observa si hay fiebre, vomitos o vision borrosa.",
        imagen: imgEjemplo,
      },
    ],
  },
  grave: {
    titulo: "Emergencias graves",
    items: [
      {
        id: "1",
        nombre: "Dificultad respiratoria aguda",
        tipo: "Respiratoria",
        descripcion:
          "Manten a la persona sentada, afloja ropa ajustada y busca ayuda medica urgente mientras vigilas su respiracion.",
        imagen: imgEjemplo,
      },
      {
        id: "2",
        nombre: "Crisis convulsiva",
        tipo: "Neurologica",
        descripcion:
          "Protege la cabeza, retira objetos cercanos y no intentes sujetar con fuerza ni introducir objetos en la boca.",
        imagen: imgEjemplo,
      },
      {
        id: "3",
        nombre: "Sangrado abundante",
        tipo: "Lesion fisica",
        descripcion:
          "Aplica presion directa con un pano limpio y eleva la zona si es posible mientras solicitas apoyo inmediato.",
        imagen: imgEjemplo,
      },
    ],
  },
  "muy-grave": {
    titulo: "Emergencias criticas",
    items: [
      {
        id: "1",
        nombre: "Paro cardiorrespiratorio",
        tipo: "Cardiaca",
        descripcion:
          "Llama al sistema de emergencias y comienza maniobras de RCP si cuentas con entrenamiento y la escena es segura.",
        imagen: imgEjemplo,
      },
      {
        id: "2",
        nombre: "Accidente con trauma severo",
        tipo: "Trauma",
        descripcion:
          "No movilices a la persona salvo peligro inminente y solicita atencion avanzada lo antes posible.",
        imagen: imgEjemplo,
      },
      {
        id: "3",
        nombre: "Perdida de conciencia",
        tipo: "Neurologica",
        descripcion:
          "Verifica respiracion, coloca en posicion lateral de seguridad si respira y pide ayuda urgente.",
        imagen: imgEjemplo,
      },
    ],
  },
}

export function obtenerCategoriaEmergencias(categoria) {
  return emergenciasPorCategoria[categoria]
}

export function obtenerEmergencia(categoria, id) {
  return emergenciasPorCategoria[categoria]?.items.find((item) => item.id === id)
}
