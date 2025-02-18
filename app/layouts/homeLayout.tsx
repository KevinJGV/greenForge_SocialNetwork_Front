import { Navigate, Outlet, useLocation } from "react-router";
import Sidebar from '../components/Sidebar';
import MainContent from '~/components/mainContent';
import { useEffect, useState } from "react";
import type ShortUserDTO from "~/services/api/DTO/ShortUserDTO";
import fetchCurrentUser from "~/services/api/CurrenUser";

export default function homeLayout() {
	const token = localStorage.getItem("tkn");


	if (!token) {
		return <Navigate to="/signin" replace />;
	}

	const [currentUser, setCurrentUser] = useState<ShortUserDTO | null>(null);

	useEffect(() => {
		const getUserData = async () => {
			const user = await fetchCurrentUser();
			setCurrentUser(user);
		};

		getUserData();
	}, []);

	const location = useLocation();
	return (
		<main className="flex">
			<Sidebar />
			<MainContent>
				<Outlet context={{currentUser}} />
			</MainContent>
		</main>
	);
}
