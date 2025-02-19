import { Navigate, Outlet, useLocation } from "react-router";
import Sidebar from '../components/Sidebar';
import MainContent from '~/components/mainContent';
import { useEffect, useState } from "react";
import type ShortUserDTO from "~/services/api/DTO/ShortUserDTO";
import fetchCurrentUser from "~/services/api/CurrenUser";

export default function HomeLayout() {
	const token = localStorage.getItem("tkn");

	if (!token) {
		return <Navigate to="/signin" replace />;
	}

	const [currentUser, setCurrentUser] = useState<ShortUserDTO | null>(null);
	const [isLoading, setIsLoading] = useState(true); 

	useEffect(() => {
		const getUserData = async () => {
			try {
				const user = await fetchCurrentUser();
				setCurrentUser(user);
			} catch (error) {
				console.error("Error al obtener el usuario:", error);
			} finally {
				setIsLoading(false); 
			}
		};

		getUserData();
	}, []);

	if (isLoading) {
		
		return <div>Cargando...</div>;
	}

	return (
		<main className="flex">
			<Sidebar />
			<MainContent>
				<Outlet context={{ currentUser }} />
			</MainContent>
		</main>
	);
}



