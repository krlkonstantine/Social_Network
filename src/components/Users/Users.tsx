import React, {Dispatch} from "react";
import dlg from "../Dialogs/Dialogs.module.css";
import {FriendType, UserType} from "../../redux/redux-store";


type UsersPageType = {
    //friends: FriendType[]
    followUserCallback: (userId:number)=> void
    unFollowUserCallback: (userId:number)=> void
    setUsersCallback: (users:UserType[])=> void
}


export const Users = (props: UsersPageType) => {
    let users: UserType[] = [
        {
            userId: 1,
            userFollowed: true,
            userFullName: 'Timur Smirnov',
            userStatus: 'Practicing yoga',
            userLocation: {country: 'Belarus', city: 'Minsk'}
        },
        {
            userId: 2,
            userFollowed: true,
            userFullName: 'Alexander Popov',
            userStatus: 'Looking for a  girlfriend',
            userLocation: {country: 'France', city: 'Paris'}
        },
        {
            userId: 3,
            userFollowed: false,
            userFullName: 'Vadim Stinga',
            userStatus: 'Spending time with my baby',
            userLocation: {country: 'Moldova', city: 'Balts'}
        },
        {
            userId: 4,
            userFollowed: true,
            userFullName: 'Nastasiale Emotsionale',
            userStatus: 'Getting ready for an Ayahuasca session',
            userLocation: {country: 'Germany', city: 'Düsseldorf'}
        },
        {
            userId: 5,
            userFollowed: true,
            userFullName: 'Viktor Kushnirov',
            userStatus: 'Playing in a rock band',
            userLocation: {country: 'Moldova', city: 'Soroca'}
        },
        {
            userId: 6,
            userFollowed: false,
            userFullName: 'Nicu Gagiu',
            userStatus: 'Cutting people for treatment reasons',
            userLocation: {country: 'Moldova', city: 'Kishinau'}
        },
        {
            userId: 7,
            userFollowed: false,
            userFullName: 'Vlad Filipenko',
            userStatus: 'Looking for a spiritual teacher',
            userLocation: {country: 'Transnistria', city: 'Rybnitsa'}
        },
        {
            userId: 8,
            userFollowed: false,
            userFullName: 'Dmitry Rabiy',
            userStatus: 'Trying t be the best doctor',
            userLocation: {country: 'Moldova', city: 'Kishinau'}
        },
    ]

let usersElement = users.map(el=>el.userFullName)
    return (

        <div className={dlg.isActive}>
            {usersElement}
        </div>
    )
}

/*const UserItem = (props: FriendType) => {
    return (
        <div>
            {users.userFullName}
        </div>
    )
}*/

