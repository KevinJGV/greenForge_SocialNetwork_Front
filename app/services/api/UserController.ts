import {api} from "./axiosConfig"
import type FollowDTO from "./DTO/FollowDTO";
import type ShortUserDTO from "./DTO/ShortUserDTO";

const baseURL = "/user";

export function getUser(username:string) {
    return api.get(baseURL + `/${username}`)
}

export function updateUser(data:ShortUserDTO) {
    return api.put(baseURL,data);
}

export function setFollow(data:FollowDTO) {
    return api.post(baseURL + `/follow`,data);
}