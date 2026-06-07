export const organizacionesPorZona = {
  "san-miguel": {
    nombre: "San Miguel",
    descripcion: "Red de organizaciones y centros de apoyo disponibles en San Miguel.",
    items: [
      {
        id: "1",
        nombre: "Cruz Verde San Miguel",
        tipo: "Atencion prehospitalaria",
        direccion: "Zona centro de San Miguel, El Salvador",
        coordenadas: { lat: 13.469686037345511, lon: -88.16778295657805 }, // ✅ sin cambio
        numero: "2121 2828",
      },
      {
        id: "2",
        nombre: "Hospital Nacional Dr. Escalón",
        tipo: "Centro hospitalario",
        direccion: "Calle Hermanos Maristas #13, San Miguel CP 3301, El Salvador",
        coordenadas: { lat: 13.477161831198693, lon: -88.18286311638659 }, // ✅ sin cambio
        numero: "Atiende urgencias generales y canaliza casos de mayor complejidad dentro de la region oriental.",
      },
      {
        id: "3",
        nombre: "Cruz Roja Salvadorena",
        tipo: "Centro hospitalario",
        direccion: "Barrio El Calvario, San Miguel, El Salvador",
        coordenadas: { lat: 13.485826605147418, lon: -88.18041812858422 }, // ✅ sin cambio
        numero: "Se especializa en la gestion de bancos de sangre, rescate acuatico y asistencia humanitaria en desastres naturales.",
      },
      {
        id: "4",
        nombre: "Cuerpo de Bomberos",
        tipo: "Respuesta de emergencia",
        direccion: "Cerca del centro de gobierno, San Miguel, El Salvador",
        coordenadas: { lat: 13.488265072547307, lon:  -88.18694940013386 }, // ✅ sin cambio
        numero: "Su especialidad principal es el control de incendios estructurales en zonas urbanas y fuegos forestales en las faldas del volcan.",
      },
      {
        id: "5",
        nombre: "Hospital Militar",
        tipo: "Centro hospitalario",
        direccion: "Carretera CA-1, Colonia Bustillo, San Miguel, El Salvador",
        coordenadas: { lat: 13.4749, lon: -88.1826 }, // ✅ sin cambio
        numero: "Se enfoca en servicios quirurgicos especializados y atencion de emergencia bajo protocolos de disciplina y eficiencia militar.",
      },
      {
        id: "6",
        nombre: "Hospital Regional San Juan de Dios",
        tipo: "Centro hospitalario",
        direccion: "Final 11a Calle Poniente y 23 Avenida Sur, Colonia Ciudad Jardín, San Miguel, El Salvador",
        coordenadas: { lat: 13.4745, lon: -88.1895 }, // ✅ corregido (era 13.479, -88.1805)
        numero: "Es el centro de referencia para medicina de tercer nivel, especializandose en nefrologia, cardiologia y cuidados intensivos neonatales.",
      },
      {
        id: "7",
        nombre: "Hospital San Francisco",
        tipo: "Centro hospitalario",
        direccion: "Avenida Roosevelt Norte #408, Barrio San Felipe, San Miguel, El Salvador",
        coordenadas: { lat: 13.4817, lon: -88.177 }, // ✅ sin cambio
        numero: "Se especializa en servicios de emergencia 24/7, cirugia, medicina interna, ginecologia, pediatria, laboratorio clinico y atencion de maxima urgencia.",
      },
    ],
  },
  usulutan: {
    nombre: "Usulutan",
    descripcion: "Organizaciones de salud y asistencia disponibles en Usulutan.",
    items: [
      {
        id: "hospital-san-pedro",
        nombre: 'Hospital Nacional General "San Pedro"',
        tipo: "Centro hospitalario nacional",
        direccion: "Final Calle Dr. Federico Penado, salida a San Salvador, Barrio Candelaria, Usulutan, El Salvador",
        coordenadas: { lat: 13.343, lon: -88.4495 }, // ✅ corregido (era 13.3469, -88.4425)
        numero: "Atiende emergencias y especialidades basicas como cirugia, pediatria y ginecologia. Tambien busca reducir la morbilidad y mortalidad en la zona.",
      },
      {
        id: "hospital-jorge-arturo-mena",
        nombre: 'Hospital Nacional General "Dr. Jorge Arturo Mena"',
        tipo: "Centro hospitalario nacional",
        direccion: "Final Avenida Gregorio Melara, Usulutan, El Salvador",
        coordenadas: { lat: 13.3458, lon: -88.444 }, // ✅ sin cambio
        numero: "Ofrece servicios hospitalarios basicos y funciona como centro de referencia para comunidades rurales y costeras.",
      },
      {
        id: "hospital-especialidades",
        nombre: "Hospital de Especialidades",
        tipo: "Atencion especializada",
        direccion: "Centro de Usulutan, cerca del Hospital Nacional",
        coordenadas: { lat: 13.3475, lon: -88.4418 }, // ✅ sin cambio
        numero: "Brinda atencion en areas medicas complejas como cardiologia y neurologia, evitando que pacientes viajen a San Salvador.",
      },
      {
        id: "bomberos",
        nombre: "Cuerpo de Bomberos",
        tipo: "Respuesta de emergencia",
        direccion: "Avenida Gregorio Melara, Usulutan, El Salvador",
        coordenadas: { lat: 13.3462, lon: -88.4448 }, // ✅ sin cambio
        numero: "Atiende incendios, rescates y emergencias, apoyando con primeros auxilios y coordinacion con hospitales.",
      },
      {
        id: "cruz-verde",
        nombre: "Cruz Verde Salvadorena",
        tipo: "Atencion prehospitalaria",
        direccion: "Barrio El Calvario, Usulutan, El Salvador",
        coordenadas: { lat: 13.345, lon: -88.4432 }, // ✅ sin cambio
        numero: "Ofrece servicios de ambulancia y atencion prehospitalaria, vital en comunidades rurales.",
      },
      {
        id: "fosalud",
        nombre: "FOSALUD",
        tipo: "Atencion primaria",
        direccion: "Zona centrica de Usulutan, El Salvador",
        coordenadas: { lat: 13.3467, lon: -88.4421 }, // ✅ sin cambio
        numero: "Administra clinicas de atencion primaria, vacunacion y control de enfermedades cronicas, con referencia a hospitales nacionales.",
      },
      {
        id: "unidad-jiquilisco",
        nombre: "Unidad de Salud de Jiquilisco",
        tipo: "Unidad de salud comunitaria",
        direccion: "Barrio La Parroquia, Jiquilisco, Usulutan",
        coordenadas: { lat: 13.3164, lon: -88.5853 }, // ✅ sin cambio
        numero: "Proporciona consultas generales, vacunacion y programas comunitarios, acercando la atencion a zonas costeras.",
      },
      {
        id: "unidad-usulutan",
        nombre: "Unidad de Salud de Usulutan",
        tipo: "Unidad de salud comunitaria",
        direccion: "Centro urbano de Usulutan, El Salvador",
        coordenadas: { lat: 13.3471, lon: -88.4437 }, // ✅ sin cambio
        numero: "Atiende consultas externas, salud materno-infantil y prevencion de enfermedades, enlazando con hospitales de mayor nivel.",
      },
    ],
  },
  "la-union": {
    nombre: "La Union",
    descripcion: "Instituciones y organizaciones de apoyo ubicadas en La Union.",
    items: [
      {
        id: "hospital-general-la-union",
        nombre: "Hospital Nacional General de La Union",
        tipo: "Centro hospitalario nacional",
        direccion: "Km 180, Carretera RN-19, Cantón Huisquil, Conchagua, La Union, El Salvador",
        coordenadas: { lat: 13.34659, lon: -87.87646 },
        numero: "Resuelve el acceso a servicios de salud de segundo nivel, proporcionando atencion curativa, preventiva y de rehabilitacion a la poblacion de la zona sur.",
      },
      {
        id: "hospital-santa-rosa-lima",
        nombre: "Hospital Nacional Santa Rosa de Lima",
        tipo: "Centro hospitalario nacional",
        direccion: "Barrio El Calvario, Santa Rosa de Lima, La Union, El Salvador",
        coordenadas: { lat: 13.6245, lon: -87.8931 }, // ✅ sin cambio
        numero: "Brinda atencion permanente e integral en medicina interna, cirugia, pediatria y ginecobstetricia.",
      },
      {
        id: "hospital-el-angel",
        nombre: "Hospital El Angel",
        tipo: "Hospital privado",
        direccion: "Centro de Santa Rosa de Lima, La Union, El Salvador",
        coordenadas: { lat: 13.6238, lon: -87.892 }, // ✅ sin cambio
        numero: "Resuelve la demanda de servicios medicos de tercer nivel, incluyendo imagenes, laboratorio clinico y servicios hospitalarios especializados.",
      },
      {
        id: "clinica-especialidades-santa-rosa",
        nombre: "Clinica de Especialidades Santa Rosa",
        tipo: "Clinica privada",
        direccion: "Avenida General Menendez, Santa Rosa de Lima, La Union, El Salvador",
        coordenadas: { lat: 13.6252, lon: -87.894 }, // ✅ sin cambio
        numero: "Ofrece consultas medicas especializadas y diagnostico personalizado con tecnologia de vanguardia.",
      },
      {
        id: "policlinica-limena",
        nombre: "Policlinica Limena",
        tipo: "Atencion ambulatoria",
        direccion: "Centro urbano de Santa Rosa de Lima, La Union, El Salvador",
        coordenadas: { lat: 13.6249, lon: -87.8927 }, // ✅ sin cambio
        numero: "Cubre la necesidad de atencion ambulatoria inmediata y servicios de apoyo diagnostico local.",
      },
      {
        id: "unidad-la-union",
        nombre: "Unidad de Salud de La Union",
        tipo: "Unidad de salud comunitaria",
        direccion: "Barrio San Carlos, La Union, El Salvador",
        coordenadas: { lat: 13.3381, lon: -87.845 }, // ✅ sin cambio
        numero: "Atiende problemas de primer nivel como control de enfermedades cronicas, vacunacion, control prenatal y atencion infantil.",
      },
      {
        id: "unidad-conchagua",
        nombre: "Unidad de Salud de Conchagua",
        tipo: "Unidad de salud comunitaria",
        direccion: "Barrio El Centro, Conchagua, La Union, El Salvador",
        coordenadas: { lat: 13.3074, lon: -87.8642 }, // ✅ sin cambio
        numero: "Brinda acceso basico, prevencion de enfermedades y primer contacto con el sistema de salud.",
      },
      {
        id: "unidad-el-carmen",
        nombre: "Unidad de Salud de El Carmen",
        tipo: "Unidad de salud comunitaria",
        direccion: "Centro de El Carmen, La Union, El Salvador",
        coordenadas: { lat: 13.35, lon: -88.0 }, // ✅ corregido (era 13.3778, -87.7615 — fuera del municipio)
        numero: "Gestiona salud preventiva en el territorio, incluyendo vacunacion, control prenatal y seguimiento de enfermedades cronicas.",
      },
    ],
  },
  morazan: {
    nombre: "Morazan",
    descripcion: "Opciones de asistencia y organizaciones disponibles en Morazan.",
    items: [
      {
        id: "unidad-el-divisadero",
        nombre: "Unidad de Salud de El Divisadero",
        tipo: "Unidad de salud comunitaria",
        direccion: "Barrio El Centro, El Divisadero, Morazan, El Salvador",
        coordenadas: { lat: 13.6508, lon: -88.0042 }, // ✅ sin cambio
        numero: "Brinda atencion primaria, consultas generales y programas de prevencion.",
      },
      {
        id: "unidad-osicala",
        nombre: "Unidad de Salud de Osicala",
        tipo: "Unidad de salud comunitaria",
        direccion: "Centro urbano de Osicala, Morazan, El Salvador",
        coordenadas: { lat: 13.7341, lon: -88.1015 }, // ✅ sin cambio
        numero: "Ofrece control prenatal, vacunacion y atencion comunitaria, fortaleciendo la salud materno-infantil en la zona.",
      },
      {
        id: "unidad-corinto",
        nombre: "Unidad de Salud de Corinto",
        tipo: "Unidad de salud comunitaria",
        direccion: "Barrio El Centro, Corinto, Morazan, El Salvador",
        coordenadas: { lat: 13.8106, lon: -87.9713 }, // ✅ sin cambio
        numero: "Atiende consultas externas y emergencias menores, funcionando como primer contacto para la poblacion local.",
      },
      {
        id: "unidad-cacaopera",
        nombre: "Unidad de Salud de Cacaopera",
        tipo: "Unidad de salud comunitaria",
        direccion: "Barrio El Calvario, Cacaopera, Morazan, El Salvador",
        coordenadas: { lat: 13.7662, lon: -88.0879 }, // ✅ sin cambio
        numero: "Se enfoca en programas de salud preventiva y control de enfermedades transmisibles.",
      },
      {
        id: "unidad-san-francisco-gotera",
        nombre: "Unidad de Salud de San Francisco Gotera",
        tipo: "Unidad de salud comunitaria",
        direccion: "Avenida Thompson Norte, Barrio La Cruz, San Francisco Gotera, Morazan, El Salvador",
        coordenadas: { lat: 13.6995, lon: -88.1008 }, // ✅ sin cambio
        numero: "Es la principal unidad del municipio, con servicios de consulta general, programas de prevencion y referencia a hospitales.",
      },
      {
        id: "unidad-jocoro",
        nombre: "Unidad de Salud de Jocoro",
        tipo: "Unidad de salud comunitaria",
        direccion: "Centro urbano de Jocoro, Morazan, El Salvador",
        coordenadas: { lat: 13.6168, lon: -88.0164 }, // ✅ sin cambio
        numero: "Proporciona atencion basica, vacunacion y seguimiento de enfermedades cronicas.",
      },
      {
        id: "unidad-sociedad",
        nombre: "Unidad de Salud de Sociedad",
        tipo: "Unidad de salud comunitaria",
        direccion: "Barrio El Centro, Sociedad, Morazan, El Salvador",
        coordenadas: { lat: 13.7009, lon: -87.9667 }, // ✅ sin cambio
        numero: "Atiende consultas generales y programas comunitarios, contribuyendo a la reduccion de enfermedades comunes.",
      },
      {
        id: "unidad-guatajiagua",
        nombre: "Unidad de Salud de Guatajiagua",
        tipo: "Unidad de salud comunitaria",
        direccion: "Barrio El Centro, Guatajiagua, Morazan, El Salvador",
        coordenadas: { lat: 13.6735, lon: -88.2002 }, // ✅ sin cambio
        numero: "Brinda servicios preventivos, control materno-infantil y vacunacion, acercando la atencion medica a comunidades rurales.",
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

export function normalizarTexto(texto = "") {
  return texto
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
}

export function obtenerTodasLasOrganizaciones() {
  return Object.entries(organizacionesPorZona).flatMap(([zonaSlug, zona]) =>
    zona.items.map((organizacion) => ({
      ...organizacion,
      zonaSlug,
      zonaNombre: zona.nombre,
    })),
  )
}

export function obtenerOrganizacionPorContacto(texto = "") {
  const textoNormalizado = normalizarTexto(texto)

  if (!textoNormalizado) {
    return null
  }

  const organizaciones = obtenerTodasLasOrganizaciones()
  const coincidenciaExacta = organizaciones.find((organizacion) =>
    textoNormalizado.includes(normalizarTexto(organizacion.nombre)),
  )

  if (coincidenciaExacta) {
    return coincidenciaExacta
  }

  const alias = [
    { palabras: ["fosalud"], nombre: "FOSALUD" },
    { palabras: ["cruz verde"], nombre: "Cruz Verde" },
    { palabras: ["cruz roja"], nombre: "Cruz Roja" },
    { palabras: ["bomberos"], nombre: "Cuerpo de Bomberos" },
  ]

  const aliasEncontrado = alias.find(({ palabras }) =>
    palabras.some((palabra) => textoNormalizado.includes(palabra)),
  )

  if (!aliasEncontrado) {
    return null
  }

  return organizaciones.find((organizacion) =>
    normalizarTexto(organizacion.nombre).includes(normalizarTexto(aliasEncontrado.nombre)),
  )
}