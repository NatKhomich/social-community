import {NavLink} from 'react-router-dom';
import React from 'react';
import s from './DialogItem.module.css';
import {DialogsType} from '../../../types/Types';
import image_message from '../../../image/image_message.webp'


export const DialogItem = (props: DialogsType) => {

    let path = '/dialogs'

        return (
            <div className={s.dialog}>
                <img alt={''} src={image_message}/>
                <NavLink className={s.dialogNick} to={path}> {props.name} </NavLink>
            </div>
        )
};