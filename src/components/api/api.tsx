import axios from "axios";
import {UserType} from "../../redux/redux-store";

type ItemsApiPropsType = {
    items: UserType[]
    totalCount: number
}
export const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "1e9519c8-eb9a-4811-b847-4ddb840b0506"
    }
})


export const getUsers = (currentPageNo = 1, pageSize = 5) => {
    return instance.get<ItemsApiPropsType>(`/users?page=${currentPageNo}&count=${pageSize}`, {
        withCredentials: true
    }).then(response => response.data)
}

export const getCertainUserProfile = (userId: string | undefined = '2') => {
    return (instance.get<any>(`profile/` + userId))
}

export const getAuthorized = () => {
    return instance.get<any>(`auth/me`, {
        withCredentials: true
    }).then(response => response.data)
}

export const getUnsubscribed = (userId: number | undefined = undefined) => {
    return (instance.delete<any>(`follow/${userId}`)).then(response => response.data)
}

export const getSubscribed = (userId: number | undefined = undefined) => {
    return (instance.post<any>(`follow/${userId}`)).then(response => response.data)
}