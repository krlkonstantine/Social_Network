import React, {ChangeEvent, useState} from 'react';
import {ActionTypes, DialogsPageType, PostsTextsType, ProfilePageType, StoreType} from "./state";

const addNewPost = 'ADD-NEW-POST'
const updNewPostText = 'UPDATE-NEW-POST-TEXT'

const profileReducer = (state: ProfilePageType, action: ActionTypes) => {

    if (action.actionType === addNewPost) {
        let newPost: PostsTextsType = {id: 4, messageText: state.newPostText, likeCount: '0'}
        state.posts.push(newPost)
        state.newPostText = ""
    } else if (action.actionType === updNewPostText) {
        state.newPostText = action.newPostText
    }
    return state
}
export default profileReducer