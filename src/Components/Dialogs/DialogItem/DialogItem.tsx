import {NavLink} from 'react-router-dom';
import React from 'react';
import s from './DialogItem.module.css';
import {DialogItemPropsType} from '../../../redux/State';


export const DialogItem = (props: DialogItemPropsType) => {

    let path = '/dialogs/'

    let dialog = props.dialogs.map(el => {
        return (
            <div key={el.id}>
                <NavLink className={s.dialog_i} to={path}> {el.name} </NavLink>
            </div>
        )
    })
    return (
        <div className={s.dialog}>  {dialog}  </div>
    );
};