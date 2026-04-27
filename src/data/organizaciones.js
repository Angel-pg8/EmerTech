export const organizacionesPorZona = {
  "san-miguel": {
    nombre: "San Miguel",
    descripcion: "Red de organizaciones y centros de apoyo disponibles en San Miguel.",
    items: [
      {
        id: "1",
        nombre: "Cruz Verde San Miguel",
        tipo: "Atencion prehospitalaria",
        detalle:
          "Brinda apoyo de primera respuesta, traslado y orientacion basica en situaciones de emergencia.",
      },
      {
        id: "2",
        nombre: "Hospital Regional de San Miguel",
        tipo: "Centro hospitalario",
        detalle:
          "Atiende urgencias generales y canaliza casos de mayor complejidad dentro de la region oriental.",
      },
    ],
  },
  usulutan: {
    nombre: "Usulutan",
    descripcion: "Organizaciones de salud y asistencia disponibles en Usulutan.",
    items: [
      {
        id: "1",
        nombre: "Unidad de Salud de Usulutan",
        tipo: "Atencion primaria",
        detalle:
          "Apoya en valoraciones iniciales, orientacion preventiva y referencia a centros especializados.",
      },
      {
        id: "2",
        nombre: "Comandos de Salvamento Usulutan",
        tipo: "Respuesta de emergencia",
        detalle:
          "Ofrece primeros auxilios, rescate y apoyo en eventos de alto riesgo dentro del departamento.",
      },
    ],
  },
  "la-union": {
    nombre: "La Union",
    descripcion: "Instituciones y organizaciones de apoyo ubicadas en La Union.",
    items: [
      {
        id: "1",
        nombre: "Hospital Nacional de La Union",
        tipo: "Centro hospitalario",
        detalle:
          "Recibe emergencias medicas y brinda estabilizacion para pacientes de la zona costera y urbana.",
      },
      {
        id: "2",
        nombre: "Proteccion Civil La Union",
        tipo: "Gestion de riesgos",
        detalle:
          "Coordina respuesta ante desastres, evacuaciones y asistencia comunitaria en incidentes mayores.",
      },
    ],
  },
  morazan: {
    nombre: "Morazan",
    descripcion: "Opciones de asistencia y organizaciones disponibles en Morazan.",
    items: [
      {
        id: "1",
        nombre: "Unidad Comunitaria de Salud Morazan",
        tipo: "Atencion comunitaria",
        detalle:
          "Ofrece apoyo preventivo, seguimiento basico y atencion inicial para situaciones de salud frecuentes.",
      },
      {
        id: "2",
        nombre: "Comite de Emergencia Local Morazan",
        tipo: "Respuesta territorial",
        detalle:
          "Canaliza apoyo en incidentes comunitarios, coordinando recursos de respuesta y orientacion ciudadana.",
      },
    ],
  },
}

export const zonasOrganizaciones = Object.entries(organizacionesPorZona).map(
  ([slug, zona]) => ({
    slug,
    nombre: zona.nombre,
    descripcion: zona.descripcion,
  }),
)

export function obtenerZona(slug) {
  return organizacionesPorZona[slug]
}

export function obtenerOrganizacion(slug, id) {
  return organizacionesPorZona[slug]?.items.find((item) => item.id === id)
}
