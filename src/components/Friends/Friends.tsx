import React from "react";
import dlg from "../Dialogs/Dialogs.module.css";
import {FriendsTyPe} from "../../redux/state";

type FriendsItemType = {
    friends: Array<FriendsTyPe>
}


export const Friends = (props: FriendsItemType) => {

    let friendElements = props.friends.map(f => <FriendsItem name={f.name} id={f.id}/>)


    return (
        <div className={dlg.isActive}>
            {friendElements}
        </div>
    )
}


const FriendsItem = (props: FriendsTyPe) => {
    return (
        <div>
            {props.name}
        </div>
    )
}