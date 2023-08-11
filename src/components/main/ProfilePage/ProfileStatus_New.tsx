import React, {ChangeEvent, useEffect, useState} from "react";
import s from "./Profile.module.css";

type Props = {
    status: string
    updateStatus: (status: string) => void
}

export const ProfileStatusNew = ({status, updateStatus}: Props) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [newStatus, setNewStatus] = useState<string>(status)

    useEffect(() => {
        setNewStatus(status)

    }, [status])

    const activateEitMode = () => {
        setEditMode(true)
    }
    const deactivateEitMode = () => {
        setEditMode(false)
        updateStatus(newStatus.toString())

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
                        {status || 'status not found'}
                </span>
            }
        </div>
    );
};
