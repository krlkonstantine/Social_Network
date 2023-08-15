import React, {MouseEvent} from 'react';
import s from './User.module.css';
import {NavLink} from "react-router-dom";
import {UserType} from "../Users";
import {ToggleSubscribeButton} from "./subscribeButton/ToggleSubscribeButton";


export type PropsType = {
    user: UserType
    pageSize: number
    currentPage: number
    followingProgress: string[]
    setCurrentPage: (currentPage: number) => void
    defaultUserAvatar: string,
    toggleFollow: (userId: React.MouseEvent<HTMLButtonElement>, followed: boolean) => void
}


export const
    User = ({
                user,
                defaultUserAvatar,
                ...props
            }: PropsType) => {

        return (
            <div key={user.id} className={s.users}>
                <NavLink to={'/profile/' + user.id}>
                    <img alt={'avatar'}
                         className={s.avatar}
                         src={user.photos.small || defaultUserAvatar}/>
                </NavLink>
                <div className={s.info}>
                    <div className={s.descr}>
                        <span>{user.name}</span>
                        <p>{user.status}</p>
                    </div>
                    <div className={s.adres}>
                        <span>{user.location?.city}</span>
                        <p>{user.location?.country}</p>
                    </div>
                </div>
                <ToggleSubscribeButton user={user}
                                       toggleFollow={props.toggleFollow}
                                       followingProgress={props.followingProgress}/>
            </div>
        )
    }