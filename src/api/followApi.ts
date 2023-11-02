import {instance} from "./api";
import {ResponseType} from "../common/types/types";

export const followAPI = {
    follow(userId: number) {
        return instance.post<ResponseType>(`/follow/${userId}`, {})
    },
    unfollow(userId: number) {
        return instance.delete<ResponseType>(`/follow/${userId}`)
    }
}