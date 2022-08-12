import React, {ChangeEvent, useState} from 'react';
import {ActionTypes, DialogsPageType, MessagesTextsType, StoreType} from "./state";

 const sendNewMsg = 'SEND-NEW-MSG'
 const updNewMsgText = 'UPDATE-NEW-MSG-TEXT'


const dialogsReducer = (state:DialogsPageType,action:ActionTypes) => {
    if (action.actionType === sendNewMsg) {
        let newMessage: MessagesTextsType = {id: 4, messageText: state.newMessageText}
        state.messages.push(newMessage)
        state.newMessageText = ""
    } else if (action.actionType === updNewMsgText) {
        state.newMessageText = action.newMsgText
    }
     return state


};
 export default dialogsReducer
