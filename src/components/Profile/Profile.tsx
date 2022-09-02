import React, {Dispatch} from "react";
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/store";
import {ActionsType} from "../../redux/redux-store";


type ProfilePropsType = {
    profilePage: ProfilePageType
    dispatch: Dispatch<ActionsType>
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