import {v1} from "uuid";
import {ActionType, ProfilePagePropsType} from "../store";
import {ProfilePropsType, ProfileType} from "../../components/main/ProfilePage/Profile";
import {profileAPI} from "../../api/api";
import {AnyAction, Dispatch} from "redux";
import {changePreloaderStatus} from "./preloaderReducer";
import {ThunkDispatch} from "redux-thunk";
import {AppStateType} from "../redux-store";
import {stopSubmit} from "redux-form";

export type AddPostAT = ReturnType<typeof addPostActionCreator>
export type DeletePostAT = ReturnType<typeof deletePostActionCreator>
export type setUserStatusAT = ReturnType<typeof setUserStatus>
export type setUserProfileAT = ReturnType<typeof setUserProfile>
export type setUserProfilePhotoAT = ReturnType<typeof savePhotoSuccess>

export type ProfilePageType = {
    title: string
    descForNewPost: string
    posts: Array<PostType>
    profile: ApiUserProfileType
    status: string
}
export type PostType = {
    //userId: number | null
    //isPublished: boolean
    _id: string
    title: string
    descr: string
}
export type PhotoType = {
    small: string | null
    large: string | null
}
export type ApiUserProfileType = {
    aboutMe: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    contacts: {
        github: string | null
        vk: string | null
        facebook: string | null
        instagram: string | null
        twitter: string | null
        website: string | null
        youtube: string | null
        mainLink: string | null
    }
    followed: boolean
    uniqueUrlName: string
    fullName: string
    userId: number | null
    photos: PhotoType
}

const ADD_POST = 'social-network/profile/ADD-POST'
const DELETE_POST = 'social-network/profile/DELETE-POST'
const SET_USER_STATUS = 'social-network/profile/SET-USER-STATUS'
const SET_USER_PROFILE = 'social-network/profile/SET-USER-PROFILE'
const SET_USER_PROFILE_PHOTO = 'social-network/profile/SET-USER-PROFILE-PHOTO'


const initialState: ProfilePageType = {
    title: "My posts",
    posts: [
        {_id: v1(), title: 'Post 3', descr: "This is post about my jobs..."},
        {_id: v1(), title: 'Post 2', descr: "This is post about my family..."},
        {_id: v1(), title: 'Post 1', descr: "This is first post about me..."},
    ],
    descForNewPost: "",
    profile: {
        fullName: "",
        aboutMe: "",
        userId: null,
        photos: {
            small: "",
            large: "",
        },
        lookingForAJob: true,
        lookingForAJobDescription: "",
        contacts: {
            github: "",
            vk: "",
            facebook: "",
            instagram: "",
            twitter: "",
            website: "",
            youtube: "",
            mainLink: "",
        },
        followed: true,
        uniqueUrlName: "string"
    },
    status: "",
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionType): ProfilePageType => {
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
        case SET_USER_PROFILE_PHOTO: {
            return {...state, profile: {...state.profile, photos: action.photos}}
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
export const savePhotoSuccess = (photos: PhotoType) => ({
    type: SET_USER_PROFILE_PHOTO, photos
} as const)

export const getProfile = (userId: string | null) => async (dispatch: Dispatch<ActionType>) => {
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
export const uploadNewProfilePhoto = (photo: File) => async (dispatch: Dispatch<ActionType>) => {
    dispatch(changePreloaderStatus(true))
    const res = await profileAPI.uploadPhoto(photo)
    if (res.resultCode === 0)
        dispatch(savePhotoSuccess(res.data.photos))
    dispatch(changePreloaderStatus(false))
}
export const saveNewProfileInfo = (formData: ApiUserProfileType) => async (dispatch: ThunkDispatch<ApiUserProfileType, unknown, AnyAction>, getState: () => AppStateType) => {
    dispatch(changePreloaderStatus(true))
    const res = await profileAPI.updateProfileInfo(formData)
    if (res.resultCode === 0) {
        await dispatch(getProfile(getState().auth.userId))
    } else {
        debugger
        await dispatch(stopSubmit('profile', {
            _error: res.messages.length > 0 ? res.messages[0] : 'Some error occured'
        }))
        dispatch(changePreloaderStatus(false))
        return Promise.reject(res.messages[0])
    }
}

