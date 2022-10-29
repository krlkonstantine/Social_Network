import React from "react";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {AppStateType, UserType} from "../../redux/redux-store";
import axios from "axios";
import {
    followUserAC,
    InitialUsersStateType,
    setCurrentPageAC, setTotalCountAC,
    setUsersAC,
    unFollowUserAC,

} from "../../redux/users-reducers";
import {Users} from "./Users";

/*type MapStateToPropsType1 = {
    usersPage: InitialUsersStateType
    pageSize: number
    totalUsersCount: number
    currentPageNo: number
}
type MapDispatchToPropsType1 = {
    followUserCallback: (userId: number) => void
    unFollowUserCallback: (userId: number) => void
    setUsersCallback: (users: UserType[]) => void
    onUsersPagNoClickHandlerCallback: (newCurrentPage: number) => void
    setTotalUsersCountCallback: (totalCount: number) => void
}*/

type StateType = {
    usersPage: InitialUsersStateType
    pageSize: number
    totalUsersCount: number
    currentPageNo: number
}
type OwnPropsType = {
    usersPage: InitialUsersStateType
}
type usersPropsType = OwnPropsType & MapStateToPropsType & MapDispatchToPropsType


export class UsersAPIContainer extends React.Component<usersPropsType, StateType> {

    constructor(props: usersPropsType) {
        super(props)
    }

    onUnfollowClickHandler = (userId: number) => {
        this.props.unFollowUserCallback(userId)
    }
    onFollowClickHandler = (userId: number) => {
        this.props.followUserCallback(userId)
    }
    onUsersPagNoClickHandler = (newCurrentPageNo: number) => {
        this.props.onUsersPagNoClickHandlerCallback(newCurrentPageNo)
    }
    onPageChanged = (newPageNumber: number) => {
        this.onUsersPagNoClickHandler(newPageNumber)
        axios.get<any>(`https://social-network.samuraijs.com/api/1.0/users?page=${newPageNumber}&count=${this.props.pageSize}`)
            .then(response => this.props.setUsersCallback(response.data.items))
    }

    componentDidMount() {
        axios.get<any>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPageNo}&count=${this.props.pageSize}`)
            .then(response => {
                    this.props.setUsersCallback(response.data.items)
                    this.props.setTotalUsersCountCallback(response.data.totalCount)
                }
            )
    }

    render() {
        return <Users
            onUnfollowClickHandler={this.onUnfollowClickHandler}
            onFollowClickHandler={this.onFollowClickHandler}
            onPageChanged={this.onPageChanged}
            currentPageNo={this.props.currentPageNo}
            usersPage={this.props.usersPage}
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
        />
    }
}

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

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer)

