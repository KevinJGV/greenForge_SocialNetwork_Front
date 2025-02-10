import type { Route } from "./+types/signin";
import Login from "../components/login";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
    return [
        {title: "Inicia Sesión - GreenForge"},
        {name: "description", content: "Inicia sesión en AlfaSB para acceder a tu cuenta."},
        {description: "Inicia sesión en AlfaSB para acceder a tu cuenta."},
        {robots: "noindex, nofollow"},
    ];
}

export default function signin () {
    return (
        <Login>
            <div className="backdrop-blur-sm flex flex-col gap-1 justify-center text-center p-8 rounded">
            <h1>Iniciar Sesión</h1>
            <form action="" className="flex flex-col">
                <label htmlFor="">Usuario</label>
                <input type="text"/>
                <label htmlFor="">Contraseña</label>
                <input type="password"/>
                <button></button>
            </form>
            <Link to="/signup">¿Aún sin cuenta? Registrate ahora</Link>
            </div>
        </Login>
    )
}