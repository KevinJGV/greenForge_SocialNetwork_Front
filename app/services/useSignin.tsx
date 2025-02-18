import { useNavigate } from "react-router";
import { usePromisedNotification } from "~/components/notificationContext";
import api from "~/services/api/axiosConfig";

export default function useSignin() {
	const { notify } = usePromisedNotification();
	const navigate = useNavigate();

	async function promise(formData: FormData) {
		try {
			const res = api.post("/auth", formData);

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
				debugger;
				navigate("/home");
			}
		} catch (error) {
			console.log(error);
		}
		
	}
	return { promise };
}
