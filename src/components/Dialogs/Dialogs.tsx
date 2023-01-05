import React, {ChangeEvent} from "react";
import dlg from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./Message/Message";
import {DialogsPageType} from "../../redux/dialogs-reducers";
import { Navigate } from 'react-router-dom';


type DialogsPropsType = {
    name: string
    avatar: string
    dialogsPage: DialogsPageType
    sendMessageCallback: () => void
    changeMessageText: (newMessageText: string) => void
    isAuth:boolean
}


export const Dialogs = (props: DialogsPropsType) => {
    let dialogsPageState = props.dialogsPage
    let dialogElements = dialogsPageState.dialogs.map(dlg => <DialogItem key={dlg.id} name={dlg.name} id={dlg.id}/>)
    let messageElements = dialogsPageState.messages.map(msg => <MessageItem key={msg.id} messageText={msg.messageText}
                                                                       id={msg.id}/>)

    const onSendMessageClickHandler = () => {
        props.sendMessageCallback()
    }
    const onMsgTextChangeClickHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeMessageText(e.currentTarget.value.toString())
    }


    if (!props.isAuth) {
        return  <Navigate to="/login" />
    }

    return (
        <div className={dlg.dialogs}>
            <div className={dlg.dialogItems}>{dialogElements}</div>
            <div className={dlg.dialogItems}>
                <div>{messageElements} </div>
                <div className={dlg.sendAndWriteMessageWrapper}>
                    <textarea onChange={onMsgTextChangeClickHandler}
                              value={dialogsPageState.newMessageText}/>
                    <button className={dlg.sendMessageButton} onClick={onSendMessageClickHandler}>Send Message</button>
                </div>
            </div>
        </div>
    )
}


