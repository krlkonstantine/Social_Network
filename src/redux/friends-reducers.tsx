import React from 'react';
import {FriendsType} from "./store";

const SHOW_FRIENDS = 'SHOW_FRIENDS'

let initFriendsState: FriendsType[] = [
    {id: 1, name: "Dimych"},
    {id: 2, name: "Sandu"},
    {id: 3, name: "Viktor"},
    {id: 4, name: "Nastasiale"},
    {id: 5, name: "Vadim"},
    {id: 6, name: "Gagiu"},
    {id: 7, name: "Gagiu"},
]

const friendsReducer = (state: FriendsType[] = initFriendsState, action: FriendsReducerType) => {
    if (action.type === SHOW_FRIENDS) {
        return state
    } else return state
}

export type FriendsReducerType = ReturnFriendsACType

type ReturnFriendsACType = ReturnType<typeof returnFriendsAC>

export const returnFriendsAC = () => {
    return {
        type: SHOW_FRIENDS
    } as const
}

export default friendsReducer