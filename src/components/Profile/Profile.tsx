import React from "react";
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";


type ProfilePropsType = {
    profilePage: ProfilePageType
    addPost: (newPostText: string) => void
    updateNewPostText: (newPostText: string) => void
}

export const Profile = (props: ProfilePropsType) => {

    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts updateNewPostText={props.updateNewPostText}
                     addPost={props.addPost}
                     profilePage={props.profilePage}/>

        </div>
    )
}