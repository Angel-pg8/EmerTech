export const organizacionesPorZona = {
  "san-miguel": {
    nombre: "San Miguel",
    descripcion: "Organizaciones de salud y atencion de emergencia disponibles en San Miguel.",
    items: [
      {
        id: "cruz-roja-salvadorena",
        nombre: "Cruz Roja Salvadoreña",
        tipo: "Atencion prehospitalaria",
        direccion: "Colonia Ciudad Jardin, San Miguel, El Salvador",
        coordenadas: { lat: 13.485826605147418, lon: -88.18041812858422 },
        numero: "2222 5155",
        descripcion:
          "Atiende emergencias medicas, accidentes de transito, rescates, primeros auxilios, desastres naturales y traslado de pacientes en ambulancia.",
      },
      {
        id: "cuerpo-de-bomberos",
        nombre: "Cuerpo de Bomberos",
        tipo: "Respuesta de emergencia",
        direccion: "Carretera CA-7 Norte, colonia Milagro de la Paz, San Miguel, El Salvador",
        coordenadas: { lat: 13.488265072547307, lon: -88.18694940013386 },
        numero: "2527 7300",
        descripcion:
          "Atiende incendios, fugas de gas, rescates, accidentes vehiculares, derrumbes, explosiones y emergencias con materiales peligrosos.",
      },
      {
        id: "policia-nacional-civil",
        nombre: "Policía Nacional Civil (PNC)",
        tipo: "Seguridad pública",
        direccion: "10a Avenida Sur, Barrio San Francisco, San Miguel, El Salvador",
        coordenadas: { lat: 13.4835, lon: -88.1794 },
        numero: "911",
        descripcion:
          "Atiende emergencias de seguridad, robos, violencia, accidentes de tránsito, desapariciones y apoyo en situaciones de riesgo público.",
      },
      {
        id: "hospital-nacional-san-juan-de-dios",
        nombre: "Hospital Nacional San Juan de Dios",
        tipo: "Centro hospitalario nacional",
        direccion: "Final 11 Calle Poniente y 23 Avenida Sur, Colonia Ciudad Jardin, San Miguel, El Salvador",
        coordenadas: { lat: 13.4745, lon: -88.1895 },
        numero: "2665 6100",
        descripcion:
          "Atiende emergencias medicas generales, cirugias, accidentes, enfermedades graves y atencion hospitalaria publica.",
      },
      {
        id: "hospital-regional-isss",
        nombre: "Hospital Regional ISSS",
        tipo: "Centro hospitalario",
        direccion: "Calle Hermanos Maristas #13, Colonia Ciudad Jardin, San Miguel, El Salvador",
        coordenadas: { lat: 13.477161831198693, lon: -88.18286311638659 },
        numero: "2591 4000",
        descripcion:
          "Atiende emergencias y atencion medica para personas afiliadas al ISSS, incluyendo accidentes, enfermedades y cirugias.",
      },
      {
        id: "hospital-militar-regional",
        nombre: "Hospital Militar Regional",
        tipo: "Centro hospitalario",
        direccion: "Carretera Panamericana CA-1, Colonia Bustillo, San Miguel, El Salvador",
        coordenadas: { lat: 13.4749, lon: -88.1826 },
        numero: "2250 0080",
        descripcion:
          "Atiende emergencias medicas y servicios de salud principalmente para personal militar y sus familias, aunque en algunos casos apoya emergencias civiles.",
      },
      {
        id: "centro-medico-de-oriente",
        nombre: "Centro Médico de Oriente",
        tipo: "Centro hospitalario privado",
        direccion: "Colonia Ciudad Jardin, San Miguel, El Salvador",
        coordenadas: { lat: 13.4817, lon: -88.177 },
        numero: "2660 1200",
        descripcion:
          "Atiende emergencias privadas, consultas medicas, cirugias, maternidad y hospitalizacion.",
      },
      {
        id: "proteccion-civil",
        nombre: "Dirección General de Protección Civil",
        tipo: "Gestión de emergencias",
        direccion: "Colonia Ciudad Pacifica, San Miguel, El Salvador",
        coordenadas: { lat: 13.489, lon: -88.183 },
        numero: "2660 2500",
        descripcion:
          "Coordina atencion en desastres naturales, terremotos, inundaciones, tormentas, evacuaciones y emergencias nacionales.",
      },
    ],
  },
  usulutan: {
    nombre: "Usulután",
    descripcion: "Organizaciones de salud y apoyo disponibles en Usulután.",
    items: [
      {
        id: "hospital-san-pedro",
        nombre: 'Hospital Nacional General "San Pedro"',
        tipo: "Centro hospitalario nacional",
        direccion:
          "Final Calle Doctor Federico Penado, salida a San Salvador, Barrio Candelaria, Usulután, El Salvador",
        coordenadas: { lat: 13.343, lon: -88.4495 },
        numero: "+503 2633-8832 / 2792-0000",
        descripcion:
          "Atiende emergencias medicas generales, accidentes, cirugias, hospitalizacion y enfermedades graves.",
      },
      {
        id: "hospital-jorge-arturo-mena",
        nombre: 'Hospital Nacional General "Dr. Jorge Arturo Mena"',
        tipo: "Centro hospitalario nacional",
        direccion:
          "3a Calle Poniente #15, Barrio Concepcion, Santiago de Maria, Usulután, El Salvador",
        coordenadas: { lat: 13.3458, lon: -88.444 },
        numero: "+503 2684-0200 / 2792-1000",
        descripcion:
          "Atiende consultas, emergencias, cirugias y atencion hospitalaria publica.",
      },
      {
        id: "hospital-especialidades",
        nombre: "Hospital de Especialidades",
        tipo: "Atencion especializada",
        direccion: "Calle Doctor Federico Penado #11, Barrio Candelaria, Usulután, El Salvador",
        coordenadas: { lat: 13.3475, lon: -88.4418 },
        numero: "+503 2606-8814",
        descripcion:
          "Atiende consultas especializadas, diagnostico, cirugias y tratamientos medicos especificos.",
      },
      {
        id: "cuerpo-de-bomberos",
        nombre: "Cuerpo de Bomberos",
        tipo: "Respuesta de emergencia",
        direccion: "Barrio El Calvario, Usulután, El Salvador",
        coordenadas: { lat: 13.3462, lon: -88.4448 },
        numero: "+503 2662-0800",
        descripcion:
          "Atiende incendios, rescates, accidentes vehiculares, fugas de gas y emergencias de riesgo.",
      },
      {
        id: "cruz-roja-salvadorena",
        nombre: "Cruz Roja Salvadoreña",
        tipo: "Atencion prehospitalaria",
        direccion: "Barrio El Centro, Usulután, El Salvador",
        coordenadas: { lat: 13.345, lon: -88.4432 },
        numero: "+503 2624-0358",
        descripcion:
          "Atiende emergencias medicas, primeros auxilios, rescates y traslados en ambulancia.",
      },
      {
        id: "unidad-salud-jiquilisco",
        nombre: "Unidad de Salud de Jiquilisco",
        tipo: "Unidad de salud comunitaria",
        direccion: "Calle Principal, Barrio El Centro, Jiquilisco, Usulután, El Salvador",
        coordenadas: { lat: 13.3164, lon: -88.5853 },
        numero: "2684-3300",
        descripcion:
          "Atiende consultas generales, vacunacion, control prenatal y emergencias basicas.",
      },
      {
        id: "fosalud",
        nombre: "FOSALUD",
        tipo: "Atencion primaria",
        direccion: "Barrio El Centro, Usulután, El Salvador",
        coordenadas: { lat: 13.3467, lon: -88.4421 },
        numero: "2792-0050 / 2684-3300",
        descripcion:
          "Brinda atencion medica de emergencia, consultas y servicios de salud en horarios ampliados.",
      },
    ],
  },
  "la-union": {
    nombre: "La Unión",
    descripcion: "Instituciones y organizaciones de apoyo ubicadas en La Unión.",
    items: [
      {
        id: "hospital-general-la-union",
        nombre: "Hospital Nacional General de La Unión",
        tipo: "Centro hospitalario nacional",
        direccion:
          "Carretera Panamericana Km 180, Canton Huisquil, Conchagua, La Unión, El Salvador",
        coordenadas: { lat: 13.34659, lon: -87.87646 },
        numero: "2792 5040",
        descripcion:
          "Atiende emergencias medicas generales, accidentes, cirugias, hospitalizacion y enfermedades graves.",
      },
      {
        id: "hospital-santa-rosa-lima",
        nombre: "Hospital Nacional Santa Rosa de Lima",
        tipo: "Centro hospitalario nacional",
        direccion: "Calle Ruta Militar, salida hacia San Miguel, Santa Rosa de Lima, La Unión",
        coordenadas: { lat: 13.6245, lon: -87.8931 },
        numero: "2792 4400",
        descripcion:
          "Atiende consultas medicas, emergencias, cirugias y atencion hospitalaria publica.",
      },
      {
        id: "hospital-el-angel",
        nombre: "Hospital El Ángel",
        tipo: "Hospital privado",
        direccion: "Final calle principal, Edificio Hospital El Angel, Santa Rosa de Lima, La Unión",
        coordenadas: { lat: 13.6238, lon: -87.892 },
        numero: "2684 9500",
        descripcion:
          "Atiende emergencias privadas, consultas medicas, hospitalizacion y servicios de diagnostico.",
      },
      {
        id: "clinica-especialidades-santa-rosa",
        nombre: "Clínica de Especialidades Santa Rosa",
        tipo: "Clínica privada",
        direccion: "Barrio El Centro, Santa Rosa de Lima, La Unión",
        coordenadas: { lat: 13.6252, lon: -87.894 },
        numero: "2683 8700",
        descripcion:
          "Atiende consultas especializadas, chequeos medicos, diagnostico y tratamiento de enfermedades.",
      },
      {
        id: "policlinica-limena",
        nombre: "Policlínica Limeña",
        tipo: "Atencion ambulatoria",
        direccion: "1a Calle Oriente y 9a Avenida Norte, Barrio Concepcion, La Unión",
        coordenadas: { lat: 13.6249, lon: -87.8927 },
        numero: "2664 2061",
        descripcion:
          "Atiende consultas generales, emergencias menores, examenes medicos y atencion ambulatoria.",
      },
      {
        id: "unidad-la-union",
        nombre: "Unidad de Salud de La Unión",
        tipo: "Unidad de salud comunitaria",
        direccion: "Carretera Ruta Militar RN-18E, Santa Rosa de Lima, La Unión",
        coordenadas: { lat: 13.3381, lon: -87.845 },
        numero: "2656-5874",
        descripcion:
          "Atiende consultas generales, vacunacion, primeros auxilios y emergencias basicas.",
      },
      {
        id: "unidad-conchagua",
        nombre: "Unidad de Salud de Conchagua",
        tipo: "Unidad de salud comunitaria",
        direccion: "Barrio El Centro, frente al parque central de Conchagua, La Unión",
        coordenadas: { lat: 13.3074, lon: -87.8642 },
        numero: "2680-3443",
        descripcion:
          "Atiende enfermedades comunes, control prenatal, vacunacion y atencion preventiva.",
      },
      {
        id: "unidad-el-carmen",
        nombre: "Unidad de Salud de El Carmen",
        tipo: "Unidad de salud comunitaria",
        direccion: "Barrio El Centro, calle principal de El Carmen, La Unión",
        coordenadas: { lat: 13.35, lon: -88.0 },
        numero: "2680 7049",
        descripcion:
          "Atiende consultas medicas, emergencias basicas, programas de vacunacion y atencion primaria de salud.",
      },
    ],
  },
  morazan: {
    nombre: "Morazán",
    descripcion: "Organizaciones de salud y asistencia disponibles en Morazán.",
    items: [
      {
        id: "unidad-el-divisadero",
        nombre: "Unidad de Salud de El Divisadero",
        tipo: "Unidad de salud comunitaria",
        direccion: "Calle Principal, Barrio Santa Lucia, El Divisadero, Morazán Sur, El Salvador",
        coordenadas: { lat: 13.6508, lon: -88.0042 },
        numero: "2681-2700",
        descripcion:
          "Atiende consultas medicas generales, primeros auxilios, control prenatal, vacunacion y emergencias basicas de salud.",
      },
      {
        id: "unidad-osicala",
        nombre: "Unidad de Salud de Osicala",
        tipo: "Unidad de salud comunitaria",
        direccion: "3a Calle Poniente, Barrio San Rafael, Osicala, Morazán Sur, El Salvador",
        coordenadas: { lat: 13.7341, lon: -88.1015 },
        numero: "2658-8235",
        descripcion:
          "Atiende enfermedades comunes, emergencias menores, vacunacion, control infantil y atencion preventiva.",
      },
      {
        id: "unidad-corinto",
        nombre: "Unidad de Salud de Corinto",
        tipo: "Unidad de salud comunitaria",
        direccion: "Barrio El Centro, frente al Parque Municipal, Corinto, Morazán Sur, El Salvador",
        coordenadas: { lat: 13.8106, lon: -87.9713 },
        numero: "2270 1607",
        descripcion:
          "Atiende consultas medicas, accidentes leves, primeros auxilios, campañas de vacunacion y control de enfermedades.",
      },
      {
        id: "unidad-cacaopera",
        nombre: "Unidad de Salud de Cacaopera",
        tipo: "Unidad de salud comunitaria",
        direccion: "Barrio El Calvario, Calle Principal, Cacaopera, Morazán Sur, El Salvador",
        coordenadas: { lat: 13.7662, lon: -88.0879 },
        numero: "2651-0700",
        descripcion:
          "Atiende emergencias basicas, enfermedades comunes, atencion maternoinfantil y programas de prevencion de salud.",
      },
      {
        id: "unidad-san-francisco-gotera",
        nombre: "Unidad de Salud de San Francisco Gotera",
        tipo: "Unidad de salud comunitaria",
        direccion:
          "1a Avenida Norte, Barrio El Centro, San Francisco Gotera, Morazán Sur, El Salvador",
        coordenadas: { lat: 13.6995, lon: -88.1008 },
        numero: "2654-1142",
        descripcion:
          "Atiende emergencias medicas basicas, consultas generales, vacunacion y referencia de pacientes graves a hospitales.",
      },
      {
        id: "unidad-jocoro",
        nombre: "Unidad de Salud de Jocoro",
        tipo: "Unidad de salud comunitaria",
        direccion: "Barrio El Centro, Jocoro, Morazán Sur, El Salvador",
        coordenadas: { lat: 13.6168, lon: -88.0164 },
        numero: "2650-0009",
        descripcion:
          "Atiende primeros auxilios, enfermedades comunes, atencion preventiva y emergencias menores.",
      },
      {
        id: "unidad-sociedad",
        nombre: "Unidad de Salud de Sociedad",
        tipo: "Unidad de salud comunitaria",
        direccion: "Calle Sociedad-Corinto, Barrio El Coco, Sociedad, Morazán Sur, El Salvador",
        coordenadas: { lat: 13.7009, lon: -87.9667 },
        numero: "2270 1607",
        descripcion:
          "Atiende consultas medicas generales, control prenatal, vacunacion y atencion basica de emergencias.",
      },
      {
        id: "unidad-guatajiagua",
        nombre: "Unidad de Salud de Guatajiagua",
        tipo: "Unidad de salud comunitaria",
        direccion: "Barrio El Calvario, salida a Chapeltique, Guatajiagua, Morazán Sur, El Salvador",
        coordenadas: { lat: 13.6735, lon: -88.2002 },
        numero: "2658-6083",
        descripcion:
          "Atiende consultas medicas generales, primeros auxilios, emergencias basicas, vacunacion, control prenatal y programas de prevencion de enfermedades.",
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
    { palabras: ["pnc", "policia nacional civil"], nombre: "Policía Nacional Civil" },
    { palabras: ["proteccion civil"], nombre: "Protección Civil" },
    { palabras: ["hospital militar"], nombre: "Hospital Militar" },
    { palabras: ["isss"], nombre: "ISSS" },
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

