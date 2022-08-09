import React, {ChangeEvent, ChangeEventHandler} from "react";
import dlg from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./Message/Message";
import {
    ActionTypes,
    DialogsPageType,
    DialogsTextsType,
    MessagesTextsType,
    RootStateType,
} from "../../redux/state";


type DialogsPropsType = {
    name: string
    avatar: string
    dialogsPage: DialogsPageType
    dispatch: (action: ActionTypes) => void
    //sendMessageCallback: (msgTxt: string) => void
    //updateMessageText: (nMsgTxt: string) => void
}


export const Dialogs = (props: DialogsPropsType) => {

    let dialogElements = props.dialogsPage.dialogs.map(dlg => <DialogItem key={dlg.id} name={dlg.name} id={dlg.id}/>)
    let messageElements = props.dialogsPage.messages.map(msg => <MessageItem key={msg.id} messageText={msg.messageText}
                                                                             id={msg.id}/>)
    const newMessageText = React.createRef<HTMLTextAreaElement>()

    const sendMessageFnc = () => {
        //props.sendMessageCallback(props.dialogsPage.newMessageText)
        props.dispatch({actionType: 'SEND-NEW-MSG'})
    }


    const onMsgTextChange2 = (e: ChangeEvent<HTMLTextAreaElement>) => {
        //props.updateMessageText(e.currentTarget.value)
        props.dispatch({actionType: 'UPDATE-NEW-MSG-TEXT',newMsgText:(e.currentTarget.value)})
    }

    return (
        <div className={dlg.dialogs}>
            <div className={dlg.dialogItems}>{dialogElements}</div>
            <div className={dlg.dialogItems}>
                <div>{messageElements} </div>
                <div className={dlg.sendAndWriteMessageWrapper}>
                    <textarea onChange={onMsgTextChange2}
                              value={props.dialogsPage.newMessageText}/>
                    <button className={dlg.sendMessageButton} onClick={sendMessageFnc}>Send Message</button>
                </div>
            </div>
        </div>
    )
}


