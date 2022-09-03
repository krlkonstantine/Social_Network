import React, {ChangeEvent, ChangeEventHandler, Dispatch} from "react";
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./Message/Message";
import DialogsReducers, {sendNewMsgAC, updNewMsgTextAC} from "../../redux/dialogs-reducers"
import {ActionsType, StoreType} from "../../redux/redux-store";
import {Dialogs} from "./Dialogs";

type DialogsPropsType = {
    store: StoreType
}


export const DialogsContainer = (props: DialogsPropsType) => {
    let state = props.store.getState()

    const sendMessageFnc = () => props.store.dispatch(sendNewMsgAC())
    const onMsgTextChangeFnc = (newMessageText: string) => props.store.dispatch(updNewMsgTextAC(newMessageText))

    return (
        <Dialogs avatar={"ghhghg"}
                 name={"panda"}
                 dialogsPage={state.dialogsPage}
                 dispatch={props.store.dispatch}
                 sendMessageCallback={sendMessageFnc}
                 changeMessageText={onMsgTextChangeFnc}
         />
    )
}


