import React from 'react';
import {connect} from "react-redux";
import {addPostActionCreator} from "../../../redux/reducers/profile-reducer";
import {SendMyPost} from "./SendMyPost";
import {ActionType} from "../../../redux/store";

const mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
    return {
        addPost: (textNewPost: string) => {
            dispatch(addPostActionCreator(textNewPost))
        },
    }
}

export const SendMyPostContainer = connect(null, mapDispatchToProps)(SendMyPost)