import {NavLink} from 'react-router-dom';
import React from 'react';
import s from './DialogItem.module.css';
import {DialogItemPropsType} from '../../../redux/State';
import image_message from '../../../image/image_message.webp'


export const DialogItem = (props: DialogItemPropsType) => {

    let path = '/dialogs'

    let dialog = props.dialogs.map(el => {
        return (
            <div className={s.dialog} key={el.id}>
                <img src={image_message}/>
                <NavLink className={s.dialogNick} to={path}> {el.name} </NavLink>
            </div>
        )
    })
    return (
        <div className={s.dialogs}>  {dialog}  </div>
    );
};