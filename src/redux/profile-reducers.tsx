import React, {ChangeEvent, useState} from 'react';
import {ActionTypes, DialogsPageType, PostsTextsType, ProfilePageType, StoreType} from "./store";

const ADD_NEW_POST = 'ADD-NEW-POST'
const UPD_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const profileReducer = (state: ProfilePageType, action: ActionTypes) => {

    if (action.actionType === ADD_NEW_POST) {
        let newPost: PostsTextsType = {id: 4, messageText: state.newPostText, likeCount: '0'}
        state.posts.push(newPost)
        state.newPostText = ""
    } else if (action.actionType === UPD_NEW_POST_TEXT) {
        state.newPostText = action.newPostText
    }
    return state
}

export const addPostAC = () => {
    return {
        actionType: ADD_NEW_POST
    } as const
}
export const updNewPostTextAC = (e: ChangeEvent<HTMLTextAreaElement>) => {
    return {
        actionType: UPD_NEW_POST_TEXT,
        newPostText: (e.currentTarget.value)
    } as const
}

export default profileReducer