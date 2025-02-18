import type { Route } from "./+types/signin";
import { Link } from "react-router";
import { useRef } from "react";

import InputComponent from "../components/inputTextForm";
import Button from "../components/buttonDefault";
import svgs from "~/assets/initSessionSVG";
import useSignin from "~/services/useSignin";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Sign In - GreenForge" },
		{
			name: "description",
			content: "Inicia sesión en GreenForge para acceder a tu cuenta.",
		},
		{
			description:
				"Inicia sesión en GreenForge para acceder a tu cuenta.",
		},
		{ robots: "noindex, nofollow" },
	];
}

export default function Signin() {
	const {promise} = useSignin();
	const formRef = useRef<HTMLFormElement>(null);
	const buttonRef = useRef<HTMLButtonElement>(null);
	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		buttonRef.current?.setAttribute("disabled", "");

		if (!formRef.current) return;
		const formData = new FormData(formRef.current);
		try {
			await promise(formData);
		} catch (error) {
			buttonRef.current?.removeAttribute("disabled");

			console.log("error:", error);
		}
	}

	return (
		<article className="backdrop-blur-[2px] flex flex-col gap-1 justify-center text-center p-8 rounded-10px glass-primary transition-colors duration-300">
			<h1 className="font-bold m-2 text-xl">Iniciar Sesión</h1>
			<form
				id="loginForm"
				ref={formRef}
				onSubmit={handleSubmit}
				className="flex flex-col gap-4 mb-6"
			>
				<InputComponent
					forProp="username"
					type="text"
					label="Nombre de usuario"
					isRequired={true}
					svg={svgs.username}
				></InputComponent>
				<InputComponent
					forProp="password"
					type="password"
					label="Contraseña"
					isRequired={true}
					svg={svgs.password}
				></InputComponent>
				<Button refObject={buttonRef} type="submit">
					Iniciar
				</Button>
			</form>
			<Link
				className="ease-default underline decoration-solid hover:decoration-double hover:text-secondary-500 visited:text-secondary-700"
				to="/signup"
			>
				¿Aún sin cuenta? Registrate ahora
			</Link>
		</article>
	);
}
