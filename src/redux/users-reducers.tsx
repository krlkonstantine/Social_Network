import React from 'react';
import {UserType} from "./redux-store";

const FOLLOW = 'FOLLOW-THIS-USER'
const UNFOLLOW = 'UNFOLLOW-THIS-USER'
const SET_USERS = 'SET_USERS'

export type InitialUsersStateType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPageNo: number
}

const initialUsersState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 25,
    currentPageNo: 1
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
        default:
            return state
    }
}

export type UserReducerType = FollowUserACType | UnFollowUserACType | setUsersACType

type FollowUserACType = ReturnType<typeof followUserAC>

export const followUserAC = (userId: number) => {
    return {
        type: FOLLOW,
        payload: {
            userId
        }
    } as const
}

type UnFollowUserACType = ReturnType<typeof unFollowUserAC>
export const unFollowUserAC = (userId: number) => {
    return {
        type: UNFOLLOW,
        payload: {
            userId
        }
    } as const
}

type setUsersACType = ReturnType<typeof setUsersAC>

export const setUsersAC = (users: UserType[]) => {
    return {
        type: SET_USERS,
        payload: {
            users
        }
    } as const
}


export default usersReducer