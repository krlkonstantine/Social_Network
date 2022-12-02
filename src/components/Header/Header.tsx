import React from "react";
import h from './Header.module.css';
import {NavLink} from "react-router-dom";

type HeaderPropType = any

export const Header = (props: HeaderPropType) => {
    return (<header className={h.header}>
            <img
                src="https://banner2.cleanpng.com/20180715/zio/kisspng-logo-font-flame-logo-5b4b2d7c3b73e0.2237387315316535002435.jpg"
                alt="Logo depicting a fire"/>
        {props.isAuth
            ? <div className={h.loginDisplayer}>{props.login}</div>
            : <div className={h.loginBlock}>
            <NavLink to={"/login"}>Login</NavLink>
        </div>
        }

        </header>
    )
}