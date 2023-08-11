import React, {MouseEvent} from 'react';
import s from './Users.module.css';
import {Pagination} from "../common/Paginator/Pagination";
import {User} from "./user/User";


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
    toggleFollowUser: (userId: string, followed: boolean) => void
}


export const Users = ({
                          users,
                          pageSize,
                          totalUsersCount,
                          currentPage,
                          followingProgress,
                          setCurrentPage,
                          toggleFollowUser
                      }: UsersType) => {

    const defaultUserAvatar = 'https://icons.iconarchive.com/icons/iconarchive/incognito-animal-2/72/Cat-icon.png'

    const toggleFollow = (e: MouseEvent<HTMLButtonElement>, followed: boolean) => {
        const userId = e.currentTarget.id
        toggleFollowUser(userId, followed)
    }

    return (
        <div className={s.wrapper}>
            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage}
                        pageSize={pageSize} totalUsersCount={totalUsersCount}/>
            {users.map(user => {
                return (
                    <User user={user}
                          currentPage={currentPage}
                          setCurrentPage={setCurrentPage}
                          pageSize={pageSize}
                          defaultUserAvatar={defaultUserAvatar}
                          followingProgress={followingProgress}
                          toggleFollow={toggleFollow}
                    />
                )
            })}
            <button className={s.seeMore}>SEE MORE</button>
        </div>
    )
}