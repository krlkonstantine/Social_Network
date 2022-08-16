import React, {ChangeEvent, useState} from 'react';
import {ActionTypes, DialogsPageType, MessagesTextsType} from "./state";

const SEND_NEW_MSG = 'SEND-NEW-MSG'
const UPD_NEW_MSG_TEXT = 'UPDATE-NEW-MSG-TEXT'


const dialogsReducer = (state: DialogsPageType, action: ActionTypes) => {
    switch (action.actionType) {
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

export const sendNewMsgAC = () => {
    return {
        actionType: SEND_NEW_MSG
    } as const
}
export const updNewMsgTextAC = (e: ChangeEvent<HTMLTextAreaElement>) => {
    return {
        actionType: UPD_NEW_MSG_TEXT,
        newMsgText: (e.currentTarget.value)
    } as const
}

export default dialogsReducer
