import React from "react";
import dlg from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./Message/Message";
import {
    DialogsPageType,
    DialogsTextsType,
    MessagesTextsType,
    RootStateType,
    updateMessageText
} from "../../redux/state";


type DialogsPropsType = {
    name: string
    avatar: string
    dialogsPage: DialogsPageType
    sendMessageCallback: (msgTxt: string) => void
    updateMessageText: (nMsgTxt: string) => void
}


export const Dialogs = (props: DialogsPropsType) => {

    let dialogElements = props.dialogsPage.dialogs.map(dlg => <DialogItem name={dlg.name} id={dlg.id}/>)
    let messageElements = props.dialogsPage.messages.map(msg => <MessageItem messageText={msg.messageText} id={msg.id}/>)
    const newMessageText = React.createRef<HTMLTextAreaElement>()

    const sendMessageFnc = () => {
        if (newMessageText.current) {
            props.sendMessageCallback(newMessageText.current.value)
        }
    }
    const onMsgTextChange = () => {
        if (newMessageText.current) {
            let newMsgText = newMessageText.current.value
            props.updateMessageText(newMsgText)
        }
    }

    return (
        <div className={dlg.dialogs}>
            <div className={dlg.dialogItems}>{dialogElements}</div>
            <div className={dlg.dialogItems}>
                <div>{messageElements} </div>
                <div className={dlg.sendAndWriteMessageWrapper}>
                    <textarea onChange={onMsgTextChange} ref={newMessageText} value={props.dialogsPage.newMessageText} />
                    <button className={dlg.sendMessageButton} onClick={sendMessageFnc}>Send Message</button>
                </div>
            </div>
        </div>
    )
}


