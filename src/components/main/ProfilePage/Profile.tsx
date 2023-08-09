import React from 'react';
import s from './Profile.module.css';
import ProfileStatus from "./ProfileStatus";
import {Preloader} from "../../../utils/preloader/Preloader";
import {ProfileStatusNew} from "./ProfileStatus_New";

export type  ProfileType = {
    aboutMe: string
    contacts: {
        facebook: string | null
        website: string | null
        vk: string | null
        twitter: string | null
        instagram: string | null
    }
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    photos: {
        small: string | null
        large: string | null
    }
    userId: number
}

type ProfilePropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
}

export function Profile(props: ProfilePropsType) {
    const avatar = "https://icons.iconarchive.com/icons/iconarchive/incognito-animal-2/512/Deer-icon.png"

    if (props.profile) return (
        <div key={props.profile.userId} className={s.profile}>
            <img className={s.profile__avatar} alt={'avatar'}
                 src={props.profile.photos.small || avatar}/>
            <div className={s.profile__data}>
                <h3 className={s.profile__title}>{props.profile.fullName}</h3>
                <ProfileStatusNew status={props.status} updateStatus={props.updateStatus}/>
                <div>Обо мне: {props.profile.aboutMe}</div>
                <h4>{props.profile.lookingForAJob ? 'Ищу работу' : 'Уже работаю'}</h4>
                {props.profile.lookingForAJob &&
                    <div className={s.profile__descr}>{props.profile.lookingForAJobDescription}</div>}
            </div>
        </div>
    )
    else return <Preloader/>
}
