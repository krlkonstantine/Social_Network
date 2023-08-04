import {ActionType} from "../store";
import {Dispatch} from "redux";
import {getAuthUser} from "./auth-reducer";

export type AppReducerType = {
    initialized: boolean
}
export type SetInitializedType = ReturnType<typeof setInitialized>

const initState: AppReducerType = {
    initialized: false
}

export const appReducer = (state = initState, action: ActionType): AppReducerType => {
    switch (action.type) {
        case "SET-INITIALIZED":
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

export const setInitialized = () => ({type: 'SET-INITIALIZED'} as const)

export const initializeApp = () => {
    return (dispatch: Dispatch) => {
        // @ts-ignore
        const promise = dispatch(getAuthUser())
        promise.then(() => {
            dispatch(setInitialized())
        })
    }
}

