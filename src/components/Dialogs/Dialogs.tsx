import React, {ChangeEvent, ChangeEventHandler} from "react";
import dlg from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./Message/Message";
import {
    ActionTypes,
    DialogsPageType,
    sendNewMsgAC, updNewMsgTextAC,
} from "../../redux/state";


type DialogsPropsType = {
    name: string
    avatar: string
    dialogsPage: DialogsPageType
    dispatch: (action: ActionTypes) => void
}


export const Dialogs = (props: DialogsPropsType) => {

    let dialogElements = props.dialogsPage.dialogs.map(dlg => <DialogItem key={dlg.id} name={dlg.name} id={dlg.id}/>)
    let messageElements = props.dialogsPage.messages.map(msg => <MessageItem key={msg.id} messageText={msg.messageText} id={msg.id}/>)

    const sendMessageFnc = () => props.dispatch(sendNewMsgAC())
    const onMsgTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => props.dispatch(updNewMsgTextAC(e))

    return (
        <div className={dlg.dialogs}>
            <div className={dlg.dialogItems}>{dialogElements}</div>
            <div className={dlg.dialogItems}>
                <div>{messageElements} </div>
                <div className={dlg.sendAndWriteMessageWrapper}>
                    <textarea onChange={onMsgTextChange}
                              value={props.dialogsPage.newMessageText}/>
                    <button className={dlg.sendMessageButton} onClick={sendMessageFnc}>Send Message</button>
                </div>
            </div>
        </div>
    )
}


