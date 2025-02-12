import { Outlet, useLocation } from "react-router";
import {AnimatePresence, motion} from "framer-motion";

export default function Login() {
	const location = useLocation();
	return (
		<main className="w-screen h-screen flex flex-col items-center justify-around">
			<div
				className="flex align-center justify-center gap-1"
				unselectable="on"
			>
				<img
					src="/greenforgelogo.svg"
					alt=""
					className="w-35"
					unselectable="on"
					draggable="false"
				/>
				<img
					src="/GREENFORGE.svg"
					alt=""
					unselectable="on"
					draggable="false"
				/>
			</div>
			<article className="backdrop-blur-[2px] flex flex-col gap-1 justify-center text-center p-8 rounded-10px glass-primary transition-colors duration-300">
				<AnimatePresence mode="wait" >
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
			</article>
			<footer>
				© {new Date().getFullYear()} GreenForge - Todos los derechos
				reservados
			</footer>
		</main>
	);
}
