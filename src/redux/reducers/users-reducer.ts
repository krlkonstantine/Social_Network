import {UserType} from "../../components/Users/Users";
import {ActionType} from "../store";
import {usersAPI} from "../../api/api";
import {Dispatch} from "redux";
import {changePreloaderStatus} from "./preloaderReducer";

export type InitialStateType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    followingProgress: string[]
}
const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 20,
    currentPage: 1,
    followingProgress: []
}

export type FollowAT = ReturnType<typeof follow>
export type UnfollowAT = ReturnType<typeof unfollow>
export type SetAT = ReturnType<typeof setUsers>
export type setCurrentPageAT = ReturnType<typeof setCurrentPage>
export type ToggleFollowingProgressAT = ReturnType<typeof toggleFollowingProgress>

export const usersReducer = (state: InitialStateType = initialState,
                             action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(user => String(user.id) === action.userID ? {...user, followed: true} : user)
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(user => String(user.id) === action.userID ? {...user, followed: false} : user)
            }
        case "SET-USERS":
            return {...action.initialState}
        case "SET-CURRENT-PAGE":
            return {
                ...state,
                currentPage: action.currentPage
            }
        case "TOGGLE_IS_FOLLOWING_PROGRESS":
            return {
                ...state,
                followingProgress: action.isFetching ? [...state.followingProgress, action.userId]
                    : [...state.followingProgress.filter(id => id !== action.userId)]
            }
        default:
            return state
    }
}

export const follow = (userID: string) => ({type: 'FOLLOW', userID} as const)
export const unfollow = (userID: string) => ({type: 'UNFOLLOW', userID} as const)
export const setUsers = (initialState: InitialStateType) => ({type: 'SET-USERS', initialState} as const)
export const setCurrentPage = (currentPage: number) => ({type: 'SET-CURRENT-PAGE', currentPage} as const)
export const toggleFollowingProgress = (isFetching: boolean, userId: string) => {
    return {type: 'TOGGLE_IS_FOLLOWING_PROGRESS', isFetching, userId} as const
}

export const getUsers = (currentPage: number) => (dispatch: Dispatch<ActionType>) => {
    dispatch(setCurrentPage(currentPage))
    dispatch(changePreloaderStatus(true))
    usersAPI.getUsers(currentPage)
        .then(data => {
            dispatch(setUsers({
                users: data.items,
                pageSize: data.items.length,
                totalUsersCount: data.totalCount,
                currentPage: currentPage,
                followingProgress: []
            }))
        })
        .finally(() => dispatch(changePreloaderStatus(false)))
}
export const followUser = (userId: string) => (dispatch: Dispatch<ActionType>) => {
    dispatch(toggleFollowingProgress(true, userId))
    dispatch(changePreloaderStatus(true))
    usersAPI.follow(userId)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(follow(userId))
            }
            dispatch(toggleFollowingProgress(false, userId))
        })
        .finally(() => dispatch(changePreloaderStatus(false)))
}
export const unfollowUser = (userId: string) => (dispatch: Dispatch<ActionType>) => {
    dispatch(toggleFollowingProgress(true, userId))
    dispatch(changePreloaderStatus(true))
    usersAPI.unfollow(userId)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollow(userId))
            }
            dispatch(toggleFollowingProgress(false, userId))
        })
        .finally(() => dispatch(changePreloaderStatus(false)))
}