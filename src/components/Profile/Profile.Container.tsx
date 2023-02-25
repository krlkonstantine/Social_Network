import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType, ProfileType} from "../../redux/redux-store";
import {getUserProfileThunkCreator, setUserProfile} from "../../redux/profile-reducers";
import {InitialUsersStateType} from "../../redux/users-reducers";
import {Navigate, useLocation, useNavigate, useParams,} from "react-router-dom";
import {ComponentType} from "react";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


export type MapStateToPropsType = {
    usersPage: InitialUsersStateType
    userProfilePage: ProfileType
    //isAuth:boolean
}
export type MapDispatchToPropsType = {
    setUserProfile: (user: ProfileType) => void
    getUserProfileThunkCreator: (userId: string | undefined) => void

}
type PathParamsType = {
    router?: { params: { userId: string } }
}
type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToPropsType & PathParamsType

/*let AuthRedirectComponent = (props: ProfileContainerPropsType)=>{
    if (!props.isAuth) {
        return  <Navigate to="/login" />
    } else return <ProfileContainer {...props}/>
}*/

export class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    constructor(props: ProfileContainerPropsType) {
        super(props)
    }

    componentDidMount() {
        this.props.getUserProfileThunkCreator(this.props.router?.params?.userId)

        /*let userId = this.props.router?.params?.userId
        if (!userId) {
            userId = '2'
        }
        /!*axios.get<any>(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)*!/
        usersApi.getCertainUserProfile(userId).then(response => {
                this.props.setUserProfile(response.data)
            }
        )*/
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
        userProfilePage: state.profilePage.userProfilePage,
        //isAuth: state.auth.isAuth
    }
}



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
let withURLDataContainerComponent = withRouter<MapStateToPropsType & MapDispatchToPropsType>(ProfileContainer)

let AuthRedirectComponent = WithAuthRedirect(withURLDataContainerComponent)

export const ProfileExtContainer: ComponentType = WithAuthRedirect(connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>
(mapStateToProps, {setUserProfile, getUserProfileThunkCreator})(AuthRedirectComponent))

export default compose<React.ComponentType>(
    WithAuthRedirect,
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>
    (mapStateToProps, {setUserProfile, getUserProfileThunkCreator}),

/*
    ProfileContainer,
*/
    withRouter<MapStateToPropsType & MapDispatchToPropsType>(ProfileContainer)
)
(Profile)
