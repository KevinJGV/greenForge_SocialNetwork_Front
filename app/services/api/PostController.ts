import { api, apiForm } from "./axiosConfig";
import type CommentDTO from "./DTO/CommentDTO";
import type LikeDTO from "./DTO/LikeDTO";
import type PostDTO from "./DTO/PostDTO";

const baseURL = "/post";

export async function getPosts() {
    return api.get(baseURL);
}

export function getPostsByUsername(username: string) {
    return api.get(baseURL + `/${username}`);
}

export function updatePost(data: PostDTO) {
    return api.put(baseURL, data);
}

export function setPost(data: PostDTO) {
    return api.post(baseURL, data);
}

export function deletePost(id: number) {
    return api.delete(baseURL + `/${id}`);
}

export function toggleLike(data: LikeDTO) {
    return api.post(baseURL + "/like", data);
}

export function setComment(data: CommentDTO) {
    return api.post(baseURL + "/comment", data);
}

export function checkUserInteractions(data: Object) {
    return api.get(baseURL, data);
}

export async function getPostsForm() {
    return apiForm.get(baseURL);
}

export function getPostsByUsernameForm(username: string) {
    return apiForm.get(baseURL + `/${username}`);
}

export function updatePostForm(data: PostDTO) {
    return apiForm.put(baseURL, data);
}

export function setPostForm(data: PostDTO) {
    return apiForm.post(baseURL, data);
}

export function deletePostForm(id: number) {
    return apiForm.delete(baseURL + `/${id}`);
}

export function toggleLikeForm(data: LikeDTO) {
    return apiForm.post(baseURL + "/like", data);
}

export function setCommentForm(data: CommentDTO) {
    return apiForm.post(baseURL + "/comment", data);
}

export function checkUserInteractionsForm(data: Object) {
    return apiForm.get(baseURL, data);
}
