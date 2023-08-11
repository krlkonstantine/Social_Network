import React from 'react';
import {connect} from "react-redux";
import {Users, UserType} from "./Users";
import {AppStateType} from "../../redux/redux-store";
import {
    setCurrentPage, loadUsers, toggleFollowUser
} from "../../redux/reducers/users-reducer";


import {compose} from "redux";
import {
    getUsers,
    getCurrentPage,
    getfollowingProgress,
    getPageSize,
    getTotalUsersCount,
} from "../../redux/selectors/userSelectors";

type UsersContainerType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    followingProgress: string[]
    setCurrentPage: (currentPage: number) => void
    loadUsers: (currentPage: number, pageSize?: number) => void
    followUser: (userId: string) => void
    unfollowUser: (userId: string) => void
    toggleFollowUser: (userId: string) => void
}

class UsersContainer extends React.Component<UsersContainerType> {


    componentDidMount() {
        let {currentPage, pageSize, loadUsers} = this.props
        loadUsers(currentPage, pageSize)
    }

    setCurrentPage = (pageNumber: number) => {
        let {loadUsers, pageSize} = this.props
        loadUsers(pageNumber, pageSize)
    }

    render = () => {
        return <Users users={this.props.users}
                      currentPage={this.props.currentPage}
                      totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      followingProgress={this.props.followingProgress}
                      setCurrentPage={this.setCurrentPage}
                      toggleFollowUser={this.props.toggleFollowUser}
        />
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        followingProgress: getfollowingProgress(state)
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {setCurrentPage, loadUsers, toggleFollowUser}),
)(UsersContainer)
