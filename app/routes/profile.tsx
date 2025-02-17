import type { Route } from "./+types/signin";

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
