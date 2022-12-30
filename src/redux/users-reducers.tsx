import React from 'react';
import {UserType} from "./redux-store";
import {getUsers} from "../components/api/api";

const FOLLOW = 'FOLLOW-THIS-USER'
const UNFOLLOW = 'UNFOLLOW-THIS-USER'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_FOLLOWING = 'TOGGLE_FOLLOWING_IN_PROGRESS'


export type InitialUsersStateType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPageNo: number
    isFetching: boolean
    isFollowing: number[]
}

const initialUsersState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPageNo: 1,
    isFetching: false,
    isFollowing: [] as Array<number>,
}

const usersReducer = (state: InitialUsersStateType = initialUsersState, action: UserReducerType): InitialUsersStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(el => el.id === action.payload.userId ? {...el, followed: true} : el)
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(el => el.id === action.payload.userId ? {...el, followed: false} : el)
            }
        case SET_USERS:
            return {...state, users: [...action.payload.users]}
        case SET_CURRENT_PAGE:
            return {...state, currentPageNo: action.payload.newCurrentPage}
        case SET_TOTAL_COUNT:
            return {...state, totalUsersCount: action.payload.totalCount}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.payload.isFetching}
        case TOGGLE_FOLLOWING:
            debugger
            return {
                ...state,
                isFollowing: action.payload.isFetching
                    ? [...state.isFollowing, action.payload.userId]
                    : state.isFollowing.filter(id => id !== action.payload.userId)
            }
        default:
            return state
    }
}

export type UserReducerType = FollowUserACType
    | UnFollowUserACType
    | setUsersACType
    | setCurrentPageACType
    | setTotalCountACType
    | toggleFetchingACType
    | toggleFollowingACType

type FollowUserACType = ReturnType<typeof followUser>
type setUsersACType = ReturnType<typeof setUsers>
type UnFollowUserACType = ReturnType<typeof unFollowUser>
type setCurrentPageACType = ReturnType<typeof setCurrentPage>
type setTotalCountACType = ReturnType<typeof setTotalCount>
type toggleFetchingACType = ReturnType<typeof setToggleFetching>
type toggleFollowingACType = ReturnType<typeof setToggleFollowingAC>

export const getUsersThunkCreator = (currentPageNo: number, pageSize: number) => {
    return (dispatch: any) => {
        dispatch(setToggleFetching(true))
        getUsers(currentPageNo, pageSize).then(data => {
                dispatch(setToggleFetching(false))
                dispatch(setUsers(data.items))
                dispatch(setTotalCount(data.totalCount))
            }
        )
    }
}

export const followUser = (userId: number) => {
    return {
        type: FOLLOW,
        payload: {
            userId
        }
    } as const
}
export const unFollowUser = (userId: number) => {
    return {
        type: UNFOLLOW,
        payload: {
            userId
        }
    } as const
}
export const setUsers = (users: UserType[]) => {
    return {
        type: SET_USERS,
        payload: {
            users
        }
    } as const
}
export const setCurrentPage = (newCurrentPage: number) => {
    return {
        type: SET_CURRENT_PAGE,
        payload: {
            newCurrentPage
        }
    } as const
}
export const setTotalCount = (totalCount: number) => {
    return {
        type: SET_TOTAL_COUNT,
        payload: {
            totalCount
        }
    } as const
}
export const setToggleFetching = (isFetching: boolean) => {
    return {
        type: TOGGLE_IS_FETCHING,
        payload: {
            isFetching
        }
    } as const
}
export const setToggleFollowingAC = (isFetching: boolean, isFollowing: number[], userId: number) => {
    return {
        type: TOGGLE_FOLLOWING,
        payload: {
            isFetching,
            isFollowing,
            userId,
        }
    } as const
}

export default usersReducer