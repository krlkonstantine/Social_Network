import React from "react";
import s from './Login.module.css'
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {login} from "../../redux/reducers/auth-reducer";
import {LoginFormType, LoginReduxForm} from "./Login";


type LoginPageType = {
    isAuth: boolean
    preloader: boolean
    login: (email: string, password: string, rememberMe: boolean) => void
    error?: string
    captchaURL: string | null
}

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    error: string
    captchaURL: string | null
}

const LoginPage = (props: LoginContainerType) => {

    const onSubmit = (formData: LoginFormType) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    //if (props.preloader) return <Preloader/>

    return <div className={s.loginPage}>
        <h1>Login</h1>
        <LoginReduxForm captchaUrl={props.captchaUrl} onSubmit={onSubmit}/>
    </div>
}

type mapStateToPropsType = {
    isAuth: boolean
    preloader: boolean
    userId: string | null
    captchaUrl: string | null
}

type mapDispatchToPropsType = {
    login: (email: string, password: string, rememberMe: boolean, captcha?: string | null) => void
}
type LoginContainerType = mapStateToPropsType & mapDispatchToPropsType


const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        preloader: state.preloader.preloader,
        isAuth: state.auth.isAuth,
        userId: state.auth.userId,
        captchaUrl: state.auth.captchaURL
    }
}

export default connect(mapStateToProps, {login})(LoginPage)