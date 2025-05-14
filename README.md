# BBVA-Memory-Cards

## Requisitos Previos

Antes de ejecutar el proyecto localmente, asegúrate de tener las siguientes herramientas instaladas:

- [Node.js](https://nodejs.org/) (preferentemente la versión LTS)
- [npm](https://www.npmjs.com/) para gestionar dependencias
- [Git](https://git-scm.com/) para gestionar el repositorio

## Instrucciones para Ejecutar en Local

1. Clona el repositorio:

   ```bash
   git clone https://github.com/RicardoD4W/BBVA-Memory-Cards.git
   cd BBVA-Memory-Cards
   ```

2. Instala las dependencias:

```bash
npm install
```

3. Ejecuta el proyecto:

```bash
npm run dev
```

## Descripción

Este proyecto es un juego de memoria desarrollado utilizando **Lit** y **Vite**. El objetivo del juego es que el usuario recuerde y seleccione correctamente los números en las cartas mostradas. La aplicación se basa en componentes web personalizados y está estructurada para ser una Progressive Web App (PWA).

## Tecnologías Utilizadas

- **Lit**: Framework de componentes web para crear la interfaz de usuario.
- **Vite**: Herramienta de construcción rápida para el desarrollo y la producción.
- **@vaadin/router**: Router ligero para manejar la navegación en la aplicación.
- **TypeScript**: Lenguaje utilizado para escribir el código de la aplicación.
- **ESLint y Prettier**: Herramientas para mantener la calidad del código y el formato consistente.
- **Vite PWA Plugin**: Para convertir la aplicación en una Progressive Web App.

## Comandos Disponibles

- `npm run dev`: Inicia el servidor de desarrollo.
- `npm run build`: Construye el proyecto para producción.
- `npm run preview`: Previsualiza la versión de producción.
- `npm run lint`: Ejecuta ESLint para verificar la calidad del código.
- `npm run lint:fix`: Ejecuta ESLint y corrige automáticamente los problemas detectados.
- `npm run format`: Ejecuta Prettier para formatear el código.
- `npm run test`: Ejecuta las pruebas unitarias.
- `npm run test:watch`: Ejecuta las pruebas unitarias en modo de observación (watch mode).
- `npm run e2e`: Ejecuta las pruebas end to end.

## Características adicionales incluidas

- `Contador de tiempo` indicando los segundos restantes para visualizar los números.
- `Vibración` en el dispositivo cada vez que el usuario pierda.
- `Persistencia de puntos` entre dificultades
- Botón de `'Play'/'Stop'` para iniciar o parar el juego en cualquier punto
- `Animaciones` para la mejora de UX
- Uso de `MVVM` para los componentes
- Uso de múltiples principios como `SOLID`
- Uso de `Screaming Architecture` como arquitectura principal del proyecto
- Testing `E2E`
- `CI/CD` con Github Actions
