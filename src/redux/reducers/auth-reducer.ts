import {ActionType} from "../store";
import {authAPI} from "../../api/api";
import {Dispatch} from "redux";
import {stopSubmit} from "redux-form";
import {changePreloaderStatus} from "./preloaderReducer";

export type AuthStateType = {
    userId: string | null
    email: string | null
    login: string | null
    isAuth: boolean
    isOwner: boolean
}
export type SetUserDataAT = ReturnType<typeof setAuthUserData>

const SET_USER_DATA = 'social-network/auth/SET_USER_DATA'

const initState: AuthStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isOwner: false

}

export const authReducer = (state = initState, action: ActionType): AuthStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

export const setAuthUserData = (userId: string | null, email: string | null, login: string | null, isAuth: boolean) => (
    {type: SET_USER_DATA, payload: {userId, email, login, isAuth}} as const
)

export const getAuthUser = () => {
    return async (dispatch: Dispatch<ActionType>) => {
        dispatch(changePreloaderStatus(true))
        const res = await authAPI.me()
        if (res.resultCode === 0) {
            const {id, login, email} = res.data
            dispatch(setAuthUserData(id, email, login, true))
        }
        dispatch(changePreloaderStatus(false))

    }
}
export const login = (email: string, password: string, rememberMe: boolean) => {
    return async (dispatch: Dispatch<ActionType>) => {
        dispatch(changePreloaderStatus(true))
        const res = await authAPI.login(email, password, rememberMe)
        if (res.resultCode === 0) {
            // @ts-ignore
            dispatch(getAuthUser())
        } else {
            const errorMessage = res.messages.length > 0 ? res.messages[0] : 'Some error'
            dispatch(stopSubmit('login', {_error: errorMessage}))
        }
        dispatch(changePreloaderStatus(false))
    }
}
export const logout = () => {
    return async (dispatch: Dispatch) => {
        dispatch(changePreloaderStatus(true))
        const res = await authAPI.logout()
        if (res.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
        dispatch(changePreloaderStatus(false))
    }
}