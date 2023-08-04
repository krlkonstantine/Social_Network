import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

type HeaderType = {
    isAuth: boolean,
    login: string
    logout: () => void
}

export const Header = (props: HeaderType) => {
    return (
        <header className={s.header}>
            <img alt={'logo'}
                 className={s.logo}
                 src="https://img.freepik.com/premium-vector/colorful-elephant-zentangle-arts-isolated-black-background_122297-2007.jpg"/>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    )
}