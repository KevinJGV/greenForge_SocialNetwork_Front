import { api, apiForm } from "./axiosConfig";
import type FollowDTO from "./DTO/FollowDTO";
import type ShortUserDTO from "./DTO/ShortUserDTO";

const baseURL = "/user";

export function getUser(username: string) {
    return api.get(baseURL + `/${username}`);
}

export function getUserForm(username: string) {
    return apiForm.get(baseURL + `/${username}`);
}

export function updateUser(data: ShortUserDTO) {
    return api.put(baseURL, data);
}

export function updateUserForm(data: ShortUserDTO) {
    return apiForm.put(baseURL, data);
}

export function setFollow(data: FollowDTO) {
    return api.post(baseURL + `/follow`, data);
}

export function setFollowForm(data: FollowDTO) {
    return apiForm.post(baseURL + `/follow`, data);
}