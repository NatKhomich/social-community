import React from 'react';
import styles from './Users.module.css';
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
    const {
        onClickUnfollow,
        onClickFollow,
        followingProgress,
        users,
        totalCountUser,
        setCurrentPage,
        pageSize,
        portionSize,
        currentPage
    } = props

    return (
        <div className={styles.wrapper}>
            <div className={styles.root}>
                <div className={styles.usersHeader}>
                    <h2 className={styles.title}>Users</h2>
                </div>
                <div className={styles.container}>
                    <div className={styles.users}>
                        {
                            users.items.map(u =>
                                <User key={u.id}
                                      user={u}
                                      followingProgress={followingProgress}
                                      onClickFollow={onClickFollow}
                                      onClickUnfollow={onClickUnfollow}
                                />
                            )
                        }
                    </div>
                    <Pagination currentPage={currentPage}
                                pageSize={pageSize}
                                totalItemsCount={totalCountUser}
                                setCurrentPage={setCurrentPage}
                                portionSize={portionSize}
                    />
                </div>
            </div>
        </div>


    );
};

export default Users;