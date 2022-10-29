import React from "react";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {AppStateType, UserType} from "../../redux/redux-store";
import {
    followUserAC,
    InitialUsersStateType,
    setCurrentPageAC, setTotalCountAC,
    setUsersAC,
    unFollowUserAC,

} from "../../redux/users-reducers";
import {UsersAPIComponent} from "./UsersAPIComponent";


export type MapStateToPropsType = {
    usersPage: InitialUsersStateType
    pageSize: number
    totalUsersCount: number
    currentPageNo: number
    setTotalUsersCount: number
}

export type MapDispatchToPropsType = {
    followUserCallback: (userId: number) => void
    unFollowUserCallback: (userId: number) => void
    setUsersCallback: (users: UserType[]) => void
    onUsersPagNoClickHandlerCallback: (newCurrentPage: number) => void
    setTotalUsersCountCallback: (totalCount:number)=>void
}


let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPageNo: state.usersPage.currentPageNo,
        setTotalUsersCount: state.usersPage.totalUsersCount
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
        setUsersCallback: (users: UserType[]) => {
            dispatch(setUsersAC(users))
        },
        onUsersPagNoClickHandlerCallback: (newCurrentPage: number) => {
            dispatch(setCurrentPageAC(newCurrentPage))
        },
        setTotalUsersCountCallback: (totalCount:number) => {
            dispatch(setTotalCountAC(totalCount))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)

