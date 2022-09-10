import React, {Dispatch} from "react";
import {RootStateType} from "../../redux/store";
import {connect} from "react-redux";
import {ActionsType} from "../../redux/redux-store";
import {Friends} from "./Friends";

type FriendsItemType = {}


let mapStateToProps = (state: RootStateType) => {
    return {
        friends: state.friends
    }
}

let mapDispatchToProps = (dispatch: Dispatch<ActionsType>) => {
    return {}
}

export const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends)

