import React, {MouseEvent} from 'react';
import s from './User.module.css';
import {NavLink} from "react-router-dom";
import {UserType} from "../Users";


export type PropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    followingProgress: string[]
    setCurrentPage: (currentPage: number) => void
    defaultUserAvatar: string,
    toggleFollow: (userId: React.MouseEvent<HTMLButtonElement>, followed: boolean) => void
}


export const User = ({
                         users,
                         followingProgress,
                         toggleFollow,
                         defaultUserAvatar,
                     }: PropsType) => {

    return (
        <>
            {users.map(user => {
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
                        <div className={s.button}>
                            {user.followed ?
                                <button id={user.id}
                                        onClick={(e) => toggleFollow(e, user.followed)}
                                        disabled={followingProgress.some(id => id === user.id.toString())}
                                        className={s.unfollow}>UNFOLLOW</button>
                                : <button id={user.id}
                                          onClick={(e) => toggleFollow(e, user.followed)}
                                          disabled={followingProgress.some(id => id === user.id.toString())}
                                          className={s.follow}>FOLLOW</button>
                            }
                        </div>
                    </div>
                )
            })}
        </>
    )
}