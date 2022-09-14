import React from "react";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {ActionsType, AppStateType, usersPageType, UserType} from "../../redux/redux-store";
import {Users} from "./Users";
import {followUserAC, InitialUsersStateType, setUsersAC, unFollowUserAC} from "../../redux/users-reducers";



type MapStateToPropsType = {
    usersPage: InitialUsersStateType
}

type MapDispatchToPropsType = {
    followUserCallback: (userId: number) => void
    unFollowUserCallback: (userId: number) => void
    setUsersCallback: (users:UserType[]) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType):MapStateToPropsType => {
    return {
        usersPage: state.usersPage
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        followUserCallback: (userId: number) => {
            dispatch(followUserAC(userId))
        },
        unFollowUserCallback: (userId: number) => {
            dispatch(unFollowUserAC(userId))
        },
        setUsersCallback: (users:UserType[]) => {
            dispatch(setUsersAC(users))}
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

