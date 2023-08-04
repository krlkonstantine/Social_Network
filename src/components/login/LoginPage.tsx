import React from "react";
import s from './Login.module.css'
import Login from "./Login";

type LoginPageType = {

}

export const LoginPage = (props: LoginPageType) => {
    return <div className={s.loginPage}>
        <Login/>
    </div>
}

