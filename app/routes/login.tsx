import type { Route } from "./+types/login";

export function meta({}: Route.MetaArgs) {
    return [
        {title: "Inicia Sesión - AlfaSB"},
        {name: "description", content: "Inicia sesión en AlfaSB para acceder a tu cuenta."},
        {description: "Inicia sesión en AlfaSB para acceder a tu cuenta."},
        {robots: "noindex, nofollow"},
    ];
}

export default function Login() {
    return (
        <div>
            <h1>Inicia Sesión</h1>
            <p>¡Bienvenido de nuevo! Por favor, inicia sesión para acceder a tu cuenta.</p>
        </div>
    );
}