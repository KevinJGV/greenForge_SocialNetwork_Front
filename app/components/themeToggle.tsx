import { useEffect, useState } from "react";

export default function ThemeToggle() {
	const [darkMode, setDarkMode] = useState(false);

	// Cargar el tema al cargar la página
	useEffect(() => {
		const savedTheme = localStorage.getItem("theme");
		if (savedTheme) {
			setDarkMode(savedTheme === "dark");
			document.documentElement.classList.toggle(
				"dark",
				savedTheme === "dark"
			);
		} else {
			const prefersDark = window.matchMedia(
				"(prefers-color-scheme: dark)"
			).matches;
			setDarkMode(prefersDark);
			document.documentElement.classList.toggle("dark", prefersDark);
		}
	}, []);

	// Función para alternar el tema
	const toggleTheme = () => {
		const newTheme = !darkMode ? "dark" : "light";
		setDarkMode(!darkMode);
		document.documentElement.classList.toggle("dark", !darkMode);
		localStorage.setItem("theme", newTheme);
	};

	return (
		<label
			className="self-center cursor-pointer relative h-[3em] w-[6em] rounded-full bg-[hsl(0,0%,7%)] shadow-[0px_2px_4px_0px_rgb(18,18,18,0.25),0px_4px_8px_0px_rgb(18,18,18,0.35)]"
			onClick={toggleTheme}
		>
			<span className="absolute inset-[0.1em] rounded-full border-[1px] border-[hsl(0,0%,25%)]"></span>
			<div className="absolute left-[0.5em] top-1/2 flex h-[2em] w-[2em] -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[inset_0px_2px_2px_0px_hsl(0,0%,85%)]">
				<div className="h-[1.5em] w-[1.5em] rounded-full bg-[hsl(0,0%,7%)] shadow-[0px_2px_2px_0px_hsl(0,0%,85%)]"></div>
			</div>
			<div className="absolute right-[0.5em] top-1/2 h-[0.25em] w-[1.5em] -translate-y-1/2 rounded-full bg-[hsl(0,0%,50%)] shadow-[inset_0px_2px_1px_0px_hsl(0,0%,40%)]"></div>
			<input
				className="peer h-full w-full opacity-0"
				id="theme-toggle"
				name="theme-toggle"
				type="checkbox"
				checked={darkMode}
				onChange={toggleTheme}
			/>
			<span className="absolute left-[0.25em] top-1/2 flex h-[2.5em] w-[2.5em] -translate-y-1/2 items-center justify-center rounded-full bg-[rgb(26,26,26)] shadow-[inset_4px_4px_4px_0px_rgba(64,64,64,0.25),inset_-4px_-4px_4px_0px_rgba(16,16,16,0.5)] duration-300 transform-gpu peer-checked:left-[calc(100%-2.75em)]">
				<span className="relative h-full w-full rounded-full">
					<span className="absolute inset-[0.1em] rounded-full border-[1px] border-[hsl(0,0%,50%)]"></span>
				</span>
			</span>
		</label>
	);
}
