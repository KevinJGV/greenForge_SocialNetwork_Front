import type { Route } from "./+types/home";
import PostList from '../components/postList';
import { useOutletContext } from "react-router";
import type ShortUserDTO from "~/services/api/DTO/ShortUserDTO";



export function meta({}: Route.MetaArgs) {
	return [
		{ title: "GreenForge" },
		{
			name: "description",
			content: "Homepage",
		},
		{
			description: "Homepage",
		},
		{ robots: "noindex, nofollow" },
	];
}

type OutletContextType = {
	currentUser: ShortUserDTO | undefined;
};

export default function Home() {	
	const { currentUser } = useOutletContext<OutletContextType>();
	const getGreeting = () => {
		const hour = new Date().getHours();

		if (hour >= 4 && hour < 12) {
			return `Buenos Días, ${currentUser?.$username}`;
		} else if (hour >= 12 && hour < 18) {
			return `Buenas Tardes, ${currentUser?.$username}`;
		} else {
			return `Buenas Noches, ${currentUser?.$username}`;
		}
	};


	return (
		<>
			<h2 className="text-3xl font-bold mb-6">{getGreeting()}</h2>	
			<PostList />
		</>
	);
}
