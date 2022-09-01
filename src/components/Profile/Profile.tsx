import React from "react";
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionTypes, ProfilePageType} from "../../redux/store";


type ProfilePropsType = {
    profilePage: ProfilePageType
    dispatch: any
}

export const Profile = (props: ProfilePropsType) => {

    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts
                dispatch={props.dispatch}
                profilePage={props.profilePage}/>

        </div>
    )
}