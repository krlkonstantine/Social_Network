import React from 'react';
import styles from "./Users.module.css";
import {UserType} from "../../redux/redux-store";
import default_avatar from "../../assets/images/default_avatar.jpg";
import {InitialUsersStateType, setToggleFetching} from "../../redux/users-reducers";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {getSubscribed, getUnsubscribed} from "../api/api";


type UserPropsType = {
    onPageChanged: (p: number) => void
    onUnfollowClickHandler: (id: number) => void
    onFollowClickHandler: (id: number) => void
    setToggleFollowingAC: (isFetching: boolean, isFollowing: number[], userId: number) => void
    usersPage: InitialUsersStateType
    totalUsersCount: number
    pageSize: number
    currentPageNo: number
    isFollowing: number[]
}
export const Users = (props: UserPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    // @
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
                        ? <button disabled={props.isFollowing.some(id => id === el.id)} onClick={() => {
                            props.setToggleFollowingAC(true, props.isFollowing, el.id)
                            getUnsubscribed(el.id)
                                .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.onUnfollowClickHandler(el.id)
                                        }
                                        props.setToggleFollowingAC(false, props.isFollowing, el.id)
                                    }
                                )
                        }}>unfollow</button>

                        : <button disabled={props.isFollowing.some(id => id === el.id)} onClick={() => {
                            props.setToggleFollowingAC(true, props.isFollowing, el.id)
                            getSubscribed(el.id).then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.onFollowClickHandler(el.id)
                                    }
                                    props.setToggleFollowingAC(false, props.isFollowing, el.id)
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
