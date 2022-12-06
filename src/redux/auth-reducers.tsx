import React from 'react';

const SET_USER_DATA = 'SET-USER-DATA'


export type InitialAuthStateType = {
    email: string
    id: number
    login: string
    isAuth: boolean

}

const initialAuthState = {
    email: "",
    id: 1,
    login: "",
    isAuth: false

}

export const authReducer = (state: InitialAuthStateType = initialAuthState, action: AuthReducerType): InitialAuthStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.usrData,
                isAuth: true
            }
        default:
            return state
    }
}

export type AuthReducerType = SetUserDataACType


type SetUserDataACType = ReturnType<typeof setAuthUserDataAC>

export const setAuthUserDataAC = (email: string, id: number, login: string) => {
    return {
        type: SET_USER_DATA,
        usrData: {
            email,
            id,
            login
        }
    } as const
}

