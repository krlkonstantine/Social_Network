import React from 'react';
import {combineReducers,createStore} from 'redux';
import dialogsReducer, {DialogsReducerType} from "./dialogs-reducers";
import profileReducer, {ProfileReducerType} from "./profile-reducers";
import friendsReducer, {FriendsReducerType} from "./friends-reducers";

export type FriendType = {
    id: number
    name: string
}
export type DialogsTextsType = {
    id: number
    name: string
}
export type MessagesTextsType = {
    id: number
    messageText: string
}
export type DialogsPageType = {
    dialogs: Array<DialogsTextsType>
    messages: Array<MessagesTextsType>
    newMessageText: string
}
export type PostsTextsType = {
    id: number
    messageText: string
    likeCount: string
}
export type ProfilePageType = {
    posts: Array<PostsTextsType>
    newPostText: string
}

export const rootReducer = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    friends:friendsReducer
})

export let store = createStore(rootReducer)
export type AppStateType = ReturnType<typeof rootReducer>

export type StoreType = typeof store
export type ActionsType = ProfileReducerType | DialogsReducerType | FriendsReducerType