import React from "react";
import preloader from './img/spinner.gif'
import s from './Preloader.module.css'

export const Preloader = () => {
    return (
        <div className={s.preloaderContainer}>
            <img src={preloader} alt="preloader"/>
        </div>
    )
}