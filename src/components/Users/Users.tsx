import React from 'react';
import styles from "./Users.module.css";
import {UserType} from "../../redux/redux-store";
import default_avatar from "../../assets/images/default_avatar.jpg";
import {InitialUsersStateType} from "../../redux/users-reducers";
import {NavLink} from "react-router-dom";
import axios from "axios";


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
                    <div>
                        <NavLink to={'/profile/' + el.id}>
                        <img className={styles.useAvatar} src={el.photos.small ? el.photos.small : default_avatar}
                             alt=""/>
                        </NavLink>
                    </div>
                    <div>{el.followed
                        ? <button onClick={() => {
                            axios.delete<any>(`https://social-network.samuraijs.com/api/1.0//follow/${el.id}`, {
                                withCredentials: true,
                                headers: {
                                    "API-KEY": "1e9519c8-eb9a-4811-b847-4ddb840b0506"
                                }
                            })
                                .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.onUnfollowClickHandler(el.id)
                                        }
                                    }
                                )

                        }}>unfollow</button>
                        : <button onClick={() => {
                            //в get запросе мы передавали withCredentials с нашими настройками как вторым арг
                            //сейчас же он будет третим, вторым идет пустой obj
                            axios.post<any>(`https://social-network.samuraijs.com/api/1.0//follow/${el.id}`, {}, {
                                withCredentials: true,
                                headers: {
                                    "API-KEY": "1e9519c8-eb9a-4811-b847-4ddb840b0506"
                                }
                            })
                                .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.onFollowClickHandler(el.id)
                                        }
                                    }
                                )

                        }}>follow</button>}
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
