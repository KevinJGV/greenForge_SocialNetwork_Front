import type { Route } from "./+types/notifications";

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

export default function Notifications({  }: Props) {

	return (
		<>
		</>
	);
}
