import React from 'react';
import {UsersResponseType} from "../../../Users/usersReducer";
import {Friend} from "./Friend/Friend";
import s from './Friends.module.css'

type Props = {
    userItems: UsersResponseType[]
}

export const Friends = ({userItems}: Props) => {
    return (
        <div className={s.root}>
            <h4 className={s.title}>Friends</h4>
            <div className={s.friends}>
                {
                    userItems.map(el =>  el.followed && <Friend key={el.id} user={el}/>)
                }
            </div>
        </div>
    );
};
