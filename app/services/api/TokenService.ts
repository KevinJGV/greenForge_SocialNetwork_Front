import { jwtDecode } from "jwt-decode";


const getUserFromToken = () => {
	if (typeof window === "undefined") {
		return null; 
	}

	const token = localStorage.getItem("tkn");
	if (token) {
		const decoded: any = jwtDecode(token);
		console.log("Datos del usuario:", decoded);
		return decoded;
	}
	return null;
};

export default getUserFromToken;
