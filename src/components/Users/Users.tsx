import React from "react";
import styles from "./Users.module.css";
import axios from "axios";
import {UserType} from "../../redux/redux-store";
import default_avatar from '../../assets/images/default_avatar.jpg'
import {InitialUsersStateType} from "../../redux/users-reducers";

type StateType = {
    usersPage: InitialUsersStateType
    pageSize: number
    totalUsersCount: number
    currentPageNo: number
}

type OwnPropsType = {
    usersPage: InitialUsersStateType
}

type MapStateToPropsType = {
    usersPage: InitialUsersStateType
    pageSize: number
    totalUsersCount: number
    currentPageNo: number
}

type MapDispatchToPropsType = {
    followUserCallback: (userId: number) => void
    unFollowUserCallback: (userId: number) => void
    setUsersCallback: (users: UserType[]) => void
}

type usersPropsType = OwnPropsType & MapStateToPropsType & MapDispatchToPropsType


export class Users extends React.Component<usersPropsType, StateType> {

    constructor(props: usersPropsType) {
        super(props)
    }

    onUnfollowClickHandler = (userId: number) => {
        this.props.unFollowUserCallback(userId)
    }
    onFollowClickHandler = (userId: number) => {
        this.props.followUserCallback(userId)
    }

    componentDidMount() {
        axios.get<any>('https://social-network.samuraijs.com/api/1.0/users/')
            .then(response => this.props.setUsersCallback(response.data.items))
    }

    render() {

        let pagesCount  = Math.ceil( this.props.totalUsersCount / this.props.pageSize)
        let pages = []

        for (let i=1;i<=pagesCount;i++){
            pages.push(i)
        }

        return (
            <div className={styles.isActive}>
                <div>
                    {pages.map(p => {
                       return <span className={ p === this.props.currentPageNo ? styles.selectedPage : styles.pageNumber}>{p}</span>
                    })}
                </div>
                {this.props.usersPage.users.map((el: UserType) => <div key={el.id}>
                <span>
                    <div><img className={styles.useAvatar} src={el.photos.small ? el.photos.small : default_avatar}
                              alt=""/></div>
                    <div>{el.followed
                        ? <button onClick={() => this.onUnfollowClickHandler(el.id)}>unfollow</button>
                        : <button onClick={() => this.onFollowClickHandler(el.id)}>follow</button>}
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
        )
    }
}

