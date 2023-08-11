import React from 'react';
import s from './Profile.module.css';
import {Preloader} from "../../../utils/preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus";

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

export function Profile({profile, status, updateStatus}: ProfilePropsType) {
    const avatar = "https://icons.iconarchive.com/icons/iconarchive/incognito-animal-2/512/Deer-icon.png"

    if (profile) return (
        <div key={profile.userId} className={s.profile}>
            <img className={s.profile__avatar} alt={'avatar'}
                 src={profile.photos.small || avatar}/>
            <div className={s.profile__data}>
                <h3 className={s.profile__title}>{profile.fullName}</h3>
                <ProfileStatus status={status} updateStatus={updateStatus}/>
                <div>Обо мне: {profile.aboutMe}</div>
                <h4>{profile.lookingForAJob ? 'Ищу работу' : 'Уже работаю'}</h4>
                {profile.lookingForAJob &&
                    <div className={s.profile__descr}>{profile.lookingForAJobDescription}</div>}
            </div>
        </div>
    )
    else return <Preloader/>
}
