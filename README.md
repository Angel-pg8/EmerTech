# EmerTech

EmerTech es una plataforma web de apoyo en emergencias orientada a usuarios de El Salvador.
El proyecto esta pensado principalmente para dispositivos moviles y busca ofrecer ayuda rapida,
orientacion inicial y acceso sencillo a funciones criticas durante una situacion de emergencia.

## Estado actual

Actualmente el proyecto incluye:

- Frontend con React, Vite y Tailwind CSS.
- Navegacion base entre pantallas principales.
- Chat conectado a un backend con Express.
- Backend preparado para consultar a Ollama en local.
- Boton `SOS` para abrir la llamada de emergencia desde el dispositivo.

## Stack tecnologico

- Frontend: React, Vite, Tailwind CSS
- Backend: Node.js, Express
- IA local: Ollama
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
- Ollama instalado en la maquina donde correra el backend
- Un modelo disponible en Ollama, por ejemplo `gemma4`

## Instalacion

```bash
npm install
```

## Desarrollo

Frontend:

```bash
npm run dev
```

Backend:

```bash
npm run dev:server
```

## Variables y configuracion

El backend usa estos valores por defecto:

- `PORT=3001`
- `OLLAMA_BASE_URL=http://localhost:11434`
- `OLLAMA_MODEL=gemma4`

Si necesitan cambiar el modelo en la laptop final, pueden hacerlo sin tocar el codigo,
solo ajustando la variable `OLLAMA_MODEL`.

## Flujo actual del chat

1. El usuario escribe un mensaje en la pantalla de chat.
2. El frontend envia el mensaje a `POST /api/chat`.
3. El backend agrega el contexto base de EmerTech.
4. El backend consulta a Ollama en local.
5. La respuesta vuelve al frontend y se muestra al usuario.

## Scripts disponibles

- `npm run dev`: inicia el frontend con Vite
- `npm run dev:server`: inicia el backend con Express
- `npm run build`: genera la version de produccion del frontend
- `npm run preview`: previsualiza el build del frontend
- `npm run start`: inicia el servidor Express
- `npm run lint`: ejecuta ESLint

## Nota de despliegue

GitHub Pages sirve bien para demos estaticas del frontend, pero no para este proyecto completo,
porque EmerTech necesita backend con Express y comunicacion con Ollama local.

## Equipo

Este repositorio esta siendo trabajado por un equipo en paralelo, por lo que se recomienda:

- hacer cambios pequenos y claros,
- usar commits descriptivos,
- evitar reestructuraciones grandes sin avisar al equipo.
