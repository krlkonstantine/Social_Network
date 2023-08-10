import React, {MouseEvent} from 'react';
import s from './Users.module.css';
import {NavLink} from "react-router-dom";


export type UserType = {
    id: string
    photos: {
        small: string | null
        large: string | null
    }
    followed: boolean
    name: string
    status: string | null
    location?: {
        country: string
        city: string
    }
}

export type UsersType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    followingProgress: string[]
    setCurrentPage: (currentPage: number) => void
    // followUser: (userId: string) => void
    // unfollowUser: (userId: string) => void
    toggleFollowUser: (userId: string, followed: boolean) => void
}


export const Users = (props: UsersType) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= 10; i++) {
        pages.push(i)
    }
    const defaultUserAvatar = 'https://icons.iconarchive.com/icons/iconarchive/incognito-animal-2/72/Cat-icon.png'

    // const unfollow = (e: MouseEvent<HTMLButtonElement>) => {
    //     const userId = e.currentTarget.id
    //     props.unfollowUser(userId)
    //
    // }
    //
    // const follow = (e: MouseEvent<HTMLButtonElement>) => {
    //     const userId = e.currentTarget.id
    //     props.followUser(userId)
    //
    // }

    const toggleFollow = (e: MouseEvent<HTMLButtonElement>, followed: boolean) => {
        const userId = e.currentTarget.id
        props.toggleFollowUser(userId, followed)

    }


    return (
        <div className={s.wrapper}>
            <div className={s.pages}>
                {pages.map(p => {
                    return <span key={p} id={String(p)}
                                 className={props.currentPage === p ? s.selectedPage : ''}
                                 onClick={() => props.setCurrentPage(p)}
                    >{p}</span>
                })}
                {pagesCount > 10 && <div className={s.pages}>
                    <span>...</span>
                    <span id={String(pagesCount)}
                          onClick={() => props.setCurrentPage(pagesCount)}
                          className={props.currentPage === pagesCount ? s.selectedPage : ''}
                    >{pagesCount}</span>
                </div>}
            </div>
            {props.users.map(user => {
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
                                        disabled={props.followingProgress.some(id => id === user.id.toString())}
                                        className={s.unfollow}>UNFOLLOW</button>
                                : <button id={user.id}
                                    //onClick={follow}
                                          onClick={(e) => toggleFollow(e, user.followed)}
                                          disabled={props.followingProgress.some(id => id === user.id.toString())}
                                          className={s.follow}>FOLLOW</button>
                            }
                        </div>
                    </div>
                )
            })}
            <button className={s.seeMore}>SEE MORE</button>
        </div>
    )
}