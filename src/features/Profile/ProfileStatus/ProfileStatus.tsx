import React, {ChangeEvent, useState} from 'react';
import TextField from '@mui/material/TextField';

type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
}

export const ProfileStatus = (props: ProfileStatusType) => {

    let [editMode, setEditMode] = useState(false)
    let [newStatus, setNewStatus] = useState(props.status)

    const changeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewStatus(e.currentTarget.value)
    }
    const activateEditMode = () => {
        if (props.isOwner) {
            setEditMode(true)
            setNewStatus(props.status)
        }
    }
    const diActivateMode = () => {
        setEditMode(false)
        props.updateStatus(newStatus)
    }

    return editMode ?
        <TextField
            value={newStatus}
            onChange={changeStatusHandler}
            autoFocus
            onBlur={diActivateMode}
        />
        : <span style={{cursor: 'pointer'}} onDoubleClick={activateEditMode}>{props.status}</span>
}