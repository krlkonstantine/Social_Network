import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './Profile.module.css';
import {Preloader} from "../../../utils/preloader/Preloader";
import {EditableSpan} from "../../common/EditableSpan/EditableSpan";
import {ApiUserProfileType} from "../../../redux/reducers/profile-reducer";
import {EditProfileDataReduxForm, ProfileDataForm} from "./ProfileDataForm/ProfileDataForm";

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
    const [editMode, setEditMode] = useState<boolean>(false)

    const defaultAvatar = "https://icons.iconarchive.com/icons/iconarchive/incognito-animal-2/512/Deer-icon.png"
    const onMainPhotoUpload = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            uploadNewProfilePhoto(e.target.files[0])
        }
    }
    const toggleEditMode = () => {
        setEditMode(!editMode)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
    }

    const saveNewProfileInfo = () => {

    }

    if (profile) return (
        <div key={profile.userId} className={s.profile}>
            <div className={s.profileImgContainer}>
                <EditableSpan value={status} updateValue={updateStatus}/>
                <img className={s.profile__avatar} alt={'avatar'}
                     src={profile.photos.small || defaultAvatar}/>
                {isOwner && <input type={"file"} onChange={onMainPhotoUpload}/>}
            </div>
            <div className={s.profileInfoContainer}>
                {editMode ? <EditProfileDataReduxForm initialValues={profile} onSubmit={saveNewProfileInfo}/> :
                    <ProfileData profile={profile}/>}
                <button className={s.editProfileBtn}
                        onClick={toggleEditMode}>{editMode ? "Save changes" : "Edit Profile"}</button>
            </div>
        </div>
    )
    else return <Preloader/>
}

type ProfileDataProps = {
    profile: ApiUserProfileType
}

const ProfileData = ({profile}: ProfileDataProps) => {
    return (
        <div className={s.profileInfoContainer}>
            <div className={s.profile__title}>{profile.fullName}</div>
            <div><span>Обо мне:</span> {profile.aboutMe}</div>
            <div><span>Ищу работу:</span> {profile.lookingForAJob ? 'Да' : 'Уже работаю'}</div>
            {profile.lookingForAJob &&
                <div className={s.profile__descr}>My skills:{profile.lookingForAJobDescription}</div>}
            <div>Обо мне: {profile.aboutMe}</div>
            <div><span>Contacts:</span>
                <div><span>Tg:</span>{profile.contacts.mainLink}</div>
                <div><span>Git:</span>{profile.contacts.github}</div>
                <div><span>Fb:</span>{profile.contacts.facebook}</div>
                <div><span>Vk:</span>{profile.contacts.vk}</div>
            </div>
        </div>
    )
}

