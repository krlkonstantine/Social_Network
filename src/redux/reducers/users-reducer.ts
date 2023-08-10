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

// export type FollowAT = ReturnType<typeof follow>
// export type UnfollowAT = ReturnType<typeof unfollow>
export type ToggleFollow = ReturnType<typeof toggleFollow>
export type SetAT = ReturnType<typeof setUsers>
export type setCurrentPageAT = ReturnType<typeof setCurrentPage>
export type ToggleFollowingProgressAT = ReturnType<typeof toggleFollowingProgress>

// const FOLLOW = 'social-network/users/FOLLOW'
// const UNFOLLOW = 'social-network/users/UNFOLLOW'
const TOGGLE_FOLLOW = 'social-network/users/TOGGLE-FOLLOW'
const SET_USERS = 'social-network/users/SET-USERS'
const SET_CURRENT_PAGE = 'social-network/users/SET-CURRENT-PAGE'
const FOLLOW_PROGRESS = 'social-network/users/TOGGLE_IS_FOLLOWING_PROGRESS'


export const usersReducer = (state: InitialStateType = initialState,
                             action: ActionType): InitialStateType => {
    switch (action.type) {
        /*case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => String(user.id) === action.userID ? {...user, followed: true} : user)
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => String(user.id) === action.userID ? {...user, followed: false} : user)
            }*/
        case TOGGLE_FOLLOW:
            return {
                ...state,
                users: state.users.map(user => String(user.id) === action.userID ? {
                    ...user,
                    followed: !action.followed
                } : user)
            }
        case SET_USERS:
            return {...action.initialState}
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case FOLLOW_PROGRESS:
            return {
                ...state,
                followingProgress: action.isFetching ? [...state.followingProgress, action.userId]
                    : [...state.followingProgress.filter(id => id !== action.userId)]
            }
        default:
            return state
    }
}

// export const follow = (userID: string) => ({type: FOLLOW, userID} as const)
// export const unfollow = (userID: string) => ({type: UNFOLLOW, userID} as const)
export const toggleFollow = (userID: string, followed: boolean) => ({type: TOGGLE_FOLLOW, userID, followed} as const)
export const setUsers = (initialState: InitialStateType) => ({type: SET_USERS, initialState} as const)
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
export const toggleFollowingProgress = (isFetching: boolean, userId: string) => {
    return {type: FOLLOW_PROGRESS, isFetching, userId} as const
}

export const loadUsers = (page: number) => async (dispatch: Dispatch<ActionType>) => {
    dispatch(setCurrentPage(page))
    dispatch(changePreloaderStatus(true))
    const res = await usersAPI.getUsers(page)
    dispatch(setUsers({
        users: res.items,
        pageSize: res.items.length,
        totalUsersCount: res.totalCount,
        currentPage: page,
        followingProgress: []
    }))
    dispatch(changePreloaderStatus(false))
}

// export const followUser = (userId: string) => async (dispatch: Dispatch<ActionType>) => {
//     dispatch(toggleFollowingProgress(true, userId))
//     dispatch(changePreloaderStatus(true))
//     const res = await usersAPI.follow(userId)
//     if (res.resultCode === 0) {
//         dispatch(follow(userId))
//     }
//     dispatch(toggleFollowingProgress(false, userId))
//     dispatch(changePreloaderStatus(false))
// }
//
// export const unfollowUser = (userId: string) => async (dispatch: Dispatch<ActionType>) => {
//     dispatch(toggleFollowingProgress(true, userId))
//     dispatch(changePreloaderStatus(true))
//     const res = await usersAPI.unfollow(userId)
//     if (res.resultCode === 0) {
//         dispatch(unfollow(userId))
//     }
//     dispatch(toggleFollowingProgress(false, userId))
//     dispatch(changePreloaderStatus(false))
// }

export const toggleFollowUser = (userId: string, followed: boolean) => async (dispatch: Dispatch<ActionType>) => {
    dispatch(toggleFollowingProgress(true, userId))
    dispatch(changePreloaderStatus(true))
    const res = followed ? await usersAPI.unfollow(userId) : await usersAPI.follow(userId)
    if (res.resultCode === 0) {
        dispatch(toggleFollow(userId, followed))
    }
    dispatch(toggleFollowingProgress(false, userId))
    dispatch(changePreloaderStatus(false))
}