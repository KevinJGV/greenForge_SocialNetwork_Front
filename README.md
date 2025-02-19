# GreenForge - Frontend En desarrollo

## Descripción del Proyecto
GreenForge es una red social que permite a los usuarios compartir pensamientos, interactuar con otros y mantenerse conectados de manera intuitiva. Este repositorio contiene el frontend de la aplicación, desarrollado con **React**, **Vite** y **TypeScript**, utilizando **Tailwind CSS v4** para el diseño.

## Tecnologías Utilizadas
- **React 18**
- **Vite** como entorno de desarrollo
- **TypeScript** para una tipificación estricta
- **React Router** para la gestión de rutas
- **Tailwind CSS v4** para el diseño y estilización
- **Axios** para consumo de la API
- **JWT (JSON Web Token)** para autenticación

## Instalación y Configuración
### Requisitos previos
- Node.js 18+
- npm

### Instalación
1. Clonar el repositorio:
   ```sh
   git clone https://github.com/usuario/greenforge-frontend.git
   cd greenforge-frontend
   ```

2. Instalar dependencias:
   ```sh
   npm install
   ```

3. Ejecutar el proyecto en modo desarrollo:
   ```sh
   npm run dev
   # o con yarn
   yarn dev
   ```

4. (Opcional) Registrarse usando contraseña de testing: `ASDHlksad32:$5e8u45632` 

## Gestión de Rutas con React Router
- **Inicio**: `/home`
- **Inicio de sesión**: `/signin`
- **Registro**: `/signup`
- **Perfil del usuario**: `/profile`
- **Página 404**: `*`

> [!NOTE]  
> La URI `http://localhost:517X` suele no redirigír automáticamente, debe añadirse manualmente `/` => `http://localhost:517X/`.

## Integración con el Backend
- **Autenticación JWT**: Se almacena el token en `localStorage` y se usa en los headers de las peticiones.
- **Consumo de API con Axios**

## Repositorio del Backend
El backend del proyecto está desarrollado con **Spring Boot**. Puedes encontrarlo en: [Repositorio Backend](https://github.com/KevinJGV/greenForge_SocialNetwork_Back.git)