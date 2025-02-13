import type { Route } from "./+types/signin";
import { Link, useNavigate } from "react-router";
import { useRef } from "react";

import InputComponent from "../components/inputTextForm";
import Button from "../components/buttonDefault";
import svgs from "~/assets/initSessionSVG";
import {  usePromisedNotification } from "~/components/notificationContext";
import { apiForm } from "~/api/axiosConfig";

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

export default function signin() {
	const { notify } = usePromisedNotification();
	const navigate = useNavigate();
	const formRef = useRef<HTMLFormElement>(null);
	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		debugger;
		e.preventDefault();

		if (!formRef.current) return;

		notify(apiForm.post("/auth/login"), {
			pendingMsg: "Comprobando credenciales",
			successMsg: "Autenticado",
			errorMsg: "Credenciales no válidas",
		});

		const formData = new FormData(formRef.current);
		try {
			const res = await apiForm.post("/auth/login", formData);
			console.log("res:", res);
			localStorage.setItem("tkn", res.data.token);
			navigate("/home");
		} catch (error) {
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
				<Button type="submit">Iniciar</Button>
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
