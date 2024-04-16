import React, {useState} from 'react';
import {UsersResponseType} from "../../../Users/usersReducer";
import {Friend} from "./Friend/Friend";
import s from './Friends.module.css'
import {Button} from "../../../../common/components/Button/Button";

type Props = {
    userItems: UsersResponseType[]
}

export const Friends = ({userItems}: Props) => {
    const [isShow, setIsShow] = useState(false)

    return (
        <div className={s.root}>
            <div className={s.header}>
                <h4 className={s.title}>Friends</h4>
                {!isShow ?
                    <Button onClick={() => setIsShow(true)}> Show </Button>
                    : <Button variant={'secondary'} onClick={() => setIsShow(false)}> Hide </Button>}
            </div>

            {isShow ? <div className={s.friends}>
                {userItems.map(el => el.followed && <Friend key={el.id} user={el}/>)}
            </div>
            :  ''
            }
        </div>
    );
};
