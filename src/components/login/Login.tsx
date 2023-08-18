import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {maxLengthTC, required} from "../../utils/validators/validaqtors";
import {login} from "../../redux/reducers/auth-reducer";
import s from './../common/FormsControls/FormsControls.module.css'


export type LoginOwnType = {
    captchaURL: string | null
}
export type LoginFormType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}
//созд.переменную чтобы изежать magic number
const maxLength20 = maxLengthTC(20)

// LoginFormType - тип данных формы,
// а LoginOwnType - пользовательские пропсы для компонента.
// используется для доп пропсов, в нашем случае капча.
// таким образм, компонент вернет все эти поля
// и мы сможем их задиспатчить в логине

const LoginForm: React.FC<InjectedFormProps<LoginFormType, LoginOwnType> & LoginOwnType> = ({
                                                                                                handleSubmit, error,
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
        {restProps.captchaURL &&
            <div className={s.captchaImgContainer}
                 style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <p style={{margin: "0 0 10px 20px"}}>Enter anti-bot symbols:</p>
                <img src={restProps.captchaURL} style={{width: "150px", height: "auto",}} alt="anti-bot symbols"/>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <Field
                        placeholder={"Enter symbols"}
                        type={"text"}
                        name={"captcha"}
                        component={Input}
                        validate={[required, maxLength20]}
                        error={error ? "Please enter valid Captcha" : ""}
                    />
                </div>
            </div>}

        {error && <div className={s.formSummaryError}>{error}</div>}
        <div>
            <button>Login</button>
        </div>
    </form>
}


//Этот код экспортирует обернутую react-final-form-компонент ReduxForm,
// которая представляет форму входа (LoginForm). При этом указано,
// что форма будет использовать имя 'login'. Указаны типы
// LoginFormType и LoginOwnType, которые задают типы
// для пропсов формы и собственных пропсов компонента, соответственно.

export const LoginReduxForm = reduxForm<LoginFormType, LoginOwnType>({
    form: 'login'
})(LoginForm)

