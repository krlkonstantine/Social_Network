import React, {ChangeEvent, useEffect, useState} from "react";
import s from "./EditableSpan.module.css";

type Props = {
    value: string
    updateValue: (value: string) => void
}

export const EditableSpan = ({value, updateValue}: Props) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [newStatus, setNewStatus] = useState<string>(value)

    useEffect(() => {
        setNewStatus(value)

    }, [value])

    const activateEitMode = () => {
        setEditMode(true)
    }
    const deactivateEitMode = () => {
        setEditMode(false)
        updateValue(newStatus.toString())
    }

    const onStatusInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewStatus(e.currentTarget.value)
    }

    return (
        <span data-testid={'status-span'} className={s.profile__descr}>
            {editMode
                ? <input autoFocus={true}
                         onBlur={deactivateEitMode}
                         value={newStatus}
                         onChange={onStatusInputChange}
                         data-testid={'edit-status-mode'}
                />
                : <span data-testid={'profile-status'} onDoubleClick={activateEitMode}>
                        {value || 'status not found'}
                </span>
            }
        </span>
    );
};
