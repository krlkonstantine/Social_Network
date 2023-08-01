import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {logout} from "../../redux/reducers/auth-reducer";

type MapStateToPropsType = {
    isAuth: boolean
    login: string
}
type MapDispatchPropsType = {
    logout: () => void
}
type HeaderContainerType = MapStateToPropsType & MapDispatchPropsType

class HeaderContainer extends React.Component<HeaderContainerType>{

    render() {
        return <Header isAuth={this.props.isAuth}
                       login={this.props.login}
                       logout={this.props.logout}
        />
    }
}

const mapStateToProps = (state: any): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {logout})(HeaderContainer)