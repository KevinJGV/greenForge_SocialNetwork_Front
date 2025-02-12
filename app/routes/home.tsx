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

export default function home() {
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
		<>
		</>
	);
}
