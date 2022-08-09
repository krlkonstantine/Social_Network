import React from "react";
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionTypes, ProfilePageType} from "../../redux/state";


type ProfilePropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionTypes) => void
    /*
    addPost: (newPostText: string) => void
    updateNewPostText: (newPostText: string) => void*/
}

export const Profile = (props: ProfilePropsType) => {

    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts
                //updateNewPostText={props.updateNewPostText}
                //addPost={props.dispatch}
                dispatch={props.dispatch}
                profilePage={props.profilePage}/>

        </div>
    )
}