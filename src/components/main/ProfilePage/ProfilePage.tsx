import React from 'react';
import s from '../Main.module.css';
import {MainImg} from "../MainImg/MainImg";
import {Profile, ProfileType} from "./Profile";
import {SendMyPostContainer} from "../SendMyPost/SendMyPostContainer";
import {Posts, PostType} from "../Posts/Posts";


type  ProfilePageType = {
    profile: ProfileType | null
    posts: Array<PostType>
    status: string
    updateStatus: (status: string) => void
}


export function ProfilePage(props: ProfilePageType) {

    return (
        <main className={s.main}>
            <MainImg/>
            <Profile profile={props.profile}
                     status={props.status}
                     updateStatus={props.updateStatus}
            />
            <SendMyPostContainer/>
            <Posts posts={props.posts}/>
        </main>


    )
}