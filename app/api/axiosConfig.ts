import axios from "axios";

const apiJson = axios.create({
    baseURL: "https://localhost:9091/api",
    headers: {
        "Content-Type": "application/json",
    },
})

const apiForm = axios.create({
	baseURL: "https://localhost:9091/api",
	headers: {
		"Content-Type": "multipart/form-data",
	},
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