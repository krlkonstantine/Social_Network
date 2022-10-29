import React from "react";
import axios from "axios";
import {UserType} from "../../redux/redux-store";
import default_avatar from '../../assets/images/default_avatar.jpg'
import {InitialUsersStateType} from "../../redux/users-reducers";
import {Users} from "./Users";

type StateType = {
    usersPage: InitialUsersStateType
    pageSize: number
    totalUsersCount: number
    currentPageNo: number
}

type OwnPropsType = {
    usersPage: InitialUsersStateType
}

type MapStateToPropsType = {
    usersPage: InitialUsersStateType
    pageSize: number
    totalUsersCount: number
    currentPageNo: number
}

type MapDispatchToPropsType = {
    followUserCallback: (userId: number) => void
    unFollowUserCallback: (userId: number) => void
    setUsersCallback: (users: UserType[]) => void
    onUsersPagNoClickHandlerCallback: (newCurrentPage: number) => void
    setTotalUsersCountCallback: (totalCount: number) => void
}

type usersPropsType = OwnPropsType & MapStateToPropsType & MapDispatchToPropsType


export class UsersAPIComponent extends React.Component<usersPropsType, StateType> {

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

