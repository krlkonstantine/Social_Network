import React, {ChangeEvent, useEffect, useState} from "react";
import s from "./Profile.module.css";

type Props = {
    status: string
    updateStatus: (status: string) => void
}

export const ProfileStatusNew = (props: Props) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [newStatus, setNewStatus] = useState<string>(props.status)

    useEffect(() => {
        setNewStatus(props.status)
        
    }, [props.status])

    const activateEitMode = () => {
        setEditMode(true)
    }
    const deactivateEitMode = () => {
        setEditMode(false)
        props.updateStatus(newStatus.toString())

    }

    const onStatusInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewStatus(e.currentTarget.value)
    }

    return (
        <div className={s.profile__descr}>
            {editMode
                ? <input autoFocus={true}
                         onBlur={deactivateEitMode}
                         value={newStatus}
                         onChange={onStatusInputChange}
                />
                : <span onDoubleClick={activateEitMode}>
                        {props.status || 'status not found'}
                </span>
            }
        </div>
    );
};
