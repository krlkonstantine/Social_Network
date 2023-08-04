import React from 'react';
import {connect} from "react-redux";
import {ActionType} from "../../../redux/store";
import {addMessageActionCreator} from "../../../redux/reducers/dialogs-reducer";
import {AppStateType} from "../../../redux/redux-store";
import {Dialog} from "./Dialog";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state: AppStateType) => {
    return {
        messages: state.dialogsPage.dialogs.messages,
    }
}

const mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
    return {
        onClickSendMessage: (textNewMessage: string) => {
            dispatch(addMessageActionCreator(textNewMessage))
        },
    }
}

export const DialogContainer = compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialog)