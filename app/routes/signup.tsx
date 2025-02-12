import type { Route } from "./+types/signin";
import Login from "../layouts/initSession";
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

const fullnameSVG: React.ReactNode = (
	<svg
		className="absolute top-6 left-3"
		fill="#6b7280"
		height="18"
		width="18"
		viewBox="0 0 306.637 306.637"
	>
		<g>
			<g>
				<path
					d="M12.809,238.52L0,306.637l68.118-12.809l184.277-184.277l-55.309-55.309L12.809,238.52z M60.79,279.943l-41.992,7.896
			l7.896-41.992L197.086,75.455l34.096,34.096L60.79,279.943z"
				/>
				<path
					d="M251.329,0l-41.507,41.507l55.308,55.308l41.507-41.507L251.329,0z M231.035,41.507l20.294-20.294l34.095,34.095
			L265.13,75.602L231.035,41.507z"
				/>
			</g>
			<g></g>
			<g></g>
			<g></g>
			<g></g>
			<g></g>
			<g></g>
			<g></g>
			<g></g>
			<g></g>
			<g></g>
			<g></g>
			<g></g>
			<g></g>
			<g></g>
			<g></g>
		</g>
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
		<>
			<h1 className="font-bold m-2 text-xl">Regístrate</h1>
			<form id="loginForm" action="" className="flex flex-col gap-4 mb-6">
				<InputComponent
					forProp="username"
					type="text"
					label="Nombre de usuario"
					isRequired={true}
					placeholderText=""
					svg={usernameSVG}
				></InputComponent>
				<InputComponent
					forProp="fullname"
					type="text"
					label="Nombre Completo"
					isRequired={true}
					placeholderText=""
					svg={fullnameSVG}
				></InputComponent>
				<InputComponent
					forProp="password"
					type="password"
					label="Contraseña"
					isRequired={true}
					placeholderText=""
					svg={passwordSVG}
				></InputComponent>
				<Button type="submit">Registrarse</Button>
			</form>
			<Link
				className="ease-default underline decoration-solid hover:decoration-double hover:text-secondary-500 visited:text-secondary-700"
				to="/signin"
			>
				¿Tienes cuenta? Inicia sesión
			</Link>
		</>
	);
}
