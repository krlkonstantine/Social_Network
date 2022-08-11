import React from 'react';
import {ActionTypes, PostsTextsType, StoreType} from "./state";

type ProfileReducerType = {
    store:StoreType
}

 const addNewPost = 'ADD-NEW-POST'
 const updNewPostText = 'UPDATE-NEW-POST-TEXT'

export const ProfileReducer = (props:ProfileReducerType) => {

    const profilePageReducer = (state:StoreType,action:ActionTypes) => {
        if (action.actionType === addNewPost) {
            let newPost: PostsTextsType = {id: 4, messageText: props.store._state.profilePage.newPostText, likeCount: '0'}
            props.store._state.profilePage.posts.push(newPost)
            props.store._state.profilePage.newPostText = ""
            props.store._rerenderEntireTree()
        } else if (action.actionType === updNewPostText) {
            props.store._state.profilePage.newPostText = action.newPostText
            props.store._rerenderEntireTree()
        }
    }
}

