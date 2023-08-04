import {ActionType} from "../store";
import {Dispatch} from "redux";

export type ChangePreloaderStatusType = ReturnType<typeof changePreloaderStatus>
export type PreloaderStateType = {
    preloader: boolean
}

const initialState: PreloaderStateType = {
    preloader: false
}

export const preloaderReducer = (state = initialState, action: ActionType): PreloaderStateType => {
    // debugger
    switch (action.type) {
        case "CHANGE-PRELOADER-STATUS":
            return {
                ...state,
                preloader: action.newStatus
            }
        default: return state;
    }
}

export const changePreloaderStatus = (newStatus: boolean) => ({type: 'CHANGE-PRELOADER-STATUS', newStatus} as const)
