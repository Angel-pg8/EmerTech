# EmerTech

EmerTech es una plataforma web de apoyo en emergencias orientada a usuarios de El Salvador.
El proyecto esta pensado principalmente para dispositivos moviles y busca ofrecer ayuda rapida,
orientacion inicial y acceso sencillo a funciones criticas durante una situacion de emergencia.

## Estado actual

Actualmente el proyecto incluye:

- Frontend con React, Vite y Tailwind CSS.
- Navegacion base entre pantallas principales.
- Chat conectado a un backend con Express.
- Backend preparado para consultar Groq desde el servidor.
- Boton `SOS` para abrir la llamada de emergencia desde el dispositivo.

## Stack tecnologico

- Frontend: React, Vite, Tailwind CSS
- Backend: Node.js, Express
- IA: Groq API
- Base de datos planificada: Firebase Firestore
- Mapas planificados: Google Maps JavaScript API

## Estructura basica

```txt
src/
  components/
  pages/
server/
  index.js
  prompts.js
public/
```

## Requisitos

- Node.js 18 o superior
- npm

## Instalacion

```bash
npm install
```

## Desarrollo

Frontend:

```bash
npm run dev
npm run dev:mobile
```

Backend:

```bash
npm run dev:server
```

## Variables y configuracion

El backend usa estos valores:

- `PORT=3001`
- `GROQ_API_KEY`: obligatoria en el servidor.
- `GROQ_BASE_URL=https://api.groq.com/openai/v1`
- `GROQ_MODEL=llama-3.1-8b-instant`

Para desarrollo local, crea `.env.local` tomando `.env.example` como base:

```bash
GROQ_API_KEY=tu_clave_de_groq
```

No se debe poner `GROQ_API_KEY` en el frontend ni subirla a GitHub. La clave vive en el
servidor para que la app funcione desde cualquier telefono o computadora que abra la URL.

## Flujo actual del chat

1. El usuario escribe un mensaje en la pantalla de chat.
2. El frontend envia el mensaje a `POST /api/chat`.
3. El backend agrega el contexto base de EmerTech.
4. El backend consulta a Groq usando `GROQ_API_KEY`.
5. La respuesta vuelve al frontend y se muestra al usuario.

## Despliegue

El repositorio incluye `render.yaml` para desplegar frontend y backend juntos en Render.

1. Sube el repositorio a GitHub.
2. En Render, crea un Blueprint o Web Service desde este repositorio.
3. Configura la variable secreta `GROQ_API_KEY` en el servicio.
4. Render ejecutara `npm install && npm run build` y luego `npm run start`.

La URL publica de Render servira la app completa y las rutas `/api/health` y `/api/chat`
desde el mismo dominio.

## Scripts disponibles

- `npm run dev`: inicia el frontend con Vite
- `npm run dev:server`: inicia el backend con Express
- `npm run build`: genera la version de produccion del frontend
- `npm run preview`: previsualiza el build del frontend
- `npm run start`: inicia el servidor Express
- `npm run lint`: ejecuta ESLint

## Nota de despliegue

GitHub Pages sirve bien para demos estaticas del frontend, pero no para este proyecto completo,
porque EmerTech necesita backend con Express para proteger `GROQ_API_KEY`.

## Equipo

Este repositorio esta siendo trabajado por un equipo en paralelo, por lo que se recomienda:

- hacer cambios pequenos y claros,
- usar commits descriptivos,
- evitar reestructuraciones grandes sin avisar al equipo.
