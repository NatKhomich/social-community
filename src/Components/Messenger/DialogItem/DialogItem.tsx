import {NavLink} from 'react-router-dom';
import React from 'react';
import s from './DialogItem.module.css';
import image_message from '../../../image/image_message.webp'

export type DialogType = {
    name: string
    id: string
}

export const DialogItem = (props: DialogType) => {

    let path = '/dialogs' + props.id
        return (
            <div className={s.dialog}>
                <img alt={''} src={image_message}/>
                <NavLink className={s.dialogNick} to={path}> {props.name} </NavLink>
            </div>
        )
};