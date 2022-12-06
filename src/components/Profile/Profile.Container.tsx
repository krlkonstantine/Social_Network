import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType, ProfileType} from "../../redux/redux-store";
import {setUserProfile} from "../../redux/profile-reducers";
import {InitialUsersStateType} from "../../redux/users-reducers";
import {useLocation, useNavigate, useParams,} from "react-router-dom";
import {ComponentType} from "react";
import {getCertainUserProfile} from "../api/api";


export type MapStateToPropsType = {
    usersPage: InitialUsersStateType
    userProfilePage: ProfileType
}
export type MapDispatchToPropsType = {
    setUserProfile: (user: ProfileType) => void
}
type PathParamsType = {
    router?: { params: { userId: string } }
}
type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToPropsType & PathParamsType

export class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    constructor(props: ProfileContainerPropsType) {
        super(props)
    }

    componentDidMount() {

        let userId = this.props.router?.params?.userId
        if (!userId) {
            userId = '2'
        }
        /*axios.get<any>(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)*/
        getCertainUserProfile(userId).then(response => {
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


let withURLDataContainerComponent = withRouter<MapStateToPropsType & MapDispatchToPropsType>(ProfileContainer)

export function withRouter<T>(Component: ComponentType<T>) {
    function ComponentWithRouterProp(props: T) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component{...props} router={{location, navigate, params}}/>
        );
    }

    return ComponentWithRouterProp;
}

export const ProfileExtContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {setUserProfile})(withURLDataContainerComponent)