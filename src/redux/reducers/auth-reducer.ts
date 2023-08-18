import {ActionType} from "../store";
import {authAPI, securityAPI} from "../../api/api";
import {AnyAction, Dispatch} from "redux";
import {stopSubmit} from "redux-form";
import {changePreloaderStatus} from "./preloaderReducer";
import {ThunkDispatch} from "redux-thunk";
import {ApiUserProfileType} from "./profile-reducer";

export type AuthStateType = {
    userId: string | null
    email: string | null
    login: string | null
    isAuth: boolean
    isOwner: boolean
    captchaURL: string | null
}
export type SetUserDataAT = ReturnType<typeof setAuthUserData>
export type SetCaptchaAT = ReturnType<typeof getCaptchaURLSuccess>

const SET_USER_DATA = 'social-network/auth/SET_USER_DATA'
const SET_CAPTCHA_URL = 'social-network/auth/SET_CAPTCHA_URL'

const initState: AuthStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isOwner: false,
    captchaURL: null //if null, then captcha is not required

}

export const authReducer = (state = initState, action: ActionType): AuthStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        case SET_CAPTCHA_URL :
            debugger
            return {

                ...state,
                captchaURL: action.payload.captchaURL
            }
        default:
            return state
    }
}

export const setAuthUserData = (userId: string | null, email: string | null, login: string | null, isAuth: boolean) => (
    {type: SET_USER_DATA, payload: {userId, email, login, isAuth}} as const
)
export const getCaptchaURLSuccess = (captchaURL: string) => (
    {type: SET_CAPTCHA_URL, payload: {captchaURL}} as const
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
export const login = (email: string, password: string, rememberMe: boolean, captchaURL?: string | null) => {
    return async (dispatch: ThunkDispatch<ApiUserProfileType, unknown, AnyAction>) => {
        dispatch(changePreloaderStatus(true))
        const res = await authAPI.login(email, password, rememberMe, captchaURL)
        if (res.resultCode === 0) {
            // @ts-ignore
            dispatch(getAuthUser())
        } else if (res.resultCode === 10) {
            await dispatch(getCaptchaURL())
        } else {
            const errorMessage = res.messages.length > 0 ? res.messages[0] : 'Some error'
            dispatch(stopSubmit('login', {_error: errorMessage}))
        }
        dispatch(changePreloaderStatus(false))
    }
}
export const getCaptchaURL = () => {
    return async (dispatch: Dispatch<ActionType>) => {
        debugger
        dispatch(changePreloaderStatus(true))
        const res = await securityAPI.getCaptchaURL()
        dispatch(getCaptchaURLSuccess(res.url))
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