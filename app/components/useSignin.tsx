// hooks/useSignin.ts
import { useNavigate } from "react-router";
import { usePromisedNotification } from "~/components/notificationContext";
import {apiForm} from "~/api/axiosConfig";

export function useSignin() {
	const { notify } = usePromisedNotification();
	const navigate = useNavigate();

	async function promise(formData: FormData) {
		const res = apiForm.post("/auth", formData);

		notify(
			res,
			{
				pendingMsg: "Comprobando credenciales",
				successMsg: "Autenticado",
				errorMsg: "Credenciales no válidas",
			},
			`signin-${Date.now()}`
		);
		const awaitedRes = await res;
		console.log("res:", awaitedRes);
		const tkn = awaitedRes.data;
		if (tkn) {
			localStorage.setItem("tkn", tkn);
			navigate("/home");
		}
	}
	return { promise };
}
