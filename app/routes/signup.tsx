import type { Route } from "./+types/signin";
import InputComponent from "../components/inputTextForm";
import Button from "../components/buttonDefault";
import { Link } from "react-router";
import  svgs  from "~/assets/initSessionSVG";

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



export default function signup() {
	return (
		<>
			<h1 className="font-bold m-2 text-xl">Regístrate</h1>
			<form id="loginForm" className="flex flex-col gap-4 mb-6">
				<InputComponent
					forProp="email"
					type="email"
					label="Email"
					isRequired={true}
					placeholderText=""
					svg={svgs.email}
					inputClass="invalid:ring-2 invalid:ring-red-500"
				></InputComponent>
				<InputComponent
					forProp="username"
					type="text"
					label="Nombre de usuario"
					isRequired={true}
					placeholderText=""
					svg={svgs.username}
				></InputComponent>
				<InputComponent
					forProp="fullname"
					type="text"
					label="Nombre Completo"
					isRequired={true}
					placeholderText=""
					svg={svgs.fullname}
				></InputComponent>
				<InputComponent
					forProp="password"
					type="password"
					label="Contraseña"
					isRequired={true}
					placeholderText=""
					svg={svgs.password}
					inputClass="invalid:border-red-500"
					pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d])[A-Za-z\d\W]{8,}$"
					textHelper="Mínimo 8 caracteres, una mayúscula, un número y un símbolo"
					textHelperClass="text-gray-500"
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
