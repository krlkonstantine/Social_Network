import React from 'react';
import s from '../Main.module.css';
import {MainImg} from "../MainImg/MainImg";
import {Profile} from "./Profile";
import {SendMyPostContainer} from "../Posts/SendMyPost/SendMyPostContainer";
import {Posts, PostType} from "../Posts/Posts";
import {ApiUserProfileType} from "../../../redux/reducers/profile-reducer";


type ProfilePageType = {
    profile: ApiUserProfileType | null
    posts: Array<PostType>
    status: string
    updateStatus: (value: string) => void
    isOwner: boolean
    uploadNewProfilePhoto: (photo: File) => void
}


export function ProfilePage(props: ProfilePageType) {

    return (
        <main className={s.main}>
            <MainImg/>
            <Profile profile={props.profile}
                     status={props.status}
                     updateStatus={props.updateStatus}
                     isOwner={props.isOwner}
                     uploadNewProfilePhoto={props.uploadNewProfilePhoto}
            />
            <SendMyPostContainer/>
            <Posts posts={props.posts}/>
        </main>


    )
}