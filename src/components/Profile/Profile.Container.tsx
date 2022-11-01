import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType, PostsTextsType, ProfileType} from "../../redux/redux-store";
import {setUserProfile} from "../../redux/profile-reducers";
import {InitialUsersStateType} from "../../redux/users-reducers";


type OwnPropsType = {
    usersPage: InitialUsersStateType
}
type profileContainerPropsType = OwnPropsType & MapStateToPropsType & MapDispatchToPropsType

export type MapStateToPropsType = {
    usersPage: InitialUsersStateType
    userProfilePage: ProfileType
}
export type MapDispatchToPropsType = {
    setUserProfile: (user: ProfileType) => void
}

export class ProfileContainer extends React.Component<profileContainerPropsType> {

    constructor(props: profileContainerPropsType) {
        super(props)
    }

    componentDidMount() {
        axios.get<any>(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                    this.props.setUserProfile(response.data)
                }
            )
    }

    render() {
        return (
            <Profile userProfilePage={this.props.userProfilePage}/>
        )
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {

    return {
        usersPage: state.usersPage,
        userProfilePage: state.profilePage.userProfilePage
    }
}

export const ProfileExtContainer = connect(mapStateToProps, {setUserProfile})(ProfileContainer)