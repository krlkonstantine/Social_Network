import React from "react";
import s from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/redux-store";


type ProfilePropsType = {
    userProfilePage: any
}

export const Profile = (props: ProfilePropsType) => {

    return (
        <div className={s.content}>
            <ProfileInfo userProfilePage={props.userProfilePage}/>
            <MyPostsContainer/>

        </div>
    )
}