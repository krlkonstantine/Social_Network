import React, {ChangeEvent, useState} from 'react';
import {ActionTypes, DialogsPageType, MessagesTextsType} from "./store";

const SEND_NEW_MSG = 'SEND-NEW-MSG'
const UPD_NEW_MSG_TEXT = 'UPDATE-NEW-MSG-TEXT'

let initDialogState = {
    dialogs: [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Sandu"},
        {id: 3, name: "Viktor"},
        {id: 4, name: "Nastasiale"},
        {id: 5, name: "Vadim"},
        {id: 6, name: "Gagiu"},
        {id: 7, name: "Catherine"},
    ],
    messages: [
        {id: 7, messageText: "Hi there"},
        {id: 1, messageText: "Does it really works??"},
        {id: 2, messageText: "1 2 3 4 5 6"},
        {id: 3, messageText: "Whaaat"},
        {id: 4, messageText: "Lorem ipsum dolor"},
        {id: 5, messageText: "The price per unit is"},
        {id: 6, messageText: "Please do not..."},
    ],
    newMessageText: "Hi"
}

const dialogsReducer = (state: DialogsPageType = initDialogState, action: DialogsReducerType) => {
    switch (action.type) {
        case SEND_NEW_MSG:
            let newMessage: MessagesTextsType = {id: 4, messageText: state.newMessageText}
            state.messages.push(newMessage)
            state.newMessageText = ""
            return state

        case UPD_NEW_MSG_TEXT:
            state.newMessageText = action.newMsgText
            return state

        default:
            return state
    }
}
export type DialogsReducerType = SendNewMsgACType | UpdNewMsgTextAC

type SendNewMsgACType = ReturnType<typeof sendNewMsgAC>
export const sendNewMsgAC = () => {
    return {
        type: SEND_NEW_MSG
    } as const
}
type UpdNewMsgTextAC = ReturnType<typeof updNewMsgTextAC>
export const updNewMsgTextAC = (newMessageText: string) => {
    return {
        type: UPD_NEW_MSG_TEXT,
        newMsgText: newMessageText
    } as const
}

export default dialogsReducer
