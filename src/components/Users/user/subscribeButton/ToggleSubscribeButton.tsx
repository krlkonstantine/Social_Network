import React, {MouseEvent} from 'react';
import s from './SubscrBtn.module.css';
import {UserType} from "../../Users";


export type PropsType = {
    user: UserType
    toggleFollow: (userId: React.MouseEvent<HTMLButtonElement>, followed: boolean) => void
    followingProgress: string[]
}


export const ToggleSubscribeButton = ({
                                          user,
                                          toggleFollow,
                                          followingProgress,
                                      }: PropsType) => {

    return (
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
    )
}