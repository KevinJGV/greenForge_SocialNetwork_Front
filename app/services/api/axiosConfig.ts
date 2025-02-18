import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:9091/api",
    headers: {
        "Content-Type": "application/json",
    },
})

api.interceptors.request.use((config) => {
	const token = localStorage.getItem("tkn");
	if (token) {
		config.headers.Authorization = `Bearer ${token}`;
	}
	return config;
});

api.interceptors.response.use(
	(response) => response,
	(error) => {
		if (error.response && error.response.status === 401) {
			localStorage.removeItem("tkn");
			window.location.href = "/signin";
		}
		return Promise.reject(error);
	}
);

export default api;	