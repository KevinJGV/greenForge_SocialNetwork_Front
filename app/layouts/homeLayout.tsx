import { Navigate, Outlet, useLocation } from "react-router";
import { AnimatePresence, motion } from "framer-motion";
import Icon from "../components/greenforgeIcon";
import ThemeToggle from "~/components/themeToggle";
import Sidebar from '../components/Sidebar';
import MainContent from '~/components/mainContent';

export default function homeLayout() {
	const token = localStorage.getItem("tkn");

	if (!token) {
		return <Navigate to="/signin" replace />;
	}

	const location = useLocation();
	return (
		<main className="flex">
			<Sidebar />
			<MainContent>
				<Outlet />
			</MainContent>
		</main>
	);
}
