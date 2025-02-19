import getUserFromToken from "./TokenService";
import { getUser } from "./UserController";
import ShortUserDTO from "./DTO/ShortUserDTO";


const fetchCurrentUser = async () => {
	if (typeof window === "undefined") {
		console.warn("No se puede acceder al token en SSR.");
		return null; 
	}

	const decodedToken = getUserFromToken();
	if (!decodedToken) {
		console.warn("No hay token o no se pudo decodificar.");
		return null;
	}
		
	try {
		const res = await getUser(decodedToken.sub); 
		const currentUser = res.data;
		
		return new ShortUserDTO(
			currentUser.id,
			currentUser.username,
			currentUser.fullname,
			currentUser.profilephotouri
		);
	} catch (error) {
		console.error("Error al obtener el usuario actual:", error);
		return null;
	}
};

export default fetchCurrentUser;
