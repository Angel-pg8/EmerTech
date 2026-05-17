import imgDolorOido from "../../assets/Portada_emergencias/Emergencias_leves/Emergencias_leves/dolordeoido-LEVE.png"
import iconoPaso1 from "../../assets/Emergencias_leves_iconos/icono_paso_1.PNG"
import iconoPaso2 from "../../assets/Emergencias_leves_iconos/icono_paso_2.PNG"
import iconoPaso3 from "../../assets/Emergencias_leves_iconos/icono_paso_3.PNG"
import iconoPaso4 from "../../assets/Emergencias_leves_iconos/icono_paso_4.PNG"
import iconoPaso5 from "../../assets/Emergencias_leves_iconos/icono_paso_5.PNG"
import iconoPaso6 from "../../assets/Emergencias_leves_iconos/icono_paso_6.PNG"
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
  return (
    <EmergenciaDetalleLayout
      nombre="Dolor de oido"
      imagen={imgDolorOido}
      contacto="FOSALUD 2528-9700"
      pasos={pasos}
    />
  )
}
