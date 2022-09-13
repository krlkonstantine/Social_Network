import React from 'react';
import {UserType} from "./redux-store";

type InitialUsersState = Array<UserType>
const FOLLOW = 'FOLLOW-THIS-USER'
const UNFOLLOW = 'UNFOLLOW-THIS-USER'
const SET_USERS = 'SET_USERS'

type InitialUsersStateType = {
    users: UserType[]
}

const initialUsersState ={
    users:[]
}




const usersReducer = (state: InitialUsersStateType = initialUsersState, action: UserReducerType): InitialUsersStateType => {
    switch (action.type) {
        case FOLLOW:
            return {...state,users : state.users.map(el=>el.userId===action.payload.userId ? {...el,userFollowed:true} : el)}
        case UNFOLLOW:
            return {...state, users: state.users.map(el=>el.userId===action.payload.userId? {...el,userFollowed:false} : el )}
        case SET_USERS:
            return {...state, users : {...state.users, ...action.payload.users}}
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