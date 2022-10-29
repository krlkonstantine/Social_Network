import React from 'react';
import {UserType} from "./redux-store";

const FOLLOW = 'FOLLOW-THIS-USER'
const UNFOLLOW = 'UNFOLLOW-THIS-USER'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'


export type InitialUsersStateType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPageNo: number
}

const initialUsersState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 26,
    currentPageNo: 5
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
            return {...state, users: [...state.users, ...action.payload.users]}
       case SET_CURRENT_PAGE:
            return {...state, currentPageNo : action.payload.newCurrentPage}
        default:
            return state
    }
}

export type UserReducerType = FollowUserACType | UnFollowUserACType | setUsersACType | setCurrentPageACType

type FollowUserACType = ReturnType<typeof followUserAC>
type setUsersACType = ReturnType<typeof setUsersAC>
type UnFollowUserACType = ReturnType<typeof unFollowUserAC>
type setCurrentPageACType = ReturnType<typeof setCurrentPageAC>

export const followUserAC = (userId: number) => {
    return {
        type: FOLLOW,
        payload: {
            userId
        }
    } as const
}
export const unFollowUserAC = (userId: number) => {
    return {
        type: UNFOLLOW,
        payload: {
            userId
        }
    } as const
}
export const setUsersAC = (users: UserType[]) => {
    return {
        type: SET_USERS,
        payload: {
            users
        }
    } as const
}
export const setCurrentPageAC = (newCurrentPage: number) => {
    return {
        type: SET_CURRENT_PAGE,
        payload: {
            newCurrentPage
        }
    } as const
}


export default usersReducer