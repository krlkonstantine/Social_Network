import React from 'react';
import styles from "./Users.module.css";
import {UserType} from "../../redux/redux-store";
import default_avatar from "../../assets/images/default_avatar.jpg";
import {InitialUsersStateType} from "../../redux/users-reducers";

type UserPropsType = {
    onPageChanged: (p: number) => void
    onUnfollowClickHandler: (id: number) => void
    onFollowClickHandler: (id: number) => void
    usersPage: InitialUsersStateType
    totalUsersCount: number
    pageSize: number
    currentPageNo: number
}
export const Users = (props: UserPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={styles.isActive}>
            <div>
                {pages.map(p => {
                    return <span onClick={() => props.onPageChanged(p)}
                                 className={p === props.currentPageNo ? styles.selectedPage : styles.pageNumber}>{p}</span>
                })}
            </div>
            {props.usersPage.users.map((el: UserType) => <div key={el.id}>
                <span>
                    <div><img className={styles.useAvatar} src={el.photos.small ? el.photos.small : default_avatar}
                              alt=""/></div>
                    <div>{el.followed
                        ? <button onClick={() => props.onUnfollowClickHandler(el.id)}>unfollow</button>
                        : <button onClick={() => props.onFollowClickHandler(el.id)}>follow</button>}
                        </div>
                </span>
                <span>
                    <span><div>{el.name}</div>
                            <div>{el.status}</div>
                    </span>
                    <span>
                        <div>'userCountry'</div>
                        <div>'userCity'</div>
                    </span>
                </span>
            </div>)}
        </div>
    );
};
