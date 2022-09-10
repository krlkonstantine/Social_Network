import React, {Dispatch} from "react";
import dlg from "../Dialogs/Dialogs.module.css";
import {FriendsType} from "../../redux/store";


type FriendsItemType = {
    friends: FriendsType[]
}


export const Friends = (props: FriendsItemType) => {
    let friendElements = props.friends.map(f => <FriendsItem name={f.name} id={f.id}/>)

    return (

        <div className={dlg.isActive}>
            {friendElements}
        </div>
    )
}

const FriendsItem = (props: FriendsType) => {
    return (
        <div>
            {props.name}
        </div>
    )
}

