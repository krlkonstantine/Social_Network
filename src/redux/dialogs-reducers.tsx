import React from 'react';

const SEND_NEW_MSG = 'SEND-NEW-MSG'
const UPD_NEW_MSG_TEXT = 'UPDATE-NEW-MSG-TEXT'

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

export type InitialDialogsStateType = typeof initDialogState

let initDialogState = {
    dialogs: [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Sandu"},
        {id: 3, name: "Viktor"},
        {id: 4, name: "Nastasiale"},
        {id: 5, name: "Vadim"},
        {id: 6, name: "Gagiu"},
        {id: 7, name: "Catherine"},
    ] as Array<DialogsTextsType>,
    messages: [
        {id: 7, messageText: "Hi there"},
        {id: 1, messageText: "Does it really works??"},
        {id: 2, messageText: "1 2 3 4 5 6"},
        {id: 3, messageText: "Whaaat"},
        {id: 4, messageText: "Lorem ipsum dolor"},
        {id: 5, messageText: "The price per unit is"},
        {id: 6, messageText: "Please do not..."},
    ] as Array<MessagesTextsType>,
    newMessageText: "Hi"
}

const dialogsReducer = (state: InitialDialogsStateType = initDialogState, action: DialogsReducerType): InitialDialogsStateType => {

    let stateCopy

    switch (action.type) {
        case SEND_NEW_MSG:
            let newMessage: MessagesTextsType = {id: 7, messageText: state.newMessageText}
            return {...state, newMessageText: "", messages: [...state.messages, newMessage]}
            //stateCopy.messages.push(newMessage)
            //return stateCopy
        case UPD_NEW_MSG_TEXT:
            stateCopy = {...state, newMessageText: action.payload.newMessageText}
            return stateCopy
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
        payload: {
            newMessageText
        }
    } as const
}

export default dialogsReducer
