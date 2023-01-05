import React from "react";
import s from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/redux-store";
import {Navigate} from "react-router-dom";


type ProfilePropsType = {
    userProfilePage: ProfileType
    isAuth:boolean
}

export const Profile = (props: ProfilePropsType) => {

    return (
        <div className={s.content}>
            <ProfileInfo userProfilePage={props.userProfilePage}/>
            <MyPostsContainer/>
        </div>
    )
}