import axios from "axios";


export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "49f982f5-d203-4324-b145-d05d3387d5eb"
    }
})


export const usersAPI = {
    getUsers(currentPage: number) {
        return instance.get(`users?page=${currentPage}`)
            .then(response => response.data)
    },
    follow(userId: string) {
        return instance.post(`/follow/${userId}`)
            .then(response => response.data)
    },
    unfollow(userId: string) {
        return instance.delete(`/follow/${userId}`)
            .then(response => response.data)
    }
}

export const profileAPI = {
    getProfile(userId: string) {
        return instance.get(`profile/` + userId)
            .then(response => response.data)
    },
    getStatus(userId: string) {
        return instance.get(`profile/status/` + userId)
            .then(response => response.data)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status/`, {status: status})
            .then(response => response.data)
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    },
    login(email: string, password: string, rememberMe: boolean = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
            .then(response => response.data)
    },
    logout() {
        return instance.delete(`auth/login`)
            .then(response => response.data)
    }

}