import {
	type RouteConfig,
	index,
	layout,
	route,
} from "@react-router/dev/routes";
import { redirect } from "react-router";

export default [
	layout("layouts/initSession.tsx", [
		route("/signin", "routes/signin.tsx"),
		route("/signup", "routes/signup.tsx"),
	]),

	layout("layouts/homeLayout.tsx", [
		route("/home", "routes/home.tsx"),
		route("/notifications", "routes/notifications.tsx"),
		route("/profile", "routes/profile.tsx"),
	]),
] as RouteConfig;
