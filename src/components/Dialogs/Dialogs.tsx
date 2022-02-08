import React from "react";
import dlg from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./Message/Message";
import {DialogsPageType, DialogsTextsType, MessagesTextsType, RootStateType} from "../../redux/state";


type DialogsPropsType = {
    name: string
    avatar: string
    dialogsPage: DialogsPageType
    sendMessageCallback: (msgTxt: string) => void
}


export const Dialogs = (props: DialogsPropsType) => {

    let dialogElements = props.dialogsPage.dialogs.map(dlg => <DialogItem name={dlg.name} id={dlg.id}/>)
    let messageElements = props.dialogsPage.messages.map(msg => <MessageItem messageText={msg.messageText}
                                                                             id={msg.id}/>)
    const onSendMsgClickHandler = () => {
        alert("Wants to send the message")
    }
    const newMessagetext = React.createRef<HTMLTextAreaElement>()
    const sendMessageFnc = () => {
        if (newMessagetext.current) {
            props.sendMessageCallback(newMessagetext.current.value)
            newMessagetext.current.value = ""

        }
    }

    return (
        <div className={dlg.dialogs}>
            <div className={dlg.dialogItems}>{dialogElements}</div>
            <div className={dlg.dialogItems}>
                <div>{messageElements} </div>
                <div className={dlg.sendAndWriteMessageWrapper}>
                    <textarea ref={newMessagetext}>Hello!</textarea>
                    <button className={dlg.sendMessageButton} onClick={sendMessageFnc}>Send Message</button>
                </div>
            </div>
        </div>
    )
}


