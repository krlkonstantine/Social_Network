import React from "react";
import pf from './ProfileInfo.module.css';

export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT-_mIfmXfxZydIr5sSyiVu6p_LMiG6L8ZDw&usqp=CAU"
                    alt=""/>
            </div>
            <div className={pf.profileInfoDescriptionBlock}>
                avaatar + description
            </div>
        </div>
    )
}