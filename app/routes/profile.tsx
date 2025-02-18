import type { Route } from "./+types/signin";
import getUserFromToken from "~/services/api/TokenService";


export function meta({}: Route.MetaArgs) {
	return [
		{ title: "GreenForge - Perfil" },
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

type Props = {
	children: React.ReactNode;
};

export default function Profile({  }: Props) {
	const currentUser = getUserFromToken();

	return (
		<>
		</>
	);
}
