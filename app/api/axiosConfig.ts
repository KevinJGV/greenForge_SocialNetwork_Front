import axios from "axios";

const apiJson = axios.create({
    baseURL: "http://localhost:9091/api",
    headers: {
        "Content-Type": "application/json",
    },
})

const apiForm = axios.create({
	baseURL: "http://localhost:9091/api"
});

[apiForm, apiJson].forEach(api => {
    api.interceptors.request.use((config) => {
		const token = localStorage.getItem("token");
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	});

    api.interceptors.response.use(
		(response) => response,
		(error) => {
			if (error.response && error.response.status === 401) {				
				localStorage.removeItem("token");
				window.location.href = "/signin";
			}
			return Promise.reject(error);
		}
	);
})

export { apiJson, apiForm };