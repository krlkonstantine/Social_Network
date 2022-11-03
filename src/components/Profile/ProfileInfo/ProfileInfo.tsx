import React from "react";
import pf from './ProfileInfo.module.css';
import {Preloader} from "../../common/Preloader/Preloader";

type ProfileInfoPropsType = {
    userProfilePage: any
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (!props.userProfilePage) {
        return <Preloader/>
    }

    return (

        <div>
            <div>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT-_mIfmXfxZydIr5sSyiVu6p_LMiG6L8ZDw&usqp=CAU"
                    alt=""/>
            </div>
            <div className={pf.profileInfoDescriptionBlock}>
                <img alt="avatar" src={props.userProfilePage?.photos?.large}/>
                avatar + description
            </div>
        </div>
    )
}