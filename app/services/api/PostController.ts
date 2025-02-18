import {api} from "./axiosConfig";
import type CommentDTO from "./DTO/CommentDTO";
import type LikeDTO from "./DTO/LikeDTO";
import type PostDTO from "./DTO/PostDTO";
import type ShortUserDTO from "./DTO/ShortUserDTO";

const baseURL = "/post"

export async function getPosts() {
    return api.get(baseURL);
}

export function getPostsByUsername(username: string) {
    return api.get(baseURL +`/${username}`);
}

export function updatePost(data: PostDTO) {
    return api.put(baseURL, data)
};

export function setPost(data: ShortUserDTO) {
    return api.post(baseURL, data);
} 

export function deletePost(id: number) {
    return api.delete(baseURL + `/${id}`);
}

export function toggleLike(data:LikeDTO) {
    return api.post(baseURL + "/like",data);
}

export function setComment(data:CommentDTO) {
    return api.post(baseURL, data);
}