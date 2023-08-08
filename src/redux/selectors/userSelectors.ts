import {AppStateType} from "../redux-store";
import {createSelector} from "reselect";
import {UserType} from "../../components/Users/Users";

export const getUsersPrimarySelector = (state: AppStateType) => {
    return state.usersPage.users
}

export const getUsers = createSelector(getUsersPrimarySelector, (users: UserType[]) => {
    return users.filter((u) => true)
});

export const getPageSize = (state: AppStateType) => {
    return state.usersPage.pageSize
}

export const getTotalUsersCount = (state: AppStateType) => {
    return state.usersPage.totalUsersCount
}
export const getCurrentPage = (state: AppStateType) => {
    return state.usersPage.currentPage
}
export const getfollowingProgress = (state: AppStateType) => {
    return state.usersPage.followingProgress
}
