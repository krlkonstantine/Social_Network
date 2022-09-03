import React from "react";
import dlg from "../Dialogs/Dialogs.module.css";
import {FriendsType} from "../../redux/store";
import {StoreContext} from "../../StoreContext";

type FriendsItemType = {}

export const Friends = (props: FriendsItemType) => {

    return (
        <StoreContext.Consumer>
            {
                (value) => {
                    let friendElements = value.getState().friends.map(f => <FriendsItem name={f.name} id={f.id}/>)
                    return <div className={dlg.isActive}>
                        {friendElements}
                    </div>
                }
            }
        </StoreContext.Consumer>

    )
}

const FriendsItem = (props: FriendsType) => {
    return (
        <div>
            {props.name}
        </div>
    )
}