
import React from "react";

type Props = {
    children : React.ReactNode;
}

export default function Login({children} : Props) {
    return (
        <main className="w-screen h-screen flex flex-col items-center justify-around">
            <div className="flex align-center justify-center gap-1">
                <img src="/greenforgelogo.svg" alt="" className="w-35"/>
                <img src="/GREENFORGE.svg" alt="" />
            </div>
            <article>
                {children}
            </article>
            <footer>© {new Date().getFullYear()} GreenForge - Todos los derechos reservados</footer>
        </main>
    );
}