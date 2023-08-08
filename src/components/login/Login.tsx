import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {maxLengthTC, required} from "../../utils/validators/validaqtors";
import {connect} from "react-redux";
import {login} from "../../redux/reducers/auth-reducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";
import s from './../common/FormsControls/FormsControls.module.css'
import {Preloader} from "../../utils/preloader/Preloader";

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    error: string
}
type LoginType = {
    isAuth: boolean
    preloader: boolean
    login: (email: string, password: string, rememberMe: boolean) => void
    error?: string
}

const maxLength20 = maxLengthTC(20)

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={'email'}
                   name={'email'}
                   component={Input}
                   validate={[required, maxLength20]}
            />
        </div>
        <div>
            <Field placeholder={'Password'}
                   name={'password'}
                   type={'password'}
                   component={Input}
                   validate={[required, maxLength20]}
            />
        </div>
        <div>
            <Field type={'checkbox'}
                   name={'rememberMe'}
                   component={'input'}
            /> remember me
        </div>

        {
            props.error && <div className={s.formSummaryError}>qqqqq {props.error}</div>}
        <div>
            <button>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)
const Login = (props: LoginType) => {

    const onSubmit = (formData: FormDataType) => {
        const {email, password, rememberMe} = formData
        props.login(email, password, rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    if (props.preloader) return <Preloader/>
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    preloader: state.preloader.preloader,
})

export default connect(mapStateToProps, {login})(Login)

