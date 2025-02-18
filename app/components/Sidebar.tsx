import { Home, LogOut, UserRound, Bell } from "lucide-react";
import { Link } from "react-router";
import ThemeToggle from "./themeToggle";

const Sidebar = () => {
	return (
		<header className="flex-0 ">
			<nav className="w-64 bg-black p-6 flex flex-col justify-between h-dvh fixed">
				<div className="mb-8">
					<h1 className="text-3xl font-bold text-primarystatic-100">
						Green
						<span className="text-secondarystatic-500">FORGE</span>
					</h1>
				</div>
				<div className="space-y-4 mb-8 ">
					<Link
						className="flex items-center space-x-2 text-primarystatic-200 hover:text-white"
						to={"/home"}
					>
						<Home />
						<span>Home</span>
					</Link>
					<Link
						className="flex items-center space-x-2 text-primarystatic-200 hover:text-white"
						to={"/profile"}
					>
						<UserRound />
						<span>Perfil</span>
					</Link>
					<Link
						className="flex items-center space-x-2 text-primarystatic-200 hover:text-white"
						to={"/notifications"}
					>
						<Bell />
						<span>Notificaciones</span>
					</Link>
					<span
						className="cursor-pointer flex items-center space-x-2 text-primarystatic-200 hover:text-white"
					>
						<LogOut />
						<span>Cerrar Sesión</span>
					</span>
				</div>
				<ThemeToggle />
				<div className="text-xs text-primarystatic-400">
					<a href="#" className="hover:underline">
						Cookies
					</a>
					<span className="mx-2">|</span>
					<a href="#" className="hover:underline">
						Privacy Policy
					</a>
				</div>
			</nav>
		</header>
	);
};

export default Sidebar;
