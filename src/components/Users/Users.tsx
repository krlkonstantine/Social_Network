import React from "react";
import styles from "./Users.module.css";
import axios from "axios";
import {UserType} from "../../redux/redux-store";
import  default_avatar from '../../assets/images/default_avatar.jpg'
import {InitialUsersStateType} from "../../redux/users-reducers";

type StateType = {
    usersPage: InitialUsersStateType
}

type OwnPropsType = {
    usersPage: InitialUsersStateType
}

type MapStateToPropsType = {
    usersPage: InitialUsersStateType
}

type MapDispatchToPropsType = {
    followUserCallback: (userId: number) => void
    unFollowUserCallback: (userId: number) => void
    setUsersCallback: (users:UserType[]) => void
}

type usersPropsType = OwnPropsType & MapStateToPropsType & MapDispatchToPropsType


export class Users extends React.Component<usersPropsType, StateType>{


    onUnfollowClickHandler = (userId:number) => {
        this.props.unFollowUserCallback(userId)
    }
    onFollowClickHandler = (userId:number) => {
        this.props.followUserCallback(userId)
    }
    onShowUsersClickHandler = () => {
        if (this.props.usersPage.users.length ===0) {
            axios.get<any>('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                this.props.setUsersCallback(response.data.items)
            })
        }
    }

    render(){
        return(
        <div className={styles.isActive}>
            <button onClick={this.onShowUsersClickHandler}>Show Users</button>

            {this.props.usersPage.users.map((el:UserType) => <div key={el.id}>
                <span>
                    <div><img className={styles.useAvatar} src={el.photos.small ? el.photos.small : default_avatar} alt=""/></div>
                    <div>{el.followed
                        ? <button onClick={()=>this.onUnfollowClickHandler(el.id)}>unfollow</button>
                        : <button onClick={()=>this.onFollowClickHandler(el.id)}>follow</button>}
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

