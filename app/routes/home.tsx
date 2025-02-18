import type { Route } from "./+types/signin";
import PostList from '../components/postList';

type Props = {
	children: React.ReactNode;
	username?:String; 
};

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

export default function Home({ username } : Props) {
	const getGreeting = () => {
		const hour = new Date().getHours();

		if (hour >= 4 && hour < 12) {
			return `Buenos Días, ${username}`;
		} else if (hour >= 12 && hour < 18) {
			return `Buenas Tardes, ${username}`;
		} else {
			return `Buenas Noches, ${username}`;
		}
	};


	return (
		<>
			<h2 className="text-3xl font-bold mb-6">{getGreeting()}</h2>	
			<PostList />
		</>
	);
}
