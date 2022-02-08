import React from "react";
import dlg from './../Dialogs.module.css';



type MessageItemPropsType = {
    messageText: string
    id: number
}

export const MessageItem = (props: MessageItemPropsType) => {
    return (
        <div>
            <div className={dlg.messageText}>{props.messageText}</div>
        </div>

    )
}



