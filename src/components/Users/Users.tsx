import React, {Dispatch} from "react";
import dlg from "../Dialogs/Dialogs.module.css";
import {FriendType} from "../../redux/redux-store";


type FriendsItemType = {
    friends: FriendType[]
}


export const Users = (props: FriendsItemType) => {
    let friendElements = props.friends.map(f => <FriendsItem name={f.name} id={f.id}/>)

    return (

        <div className={dlg.isActive}>
            {friendElements}
        </div>
    )
}

const FriendsItem = (props: FriendType) => {
    return (
        <div>
            {props.name}
        </div>
    )
}

