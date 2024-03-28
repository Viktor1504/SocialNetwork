import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true
})

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(res => res.data)
    }
}

export const subscriptionsAPI = {
    follow(userId: string) {
        return instance.post(`follow/${userId}`).then(res => res.data)
    },
    unfollow(userId: string) {
        return instance.delete(`follow/${userId}`).then(res => res.data)
    }
}
