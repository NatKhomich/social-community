import React from 'react';
import s from './Users.module.css';
import userAvatar from '../../image/userAvatar.jpg';
import {UsersType} from '../../redux/usersPageReducer';
import {NavLink} from 'react-router-dom';

type UsersPresentPropsType = {
    onClickUnfollow: (userID: number) => void
    onClickFollow: (userId: number) => void
    setCurrentPage: (pageNumber: number) => void
    totalCountUser: number
    pageSize: number
    currentPage: number
    usersPage: UsersType
}

const Users = (props: UsersPresentPropsType) => {

    const pagesCount = Math.ceil(props.totalCountUser / props.pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    const setCurrentPageHandler = (numPage: number) => () => props.setCurrentPage(numPage)
    const onClickUnfollowHandler = (userId: number) => () => props.onClickUnfollow(userId)
    const onClickFollowHandler = (userId: number) => () =>props.onClickFollow(userId)

    return (
        <div className={s.users}>
            <div> {pages.map((el) => {
                        return (
                            <button className={props.currentPage === el ? s.selectedPage : ''}
                                    onClick={setCurrentPageHandler(el)}
                                    key={el}>
                                {el}
                            </button>
                        )
                    })}
            </div>
            {props.usersPage.items.map(el =>
                <div className={s.user} key={el.id}>
                    <div className={s.imgAndButton}>
                        <div>
                            <NavLink to={'/profile/'+el.id}>
                                <img alt="" className={s.image} src={el.photos.small ? el.photos.small : userAvatar}/>
                            </NavLink>
                        </div>
                        {el.followed
                            ? <button onClick={onClickUnfollowHandler(el.id)}> Unfollow </button>
                            : <button onClick={onClickFollowHandler(el.id)}> Follow </button>
                        }
                    </div>
                    <div className={s.dataBlock}>
                        <div className={s.nameAndStatus}>
                            <div className={s.dataText}>{el.name}</div>
                            <div className={s.dataText}>{el.status}</div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Users;