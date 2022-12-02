import React from "react";
import h from './Header.module.css';
import {NavLink} from "react-router-dom";

export const Header = () => {
    return (<header className={h.header}>
            <img
                src="https://banner2.cleanpng.com/20180715/zio/kisspng-logo-font-flame-logo-5b4b2d7c3b73e0.2237387315316535002435.jpg"
                alt="Logo depicting a fire"/>
            <div className={h.loginBlock}>
                <NavLink to={"/login"}>Login</NavLink>
            </div>
        </header>
    )
}