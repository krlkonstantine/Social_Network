import React from 'react';
import { PostsTextsType, ProfilePageType} from "./store";

const ADD_NEW_POST = 'ADD-NEW-POST'
const UPD_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initProfileState: ProfilePageType = {
    posts: [
        {id: 1, messageText: "Hello everybody!", likeCount: '15'},
        {id: 2, messageText: "Is anybody here?", likeCount: '15'},
        {id: 3, messageText: "Here's the first post o.O!", likeCount: '20'},
    ],
        newPostText: "it-kamasutra.com"
}

const profileReducer = (state: ProfilePageType = initProfileState, action: ProfileReducerType) => {

    if (action.type === ADD_NEW_POST) {
        let newPost: PostsTextsType = {id: 4, messageText: state.newPostText, likeCount: '0'}
        state.posts.push(newPost)
        state.newPostText = ""
    } else if (action.type === UPD_NEW_POST_TEXT) {
        state.newPostText = action.newPostText
    }
    return state
}
export type ProfileReducerType = addPostACType | updNewPostTextACType

type addPostACType = ReturnType<typeof addPostAC>

export const addPostAC = () => {
    return {
        type: ADD_NEW_POST
    } as const
}
type updNewPostTextACType = ReturnType<typeof updNewPostTextAC>

export const updNewPostTextAC = (value:string) => {
    return {
        type: UPD_NEW_POST_TEXT,
        newPostText: value
    } as const
}

export default profileReducer