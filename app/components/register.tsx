import React from "react";

type Props = {
    children : React.ReactNode;
}

export default function Login({children} : Props) {
    return (
		<main className="w-screen h-screen flex flex-col items-center justify-around">
			<div
				className="flex align-center justify-center gap-1"
				unselectable="on"
			>
				<img
					src="/greenforgelogo.svg"
					alt=""
					className="w-35"
					unselectable="on"
					draggable="false"
				/>
				<img
					src="/GREENFORGE.svg"
					alt=""
					unselectable="on"
					draggable="false"
				/>
			</div>
			<article>
				<div className="backdrop-blur-[2px] flex flex-col gap-1 justify-center text-center p-8 rounded-10px glass-primary transition-colors duration-300">
					{children}
				</div>
			</article>
			<footer>
				© {new Date().getFullYear()} GreenForge - Todos los derechos
				reservados
			</footer>
		</main>
	);
}