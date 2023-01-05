import React from 'react';
import s from './Login.module.css'

type LoginPropsType = {

}

export const Login = (props:LoginPropsType) => {
    return (
        <div className={s.loginPage}>
            <div className={s.loginContainer}>
                <div className={s.loginText}>Login</div>
                <input className={s.loginInput} placeholder={"login or email"} type="text"/>
            </div>
            <div className={s.loginContainer}>
                <div className={s.loginText}>Password</div>
                <input className={s.loginInput} placeholder={"you pass, baby"} type="password"/>
            </div>
            <button className={s.loginButton}>Log In</button>
        </div>
    );
};
