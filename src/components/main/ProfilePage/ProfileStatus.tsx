import React, {ChangeEvent, useEffect, useState} from "react";
import s from "./Profile.module.css";

type Props = {
    status: string
    updateStatus: (status: string) => void
}

export const ProfileStatus = ({status, updateStatus}: Props) => {
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
        <div data-testid={'status-span'} className={s.profile__descr}>
            {editMode
                ? <input autoFocus={true}
                         onBlur={deactivateEitMode}
                         value={newStatus}
                         onChange={onStatusInputChange}
                         data-testid={'edit-status-mode'}
                />
                : <span data-testid={'profile-status'} onDoubleClick={activateEitMode}>
                        {status || 'status not found'}
                </span>
            }
        </div>
    );
};
