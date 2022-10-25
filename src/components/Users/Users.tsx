import React from "react";
import styles from "./Users.module.css";
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";
import {UserType} from "../../redux/redux-store";
import  default_avatar from '../../assets/images/default_avatar.jpg'


export const Users = (props: UsersPropsType) => {

    const onUnfollowClickHandler = (userId:number) => {
        props.unFollowUserCallback(userId)
    }
    const onFollowClickHandler = (userId:number) => {
        props.followUserCallback(userId)
    }
    if (props.usersPage.users.length ===0){
        axios.get<any>('https://social-network.samuraijs.com/api/1.0/users').then(response =>{
            props.setUsersCallback(response.data.items)
        })
        /*props.setUsersCallback([
            {
                userId: 1,
                userImgURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo3bPjZ2rUluAWsPaZpcYUkjCVozuYupnxNg&usqp=CAU",
                userFollowed: true,
                userFullName: 'Timur Smirnov',
                userStatus: 'Practicing yoga',
                userLocation: {country: 'Belarus', city: 'Minsk'}
            },
            {
                userId: 2,
                userImgURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo3bPjZ2rUluAWsPaZpcYUkjCVozuYupnxNg&usqp=CAU",
                userFollowed: true,
                userFullName: 'Alexander Popov',
                userStatus: 'Looking for a  girlfriend',
                userLocation: {country: 'France', city: 'Paris'}
            },
            {
                userId: 3,
                userImgURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo3bPjZ2rUluAWsPaZpcYUkjCVozuYupnxNg&usqp=CAU",
                userFollowed: false,
                userFullName: 'Vadim Stinga',
                userStatus: 'Spending time with my baby',
                userLocation: {country: 'Moldova', city: 'Balts'}
            },
        ])*/
    }
    return (
        <div className={styles.isActive}>

            {props.usersPage.users.map(el => <div key={el.id}>
                <span>
                    <div><img className={styles.useAvatar} src={el.photos.small ? el.photos.small : default_avatar} alt=""/></div>
                    <div>{el.followed
                        ? <button onClick={()=>onUnfollowClickHandler(el.id)}>unfollow</button>
                        : <button onClick={()=>onFollowClickHandler(el.id)}>follow</button>}
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


