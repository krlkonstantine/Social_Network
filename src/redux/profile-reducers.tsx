import React from 'react';
import {PostsTextsType, ProfilePageType, ProfileType} from "./redux-store";

const ADD_NEW_POST = 'ADD-NEW-POST'
const UPD_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET-USER-PROFILE'

type InitialProfileStateType = ProfilePageType
let initProfileState: InitialProfileStateType = {
    posts: [
        {id: 1, messageText: "Hello everybody!", likeCount: '15'},
        {id: 2, messageText: "Is anybody here?", likeCount: '15'},
        {id: 3, messageText: "Well, let's meet each other!", likeCount: '20'},
        {id: 4, messageText: "Here's the first post o.O!", likeCount: '20'},
    ],
    newPostText: "it-kamasutra.com",
    userProfilePage :{
        aboutMe: "Pedro",
        fullName: "string",
        lookingForAJob: true,
        lookingForAJobDescription: "bigMoney!",
        photos: {
            large: "äsdasd",
            small: "string",
        },
        userId: 23
    }
}


const profileReducer = (state: InitialProfileStateType = initProfileState, action: ProfileReducerType): InitialProfileStateType => {
    switch (action.type) {
        case ADD_NEW_POST : {
            let newPost: PostsTextsType = {id: 4, messageText: state.newPostText, likeCount: '0'}
            if (state.newPostText) {
                return {...state, posts: [newPost, ...state.posts], newPostText: ""}
            } else return state
        }
        case UPD_NEW_POST_TEXT : {
            return {...state, newPostText: action.payload.value}
        }
        case SET_USER_PROFILE : {
            return {...state, userProfilePage: action.payload.profile}
        }
        default:
            return state
        /*if (action.type === ADD_NEW_POST) {
            let newPost: PostsTextsType = {id: 4, messageText: state.newPostText, likeCount: '0'}
            if (state.newPostText) {
                return{...state,posts:[newPost,...state.posts], newPostText: ""}
            }
        } else if (action.type === UPD_NEW_POST_TEXT) {
            return {...state, newPostText:action.payload.value}
        } else if (action.type === SET_USER_PROFILE) {
            return {...state, newPostText:action.payload.value}
        }
        return state*/
    }
}
export type ProfileReducerType = AddPostACType | UpdNewPostTextACType | setUserProfileACType

type AddPostACType = ReturnType<typeof addPostAC>

export const addPostAC = () => {
    return {
        type: ADD_NEW_POST
    } as const
}
type UpdNewPostTextACType = ReturnType<typeof updNewPostTextAC>

export const updNewPostTextAC = (value: string) => {
    return {
        type: UPD_NEW_POST_TEXT,
        payload: {
            value
        }
    } as const
}

type setUserProfileACType = ReturnType<typeof setUserProfile>

export const setUserProfile = (profile: ProfileType) => {
    return {
        type: SET_USER_PROFILE,
        payload: {
            profile
        }
    } as const
}

export default profileReducer