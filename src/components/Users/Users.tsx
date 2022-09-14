import React from "react";
import styles from "./Users.module.css";
import {UsersPropsType} from "./UsersContainer";


export const Users = (props: UsersPropsType) => {

    const onUnfollowClickHandler = (userId:number) => {
        props.unFollowUserCallback(userId)
    }
    const onFollowClickHandler = (userId:number) => {
        props.unFollowUserCallback(userId)
    }

    if (props.usersPage.users.length ===0){
        props.setUsersCallback([
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
        ])
    }
    return (
        <div className={styles.isActive}>

            {props.usersPage.users.map(el => <div key={el.userId}>
                <span>
                    <div><img className={styles.useAvatar} src={el.userImgURL} alt=""/></div>
                    <div>{el.userFollowed
                        ? <button onClick={()=>onUnfollowClickHandler(el.userId)}>unfollow</button>
                        : <button onClick={()=>onFollowClickHandler(el.userId)}>follow</button>}
                        </div>
                </span>
                <span>
                    <span><div>{el.userFullName}</div>
                            <div>{el.userStatus}</div>
                    </span>
                    <span>
                        <div>{el.userLocation.country}</div>
                        <div>{el.userLocation.city}</div>
                    </span>
                </span>
            </div>)}
        </div>
    )
}


