import React, {Dispatch} from "react";
import {connect} from "react-redux";
import {ActionsType, AppStateType, UserType} from "../../redux/redux-store";
import {Users} from "./Users";
import {followUserAC, setUsersAC, unFollowUserAC} from "../../redux/users-reducers";

type MapDispatchToPropsType = {
    followUserCallback: (userId: number) => void
    unFollowUserCallback: (userId: number) => void
    setUsersCallback: (users:UserType[]) => void
}


let mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage
    }
}

let mapDispatchToProps = (dispatch: Dispatch<ActionsType>): MapDispatchToPropsType => {
    return {
        followUserCallback: (userId: number) => {
            dispatch(followUserAC(userId))
        },
        unFollowUserCallback: (userId: number) => {
            dispatch(unFollowUserAC(userId))
        },
        setUsersCallback: (users:UserType[]) => {dispatch(setUsersAC(users))}
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

