import React from 'react';
import {connect} from "react-redux";
import {Users, UserType} from "./Users";
import {AppStateType} from "../../redux/redux-store";
import {
    setCurrentPage, loadUsers, followUser, unfollowUser
} from "../../redux/reducers/users-reducer";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
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
    loadUsers: (currentPage: number) => void
    followUser: (userId: string) => void
    unfollowUser: (userId: string) => void
}

class UsersContainer extends React.Component<UsersContainerType> {

    componentDidMount() {
        this.props.loadUsers(this.props.currentPage)
    }

    setCurrentPage = (pageNumber: number) => {
        this.props.loadUsers(pageNumber)
    }

    render = () => {
        return <Users users={this.props.users}
                      currentPage={this.props.currentPage}
                      totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      followingProgress={this.props.followingProgress}
                      setCurrentPage={this.setCurrentPage}
                      followUser={this.props.followUser}
                      unfollowUser={this.props.unfollowUser}
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
    connect(mapStateToProps, {setCurrentPage, loadUsers, followUser, unfollowUser}),
)(UsersContainer)