import React from 'react';
import styles from './Header.module.css';
import {NavLink} from "react-router-dom";
import {ReactComponent as SNLogo} from "../../assets/img/tg_icon.svg"

type HeaderType = {
    isAuth: boolean,
    login: string
    logout: () => void
}

export const Header = (props: HeaderType) => {
    return (
        <header className={styles.header}>
            <SNLogo className={styles.logo} />
            <div className={styles.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    )
}