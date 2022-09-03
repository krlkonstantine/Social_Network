import React from "react";

import {sendNewMsgAC, updNewMsgTextAC} from "../../redux/dialogs-reducers"
import {StoreType} from "../../redux/redux-store";
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../StoreContext";

type DialogsPropsType = {
}


export const DialogsContainer = (props: DialogsPropsType) => {



    return (
        <StoreContext.Consumer>
            {
                (value) => {
                    let state = value.getState()
                    const sendMessageFnc = () => value.dispatch(sendNewMsgAC())
                    const onMsgTextChangeFnc = (newMessageText: string) => value.dispatch(updNewMsgTextAC(newMessageText))

                    return <Dialogs avatar={"ghhghg"}
                             name={"panda"}
                             dialogsPage={value.getState().dialogsPage}
                             dispatch={value.dispatch}
                             sendMessageCallback={sendMessageFnc}
                             changeMessageText={onMsgTextChangeFnc}
                    />
                }


            }
        </StoreContext.Consumer>
    )
}


