import React from 'react';
import {UserType} from "./redux-store";

const SET_USER_DATA = 'SET-USER-DATA'
const UNFOLLOW = 'UNFOLLOW-THIS-USER'



export type InitialAuthStateType = {
    id: number
    email: string
    login: string
    isFetching: boolean
}

const initialAuthState = {
    id: 1,
    email: "",
    login: "",
    isFetching: false

}

export const authReducer = (state: InitialAuthStateType = initialAuthState, action: AuthReducerType): InitialAuthStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.usrData
            }

        default:
            return state
    }
}

export type AuthReducerType = SetUserDataACType


type SetUserDataACType = ReturnType<typeof setUserDataAC>

export const setUserDataAC = (id: number,email: string,login: string) => {
    return {
        type: SET_USER_DATA,
        usrData: {
            id,
            email,
            login
        }
    } as const
}

