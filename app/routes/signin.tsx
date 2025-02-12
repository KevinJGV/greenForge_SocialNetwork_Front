import type { Route } from "./+types/signin";
import { Link } from "react-router";

import InputComponent from "../components/inputTextForm";
import Button from "../components/buttonDefault";
import svgs from "~/assets/initSessionSVG";
import { useNotification } from "~/components/notificationContext";

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
	const { notify } = useNotification();

	const handleSignup = () => {
		notify("¡Registro exitoso!", "success");
	};

	return (
		<>
			<h1 className="font-bold m-2 text-xl">Iniciar Sesión</h1>
			<form id="loginForm" className="flex flex-col gap-4 mb-6">
				<InputComponent
					forProp="username"
					type="text"
					label="Nombre de usuario"
					isRequired={true}
					placeholderText=""
					svg={svgs.username}
				></InputComponent>
				<InputComponent
					forProp="password"
					type="password"
					label="Contraseña"
					isRequired={true}
					placeholderText=""
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
		</>
	);
}
