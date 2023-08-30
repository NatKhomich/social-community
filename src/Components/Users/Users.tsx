import React from 'react';
import s from './Users.module.css';
import axios from 'axios';
import userAvatar from './../../image/userAvatar.jpg'
import {UsersContainerType} from './UsersContainer';

export class Users extends React.Component<UsersContainerType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items)
                this.props.setTotalUsersCount(res.data.totalCount)
            })
    }

    onClickUnfollow = (userID: number) => () => {
        this.props.onClickUnfollow(userID)
    }

    onClickFollow = (userID: number) => () => {
        this.props.onClickFollow(userID)
    }

    setCurrentPage = (pageNumber: number) => () => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items)
            })
    }

    render() {

        const pagesCount = Math.ceil(this.props.totalCountUser / this.props.pageSize)
        const pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div className={s.users}>
                <div>
                    {pages.map(el => {
                        return (
                            <button className={this.props.currentPage === el ? s.selectedPage : ''}
                            onClick={this.setCurrentPage(el)}
                            >
                                {el}
                            </button>
                        )}
                    )}
                </div>


                {this.props.usersPage.items.map(el =>
                    <div className={s.user} key={el.id}>

                        <div className={s.imgAndButton}>
                            <div><img alt="" className={s.image} src={el.photos.small ? el.photos.small : userAvatar}/>
                            </div>
                            {el.followed
                                ? <button onClick={this.onClickUnfollow(el.id)}> Unfollow </button>
                                : <button onClick={this.onClickFollow(el.id)}> Follow </button>
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
    }
}

/*export const Users = (props: UsersContainerType) => {

    const getUsers = () => {
        if(props.usersPage.items.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(res => {
                    debugger
                    props.setUsers(res.data.items)
                })
            /!*props.setUsers([
                {id: v1(), photoUrl: userImage, followed: true, fullName: 'Alex', status: 'Life in KZ', location: {city: 'Astana', country: 'KZ'}},
                {id: v1(), photoUrl: userImage, followed: true, fullName: 'Katrin', status: 'My life', location: {city: 'Kursk', country: 'Russia'}},
                {id: v1(), photoUrl: userImage, followed: false, fullName: 'Natalia', status: 'Life is life', location: {city: 'Astana', country: 'KZ'}},
            ])*!/
        }
    }

    const onClickUnfollow = (userID: number) => () => {
        props.onClickUnfollow(userID)
    }

    const onClickFollow = (userID: number) => () => {
        props.onClickFollow(userID)
    }

    return (
        <div className={s.users}>
            <button onClick={getUsers}>Get Users</button>

            {props.usersPage.items.map(el =>
                <div className={s.user} key={el.id}>

                    <div className={s.imgAndButton}>
                        <div><img alt='' className={s.image} src={el.photos.small ? el.photos.small : userAvatar}/></div>
                        {el.followed
                            ? <button onClick={onClickUnfollow(el.id)}> Unfollow </button>
                            : <button onClick={onClickFollow(el.id)}> Follow </button>
                        }
                    </div>

                    <div className={s.dataBlock}>
                        <div className={s.nameAndStatus}>
                            <div className={s.dataText}>{el.name}</div>
                            <div className={s.dataText}>{el.status}</div>
                        </div>

                        <div className={s.location}>

                            {/!*<div className={s.dataText}>{el.location.country}</div>*!/}
                            {/!*<div className={s.dataText}>{el.location.city}</div>*!/}
                        </div>
                    </div>

                </div>
            )}
        </div>
    );
};*/
