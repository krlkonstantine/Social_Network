import React from 'react';
import {combineReducers, createStore} from 'redux';
import dialogsReducer, {DialogsReducerType} from "./dialogs-reducers";
import profileReducer, {ProfileReducerType} from "./profile-reducers";
import friendsReducer, {FriendsReducerType} from "./friends-reducers";
import usersReducer, {UserReducerType} from "./users-reducers";
import {authReducer, AuthReducerType} from "./auth-reducers";

export type FriendType = {
    id: number
    name: string
}

export type PostsTextsType = {
    id: number
    messageText: string
    likeCount: string
}
type ContactType = {
    facebook?: string
    github?: string
    instagram?: string
    mainLink?: string
    twitter?: string
    vk?: string
    website?: null
    youtube?: null
}

export type ProfileType = {
    aboutMe: string
    contacts?: ContactType
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    photos: {
        large: string
        small: string
    }
    userId: number
}

export type ProfilePageType = {
    posts: Array<PostsTextsType>
    newPostText: string
    userProfilePage: ProfileType

}

export type UserType = {
    id: number
    photos: { small: string, large: string }
    followed: boolean
    name: string
    status: string
}


export const rootReducer = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    friends: friendsReducer,
    usersPage: usersReducer,
    auth: authReducer,

})

export let store = createStore(rootReducer)
export type AppStateType = ReturnType<typeof rootReducer>
export type ActionsType = ProfileReducerType
    | DialogsReducerType
    | FriendsReducerType
    | UserReducerType
    | AuthReducerType


