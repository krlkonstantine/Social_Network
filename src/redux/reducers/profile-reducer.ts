import {v1} from "uuid";
import {ActionType, ProfilePagePropsType} from "../store";
import {ProfileType} from "../../components/main/ProfilePage/Profile";
import {profileAPI} from "../../api/api";
import {Dispatch} from "redux";
import {changePreloaderStatus} from "./preloaderReducer";

export type AddPostAT = ReturnType<typeof addPostActionCreator>
export type DeletePostAT = ReturnType<typeof deletePostActionCreator>
export type setUserProfileAT = ReturnType<typeof setUserProfile>
export type setUserStatusAT = ReturnType<typeof setUserStatus>

const ADD_POST = 'social-network/profile/ADD-POST'
const DELETE_POST = 'social-network/profile/DELETE-POST'
const SET_USER_STATUS = 'social-network/profile/SET-USER-STATUS'
const SET_USER_PROFILE = 'social-network/profile/SET-USER-PROFILE'

const initialState: ProfilePagePropsType = {
    profile: null,
    posts: [
        {_id: v1(), title: 'Post 3', descr: "This is post about my jobs..."},
        {_id: v1(), title: 'Post 2', descr: "This is post about my family..."},
        {_id: v1(), title: 'Post 1', descr: "This is first post about me..."},
    ],
    status: ''
}

export const profileReducer = (state: ProfilePagePropsType = initialState, action: ActionType): ProfilePagePropsType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                _id: v1(),
                title: `Post ${state.posts.length + 1}`,
                descr: action.textNewPost
            }
            return {
                ...state,
                posts: [newPost, ...state.posts],
            }
        }
        case DELETE_POST: {
            return {...state, posts: state.posts.filter((post) => post._id !== action.postId)}
        }
        case SET_USER_STATUS: {
            return {...state, status: action.status}
        }
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        default:
            return state
    }
}

export const addPostActionCreator = (textNewPost: string) => ({type: ADD_POST, textNewPost: textNewPost} as const)
export const deletePostActionCreator = (postId: string) => ({type: DELETE_POST, postId} as const)
export const setUserStatus = (status: string) => ({type: SET_USER_STATUS, status} as const)
export const setUserProfile = (profile: ProfileType) => ({type: SET_USER_PROFILE, profile} as const)

export const getProfile = (userId: string) => async (dispatch: Dispatch<ActionType>) => {
    dispatch(changePreloaderStatus(true))
    const res = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(res))
    dispatch(changePreloaderStatus(false))
}
export const getStatus = (userId: string) => async (dispatch: Dispatch<ActionType>) => {
    dispatch(changePreloaderStatus(true))
    const res = await profileAPI.getStatus(userId)
    dispatch(setUserStatus(res))
    dispatch(changePreloaderStatus(false))
}
export const updateStatus = (status: string) => async (dispatch: Dispatch<ActionType>) => {
    dispatch(changePreloaderStatus(true))
    const res = await profileAPI.updateStatus(status)
    if (res.resultCode === 0) dispatch(setUserStatus(status))
    dispatch(changePreloaderStatus(false))
}

