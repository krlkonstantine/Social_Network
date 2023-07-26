import React, {ComponentType} from "react";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";
import {useNavigate} from "react-router-dom";

type MapStateToPropsType = {
    isAuth: boolean
}
const mapStateToProps = (state: AppStateType) :MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function WithAuthRedirect<T>(Component: ComponentType<T>) {

    const RedirectComponent = (props: MapStateToPropsType) => {

        const navigate = useNavigate()

        let {isAuth, ...restProps} = props
        if (!isAuth) navigate("/login")

        return <Component {...restProps as T}/>
    }

    return connect(mapStateToProps)(RedirectComponent)
}
