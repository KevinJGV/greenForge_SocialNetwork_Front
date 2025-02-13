import { Navigate, Outlet, useLocation } from "react-router";
import { AnimatePresence, motion } from "framer-motion";

import Icon from "../components/greenforgeIcon";
import Logo from "../components/greenforgeLogo";

import { PromisedNotificationProvider } from "~/components/notificationContext";

export default function initSession() {
	const token = localStorage.getItem("tkn");

	if (token) {
		return <Navigate to="/home" replace />;
	}
	const location = useLocation();

	return (
		<PromisedNotificationProvider>
			<main className="w-screen h-screen flex flex-col items-center justify-around">
				<div
					className="flex align-center justify-center gap-1"
					unselectable="on"
				>
					<Icon classN="w-35" />
					<Logo classN="w-160" />
				</div>
				<AnimatePresence mode="wait">
					<motion.div
						key={location.pathname}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{
							duration: 0.3,
							ease: "easeInOut",
						}}
					>
						<Outlet />
					</motion.div>
				</AnimatePresence>
				<footer>
					© {new Date().getFullYear()} GreenForge - Todos los derechos
					reservados
				</footer>
			</main>
		</PromisedNotificationProvider>
	);
}
