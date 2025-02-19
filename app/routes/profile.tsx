import { useOutletContext } from "react-router";
import type { Route } from "./+types/profile";
import type ShortUserDTO from "~/services/api/DTO/ShortUserDTO";
import PostList from "~/components/postList";


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
	
return (
	<>
	</>
);
}
