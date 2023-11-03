import React from 'react';
import s from './Users.module.css';
import {UsersType} from './usersReducer';
import {Pagination} from "./Pagination/Pagination";
import {User} from "./User/User";

type UsersPresentPropsType = {
    onClickUnfollow: (userID: number) => void
    onClickFollow: (userID: number) => void
    setCurrentPage: (page: number) => void
    totalCountUser: number
    pageSize: number
    currentPage: number
    users: UsersType
    followingProgress: number[]
    portionSize: number
}

const Users = (props: UsersPresentPropsType) => {

    return (
        <div className={s.users}>

            <Pagination setCurrentPage={props.setCurrentPage}
                        totalItemsCount={props.totalCountUser}
                        pageSize={props.pageSize}
                        portionSize={props.portionSize}
                        currentPage={props.currentPage}
            />

            {props.users.items.map(el => <User key={el.id}
                                               user={el}
                                               followingProgress={props.followingProgress}
                                               onClickFollow={props.onClickFollow}
                                               onClickUnfollow={props.onClickUnfollow}
                />
            )}
        </div>
    );
};

export default Users;