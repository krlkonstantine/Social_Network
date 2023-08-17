import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {maxLengthTC, required} from "../../utils/validators/validaqtors";
import {login} from "../../redux/reducers/auth-reducer";
import s from './../common/FormsControls/FormsControls.module.css'

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    error: string
    captchaURL: string | null
}

export type LoginOwnType = {
    captchaUrl: string | null
}
export type LoginFormType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}
const maxLength20 = maxLengthTC(20)

const LoginForm: React.FC<InjectedFormProps<LoginFormType, LoginOwnType> & LoginOwnType> = ({
                                                                                                handleSubmit,
                                                                                                error,
                                                                                                ...restProps
                                                                                            }) => {
    return <form onSubmit={handleSubmit}>
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
        <div style={{display: "flex", flexDirection: "column", marginBottom: "-20px"}}>
            <p style={{margin: "0 0 10px 20px"}}>Captcha:</p>
            <Field
                placeholder={"Enter symbols"}
                type={"text"}
                name={"captcha"}
                component={Input}
                error={error ? "Please enter valid Captcha" : ""}
            />
        </div>

        {error && <div className={s.formSummaryError}>{error}</div>}
        <div>
            <button>Login</button>
        </div>
    </form>
}

export const LoginReduxForm = reduxForm<LoginFormType, LoginOwnType>({form: 'login'})(LoginForm)

