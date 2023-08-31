import {connect} from 'react-redux';
import {AppStateType} from '../../redux/reduxStore';
import {
    followActionCreator, setCurrentPageActionCreator,
    setUsersActionCreator, setUsersTotalCountActionCreator,
    unfollowActionCreator,
    UserPropsType,
    UsersType
} from '../../redux/usersPageReducer';
import {Dispatch} from 'redux';
import React from 'react';
import axios from 'axios';
import Users from './Users';

export class UsersComponent extends React.Component<UsersContainerType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items)
                this.props.setTotalUsersCount(res.data.totalCount)
            })
    }

    setCurrentPage = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items)
            })
    }

    render() {

        return (
            <Users onClickUnfollow={this.props.onClickUnfollow}
                   onClickFollow={this.props.onClickFollow}
                   setCurrentPage={this.setCurrentPage}
                   totalCountUser={this.props.totalCountUser}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   usersPage={this.props.usersPage}
            />
        );
    }
}

export type UsersContainerType = MapStateToPropsType & MapDispatchToPropsType

type MapStateToPropsType = {
    usersPage: UsersType
    pageSize: number
    totalCountUser: number
    currentPage: number
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalCountUser: state.usersPage.totalCountUser,
        currentPage: state.usersPage.currentPage
    }
}

type MapDispatchToPropsType = {
    onClickFollow: (userID: number) => void
    onClickUnfollow: (userID: number) => void
    setUsers: (users: UserPropsType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        onClickFollow: (userID) => {
            dispatch(followActionCreator(userID))
        },

        onClickUnfollow: (userID) => {
            dispatch(unfollowActionCreator(userID))
        },

        setUsers: (users) => {
            dispatch(setUsersActionCreator(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageActionCreator(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setUsersTotalCountActionCreator(totalCount))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersComponent);