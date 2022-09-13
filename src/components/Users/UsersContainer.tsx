import React, {Dispatch} from "react";
import {connect} from "react-redux";
import {ActionsType, AppStateType} from "../../redux/redux-store";
import {Users} from "./Users";


let mapStateToProps = (state: AppStateType) => {
    return {
        friends: state.friends
    }
}

let mapDispatchToProps = (dispatch: Dispatch<ActionsType>) => {
    return {}
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

