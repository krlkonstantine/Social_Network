import React, {ChangeEvent, useEffect} from 'react';
import s from './Profile.module.css';
import {Preloader} from "../../../utils/preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus";
import {ApiUserProfileType} from "../../../redux/reducers/profile-reducer";

export type  ProfileType = {
    title: string
    aboutMe: string
    contacts: {
        github: string | null
        facebook: string | null
        website: string | null
        vk: string | null
        twitter: string | null
        instagram: string | null
        youtube: string | null
        mainLink: string | null
    }
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    photos: {
        small: string | null
        large: string | null
    }
    userId: number | null
    followed: boolean,
    uniqueUrlName: string

}

export type ProfilePropsType = {
    profile: ApiUserProfileType | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    uploadNewProfilePhoto: (photo: File) => void
}

export function Profile({profile, status, updateStatus, isOwner, uploadNewProfilePhoto}: ProfilePropsType) {
    const avatar = "https://icons.iconarchive.com/icons/iconarchive/incognito-animal-2/512/Deer-icon.png"

    const onMainPhotoUpload = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            uploadNewProfilePhoto(e.target.files[0])
        }
    }


    if (profile) return (
        <div key={profile.userId} className={s.profile}>
            <img className={s.profile__avatar} alt={'avatar'}
                 src={profile.photos.small || avatar}/>
            {isOwner && <input type={"file"} onChange={onMainPhotoUpload}/>}
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
