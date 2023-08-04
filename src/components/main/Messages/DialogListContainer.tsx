import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {DialogsList} from "./DialogsList";


const mapStateToProps = (state: AppStateType) => {
    return {
        dialogsPerson: state.dialogsPage.dialogs.dialogsPerson
    }
}

export const DialogsListContainer = connect(mapStateToProps)(DialogsList)