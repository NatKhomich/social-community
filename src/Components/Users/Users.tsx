import React from 'react';
import {UsersContainerType} from './UsersContainer';
import s from './Users.module.css'


export const Users = (props: UsersContainerType) => {

    const onClickUnfollow = (userID: string) => () => {
        props.onClickUnfollow(userID)
    }

    const onClickFollow = (userID: string) => () => {
        props.onClickFollow(userID)
    }

    return (
        <div className={s.users}>
            {props.usersPage.users.map(el =>
                <div className={s.user} key={el.id}>

                    <div className={s.imgAndButton}>
                        <div><img className={s.image} src={el.photoUrl}/></div>
                        {el.followed
                            ? <button onClick={onClickUnfollow(el.id)}> Unfollow </button>
                            : <button onClick={onClickFollow(el.id)}> Follow </button>
                        }
                    </div>

                    <div className={s.dataBlock}>
                        <div className={s.nameAndStatus}>
                            <div className={s.dataText}>{el.fullName}</div>
                            <div className={s.dataText}>{el.status}</div>
                        </div>

                        <div className={s.location}>
                            <div className={s.dataText}>{el.location.country}</div>
                            <div className={s.dataText}>{el.location.city}</div>
                        </div>
                    </div>

                </div>
            )}
        </div>
    );
};
