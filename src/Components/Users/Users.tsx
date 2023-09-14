import React from 'react';
import s from './Users.module.css';
import userAvatar from '../../image/userAvatar.jpg';
import {UsersType} from '../../redux/usersPageReducer';
import {NavLink} from 'react-router-dom';
import axios from 'axios';

type UsersPresentPropsType = {
    onClickUnfollow: (userID: number) => void
    onClickFollow: (userID: number) => void
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
    const onClickUnfollowHandler = (userID: number) => () => {
        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userID}`, {withCredentials: true})
            .then(res => {
                if(res.data.resultCode ===  0) {
                    props.onClickFollow(userID)
                }
            })
        props.onClickUnfollow(userID)
    }
    const onClickFollowHandler = (userID: number) => () => {
        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userID}`, {}, {withCredentials: true})
            .then(res => {
                if(res.data.resultCode ===  0) {
                    props.onClickFollow(userID)
                }
            })
    }

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