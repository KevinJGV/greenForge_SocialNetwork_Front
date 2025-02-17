import type { Route } from "./+types/signin";
import InputComponent from "../components/inputTextForm";
import Button from "../components/buttonDefault";
import { Link, useNavigate } from "react-router";
import svgs from "~/assets/initSessionSVG";
import { useRef } from "react";
import { apiForm } from "~/api/axiosConfig";
import { usePromisedNotification } from "~/components/notificationContext";
import { useSignin } from "~/components/useSignin";

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

export default function Signup() {
	const {promise} = useSignin();
	const { notify } = usePromisedNotification();
	const formRef = useRef<HTMLFormElement>(null);
	const buttonRef = useRef<HTMLButtonElement>(null);
	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		buttonRef.current?.setAttribute("disabled", "");

		if (!formRef.current) return;
		const formData = new FormData(formRef.current);
		try {
			const res = apiForm.post("/signup", formData);

			notify(
				res,
				{
					pendingMsg: "Espere",
					successMsg: "Registrado",
					errorMsg: "Usuario ya registrado",
				},
				`signup-${Date.now()}`
			);
			await res;
			promise(formData);
			buttonRef.current?.removeAttribute("disabled");
		} catch (error) {
			buttonRef.current?.removeAttribute("disabled");
			console.log("error:", error);
		}
	}
	return (
		<article className="backdrop-blur-[2px] flex flex-col gap-1 justify-center text-center p-8 rounded-10px glass-primary transition-colors duration-300">
			<h1 className="font-bold m-2 text-xl">Regístrate</h1>
			<form
				id="loginForm"
				ref={formRef}
				onSubmit={handleSubmit}
				className="grid md:grid-cols-2 gap-4 mb-6"
			>
				<InputComponent
					forProp="email"
					type="email"
					label="Email"
					isRequired={true}
					svg={svgs.email}
					inputClass="invalid:ring-2 invalid:ring-red-500"
				></InputComponent>
				<InputComponent
					forProp="username"
					type="text"
					label="Nombre de usuario"
					isRequired={true}
					svg={svgs.username}
				></InputComponent>
				<InputComponent
					forProp="fullname"
					type="text"
					label="Nombre Completo"
					isRequired={true}
					svg={svgs.fullname}
				></InputComponent>
				<InputComponent
					forProp="phone"
					label="Telefono"
					isRequired={true}
					svg={svgs.phone}
					customComponent="phone"
				></InputComponent>
				<InputComponent
					forProp="birth"
					type="date"
					label="Fecha de nacimiento"
					isRequired={true}
					svg={svgs.birth}
				></InputComponent>
				<InputComponent
					forProp="password"
					type="password"
					label="Contraseña"
					isRequired={true}
					svg={svgs.password}
					inputClass="invalid:ring-2 invalid:ring-red-500"
					pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d])[A-Za-z\d\W]{8,}$"
					textHelper="Mínimo 8 caracteres, una mayúscula, un número y un símbolo"
					textHelperClass="text-gray-500"
				></InputComponent>
			</form>
			<Button refObject={buttonRef} form="loginForm" type="submit">
				Registrarse
			</Button>
			<Link
				className="ease-default underline decoration-solid hover:decoration-double hover:text-secondary-500 visited:text-secondary-700"
				to="/signin"
			>
				¿Tienes cuenta? Inicia sesión
			</Link>
		</article>
	);
}
