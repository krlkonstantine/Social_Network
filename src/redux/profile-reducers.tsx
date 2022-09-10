import React from 'react';
import {PostsTextsType, ProfilePageType} from "./redux-store";

const ADD_NEW_POST = 'ADD-NEW-POST'
const UPD_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

type InitialProfileStateType = ProfilePageType
let initProfileState: InitialProfileStateType = {
    posts: [
        {id: 1, messageText: "Hello everybody!", likeCount: '15'},
        {id: 2, messageText: "Is anybody here?", likeCount: '15'},
        {id: 3, messageText: "Here's the first post o.O!", likeCount: '20'},
    ],
    newPostText: "it-kamasutra.com"
}

const profileReducer = (state: InitialProfileStateType = initProfileState, action: ProfileReducerType): InitialProfileStateType => {

    if (action.type === ADD_NEW_POST) {
        let newPost: PostsTextsType = {id: 4, messageText: state.newPostText, likeCount: '0'}
        state.posts.unshift(newPost)
        state.newPostText = ""
    } else if (action.type === UPD_NEW_POST_TEXT) {
        state.newPostText = action.newPostText
    }
    return state
}
export type ProfileReducerType = AddPostACType | UpdNewPostTextACType

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
        newPostText: value
    } as const
}

export default profileReducer