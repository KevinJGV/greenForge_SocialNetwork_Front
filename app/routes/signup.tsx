import type { Route } from "./+types/signin";
import Login from "../components/login";
import InputComponent from "../components/inputTextForm";
import Button from "../components/buttonDefault";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Sign Up - GreenForge" },
		{
			name: "description",
			content: "Inicia sesión en AlfaSB para acceder a tu cuenta.",
		},
		{ description: "Inicia sesión en AlfaSB para acceder a tu cuenta." },
		{ robots: "noindex, nofollow" },
	];
}

const usernameSVG: React.ReactNode = (
	<svg
		className="absolute top-6 left-4"
		fill=""
		width="18"
		height="18"
		viewBox="0 0 344 384"
	>
		<path
			d="M170.5 192q-35.5 0-60.5-25t-25-60.5T110 46t60.5-25T231 46t25 60.5t-25 60.5t-60.5 25zm0 43q31.5 0 69.5 9t69.5 29.5T341 320v43H0v-43q0-26 31.5-46.5T101 244t69.5-9z"
			fill="#6b7280"
		></path>
	</svg>
);

const passwordSVG: React.ReactNode = (
	<svg
		className="absolute top-7 left-4"
		fill="#6b7280"
		height="13"
		width="13"
		version="1.1"
		id="Layer_1"
		viewBox="0 0 455 455"
	>
		<polygon
			points="347.49,227 454.5,165.212 394.508,61.288 287.5,123.077 287.5,0 167.5,0 167.5,123.077 60.492,61.288 
	0.499,165.212 107.51,227 0.5,288.788 60.492,392.712 167.5,330.923 167.5,455 287.5,455 287.5,330.923 394.508,392.712 
	454.501,288.788 "
		/>
	</svg>
);

export default function signup() {
	return (
		<Login>
			<h1 className="font-bold m-2 text-xl">Iniciar Sesión</h1>
			<form id="loginForm" action="" className="flex flex-col gap-4">
				<InputComponent
					forProp="username"
					type="text"
					label="Nombre de usuario"
					isRequired={true}
					placeholderText=""
					svg={usernameSVG}
				></InputComponent>
				<InputComponent
					forProp="password"
					type="password"
					label="Contraseña"
					isRequired={true}
					placeholderText=""
					svg={passwordSVG}
				></InputComponent>
				<Button type="submit">Iniciar</Button>
			</form>
			<Link
				className="ease-default underline decoration-solid hover:decoration-double hover:text-secondary-500 visited:text-secondary-700 mt-6"
				to="/signin"
			>
				¿Tienes cuenta? Inicia sesión
			</Link>
		</Login>
	);
}
