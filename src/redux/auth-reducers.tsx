import React from 'react';

const SET_USER_DATA = 'SET-USER-DATA'


export type InitialAuthStateType = {
    id: number
    email: string
    login: string
    isAuth: boolean

}

const initialAuthState = {
    id: 1,
    email: "",
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

export const setAuthUserDataAC = (id: number, login: string, email: string) => {
    return {
        type: SET_USER_DATA,
        usrData: {
            id,
            login,
            email
        }
    } as const
}

