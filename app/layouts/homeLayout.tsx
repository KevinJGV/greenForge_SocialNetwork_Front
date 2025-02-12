import { Outlet, useLocation } from "react-router";
import {AnimatePresence, motion} from "framer-motion";
import Icon from "../components/greenforgeIcon";
import ThemeToggle from "~/components/themeToggle";

export default function homeLayout() {
	const location = useLocation();
	return (
        <><ThemeToggle />
		<main className="w-screen h-screen flex flex-col items-center justify-around">
		</main></>
	);
}
