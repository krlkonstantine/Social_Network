import React from "react";
import dlg from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";


type DialogItemPropsType = {
    name: string
    id: number

}

export const DialogItem = (props: DialogItemPropsType) => {
    return (
        <div>
            <NavLink className={({isActive}) => isActive ? `${dlg.active}` : `${dlg.dialog}`}
                     to={"/dialogs/" + props.id}>
                {props.name} </NavLink>
        </div>
    )
}




