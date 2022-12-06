import React from "react";
import {connect} from "react-redux";
import {AppStateType, UserType} from "../../redux/redux-store";
import {
    followUser,
    InitialUsersStateType,
    setCurrentPage, setToggleFollowing, setToggleFetching, setTotalCount,
    setUsers,
    unFollowUser,

} from "../../redux/users-reducers";
import loading from "../../assets/images/loading.svg"
import {Users} from "./Users";
import {getUsers} from "../api/api";

type StateType = {
    usersPage: InitialUsersStateType
    pageSize: number
    totalUsersCount: number
    currentPageNo: number
    isFetching: boolean
    isFollowing: boolean
}
type OwnPropsType = {
    usersPage: InitialUsersStateType
}

export type MapStateToPropsType = {
    usersPage: InitialUsersStateType
    pageSize: number
    totalUsersCount: number
    currentPageNo: number
    setTotalUsersCount: number
    isFetching: boolean
    isFollowing: boolean
}
export type MapDispatchToPropsType = {
    followUser: (userId: number) => void
    unFollowUser: (userId: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (newCurrentPage: number) => void
    setTotalCount: (totalCount: number) => void
    setToggleFetching: (isFetching: boolean) => void
    setToggleFollowing: (isFetching: boolean, isFollowing: boolean)=>void
}

type usersPropsType = OwnPropsType & MapStateToPropsType & MapDispatchToPropsType


export class UsersAPIContainer extends React.Component<usersPropsType, StateType> {

    constructor(props: usersPropsType) {
        super(props)
    }

    onUnfollowClickHandler = (userId: number) => {
        this.props.unFollowUser(userId)
    }
    onFollowClickHandler = (userId: number) => {
        this.props.followUser(userId)
    }
    setUsers = (newCurrentPageNo: number) => {
        this.props.setCurrentPage(newCurrentPageNo)
    }
    onPageChanged = (newPageNumber: number) => {
        this.props.setCurrentPage(newPageNumber)
        this.props.setToggleFetching(true)
        getUsers(newPageNumber,this.props.pageSize)
            .then(data => {
                this.props.setToggleFetching(false)
                this.props.setUsers(data.items)
            })
    }



    componentDidMount() {
        this.props.setToggleFetching(true)
        getUsers(this.props.currentPageNo,this.props.pageSize).then(data => {
                    this.props.setToggleFetching(false)
                    this.props.setUsers(data.items)
                    this.props.setTotalCount(data.totalCount)
                }
            )
    }

    render() {
        return (
            <>
                {this.props.isFetching ?
                    <div>
                        < img alt="loading" src={loading}/>
                    </div> : null}
                <Users
                    onUnfollowClickHandler={this.onUnfollowClickHandler}
                    onFollowClickHandler={this.onFollowClickHandler}
                    onPageChanged={this.onPageChanged}
                    currentPageNo={this.props.currentPageNo}
                    usersPage={this.props.usersPage}
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                />
            </>
        )
    }
}



let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPageNo: state.usersPage.currentPageNo,
        setTotalUsersCount: state.usersPage.totalUsersCount,
        isFetching: state.usersPage.isFetching,
        isFollowing: state.usersPage.isFollowing,
    }
}

/*let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
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
        setTotalUsersCountCallback: (totalCount: number) => {
            dispatch(setTotalCountAC(totalCount))
        },
        toggleFetchingCallback: (isFetching: boolean) => {
            dispatch(setToggleFetchingAC(isFetching))
        }
    }
}*/

export const UsersContainer = connect(mapStateToProps,
    {
        followUser, unFollowUser, setUsers, setCurrentPage,
        setTotalCount, setToggleFetching,setToggleFollowing
    })(UsersAPIContainer)

