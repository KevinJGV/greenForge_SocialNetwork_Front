import type { Config } from "tailwindcss";
import { defineConfig } from "tailwindcss";

const config: Config = defineConfig({
  content: [
    "./app/root.tsx", // Archivo principal
    "./app/*.{js,ts,jsx,tsx}", // Archivo principal
    "./app/**/*.{js,ts,jsx,tsx}", // Todo dentro de la carpeta `app`
    "./app/components/**/*.{js,ts,jsx,tsx}", // Componentes reutilizables
    "./app/routes/**/*.{js,ts,jsx,tsx}", // Rutas de React Router
  ],
  theme: {
    borderRadius: {
        ssm: "10px", // Esquinas redondeadas adicionales
        "ssm": "10px", // Esquinas redondeadas adicionales
      },
  },
  plugins: [],
});

export default config;
