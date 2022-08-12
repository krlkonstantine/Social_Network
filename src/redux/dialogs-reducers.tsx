import React, {ChangeEvent, useState} from 'react';
import {ActionTypes, DialogsPageType, MessagesTextsType} from "./state";

const sendNewMsg = 'SEND-NEW-MSG'
const updNewMsgText = 'UPDATE-NEW-MSG-TEXT'

const dialogsReducer = (state: DialogsPageType, action: ActionTypes) => {
    switch (action.actionType) {
        case sendNewMsg:
            let newMessage: MessagesTextsType = {id: 4, messageText: state.newMessageText}
            state.messages.push(newMessage)
            state.newMessageText = ""
            return state

        case updNewMsgText:
            state.newMessageText = action.newMsgText
            return state
        default:
            return state
    }
}
export default dialogsReducer
