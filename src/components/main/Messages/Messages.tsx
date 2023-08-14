import React from 'react';
import s from './Messages.module.css'
import {DialogContainer} from "./DialogContainer";
import {DialogsListContainer} from "./DialogListContainer";

function Messages() {
    return (
        <div className={s.dialogsList}>
            <DialogsListContainer/>
            <DialogContainer/>
        </div>
    )
}

export default Messages