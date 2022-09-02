import React, {Dispatch} from "react";
import s from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/store";
import {ActionsType} from "../../redux/redux-store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";


type ProfilePropsType = {
    profilePage: ProfilePageType
    dispatch: Dispatch<ActionsType>
}

export const Profile = (props: ProfilePropsType) => {

    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPostsContainer
                dispatch={props.dispatch}
                profilePage={props.profilePage}/>

        </div>
    )
}