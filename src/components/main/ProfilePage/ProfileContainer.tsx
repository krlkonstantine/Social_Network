import React from 'react';
import {ProfilePage} from "./ProfilePage";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {getProfile, getStatus, updateStatus} from "../../../redux/reducers/profile-reducer";
import {ProfileType} from "./Profile";
import {PostType} from "../Posts/Posts";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";
import {Preloader} from "../../../utils/preloader/Preloader";

type MapStateToPropsType = {
    profile: ProfileType | null
    posts: Array<PostType>
    status: string
    preloader: boolean
    authorisedUserId: string | null
    isAuth: boolean
}
type MapDispatchPropsType = {
    getProfile: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatus: (status: string) => void
}
type PathParamType = {
    userId: string
    status: string
}
type ContainerType = MapStateToPropsType & MapDispatchPropsType
export type ProfileContainerType = RouteComponentProps<PathParamType> & ContainerType

class ProfileContainer extends React.Component<ProfileContainerType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorisedUserId as string
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getStatus(userId)
        this.props.getProfile(userId)
    }

    render() {
        if (this.props.preloader) return <Preloader/>
        return (
            <ProfilePage profile={this.props.profile}
                         posts={this.props.posts}
                         status={this.props.status}
                         updateStatus={this.props.updateStatus}
            />
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        posts: state.profilePage.posts,
        status: state.profilePage.status,
        preloader: state.preloader.preloader,
        authorisedUserId: state.auth.userId,
        isAuth: state.auth.isAuth
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getProfile, getStatus, updateStatus}),
    withRouter,
    //withAuthRedirect
)(ProfileContainer)