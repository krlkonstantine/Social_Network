import React from 'react';
import {combineReducers,createStore} from 'redux';
import dialogsReducer, {DialogsReducerType} from "./dialogs-reducers";
import profileReducer, {ProfileReducerType} from "./profile-reducers";
import friendsReducer, {FriendsReducerType} from "./friends-reducers";


let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    friends:friendsReducer
})

export let store = createStore(reducers)

export type StoreType = typeof store
export type ActionsType = ProfileReducerType | DialogsReducerType | FriendsReducerType