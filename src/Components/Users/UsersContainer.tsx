import {connect} from 'react-redux';
import {AppStateType} from '../../redux/reduxStore';
import {
    followAC,
    setCurrentPageAC,
    setUsersAC,
    setUsersTotalCountAC,
    toggleIsFetchingAC, toggleIsFollowingProgressAC,
    unfollowAC,
    UserPropsType,
    UsersType
} from '../../redux/usersPageReducer';
import React from 'react';
import Users from './Users';
import {Preloader} from '../Common/Preloader/Preloader';
import {socialAPI} from '../../api/api';

class UsersContainer extends React.Component<UsersContainerType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
            socialAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(res => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(res.data.items)
                this.props.setUsersTotalCount(res.data.totalCount)
            })
    }

    setCurrentPage = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
            socialAPI.getUsersCurrentPage(pageNumber, this.props.pageSize)
            .then(res => {
                this.props.setUsers(res.data.items)
                this.props.toggleIsFetching(false)
            })
    }

    follow = (userId: number) => {
        this.props.followingIsProgress(true)
        socialAPI.follow(userId)
            .then(res => {
                if(res.data.resultCode ===  0) {
                    this.props.follow(userId)
                   this.props.followingIsProgress(false)
                }
            })
    }
    unfollow = (userId: number) => {
       this.props.followingIsProgress(true)
        socialAPI.unfollow(userId)
            .then(res => {
                if(res.data.resultCode ===  0) {
                    this.props.unfollow(userId)
                   this.props.followingIsProgress(false)
                }
            })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users onClickUnfollow={this.unfollow}
                   onClickFollow={this.follow}
                   setCurrentPage={this.setCurrentPage}
                   totalCountUser={this.props.totalCountUser}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   usersPage={this.props.usersPage}
                   followingProgress={this.props.followingProgress}
            />
        </>
    }
}

export type UsersContainerType = MapStateToPropsType & MapDispatchToPropsType

type MapStateToPropsType = {
    usersPage: UsersType
    pageSize: number
    totalCountUser: number
    currentPage: number
    isFetching: boolean
    followingProgress: boolean

}
type MapDispatchToPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: UserPropsType[]) => void
    setCurrentPage: (currentPage: number) => void
    setUsersTotalCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    followingIsProgress: (followingProgress: boolean) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalCountUser: state.usersPage.totalCountUser,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingProgress: state.usersPage.followingProgress
    }
}

export default connect(mapStateToProps,
    {
        follow: followAC,
        unfollow: unfollowAC,
        setUsers: setUsersAC,
        setCurrentPage: setCurrentPageAC,
        setUsersTotalCount: setUsersTotalCountAC,
        toggleIsFetching: toggleIsFetchingAC,
        followingIsProgress: toggleIsFollowingProgressAC
    })(UsersContainer);

//вместо ф-ии mapDispatchToProps в connect вторым параметром можно передать объект
//{onClickFollow: followAC, и тд} и тогда connect оборачивает AC в функцию-обертку
// () => store.dispatch(AC)и передаёт в props компонента

/*const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        onClickFollow: (userID) => dispatch(followAC(userID)),
        onClickUnfollow: (userID) => dispatch(unfollowAC(userID)),
        setUsers: (users) => dispatch(setUsersAC(users)),
        setCurrentPage: (pageNumber) => dispatch(setCurrentPageAC(pageNumber)),
        setTotalUsersCount: (totalCount) => dispatch(setUsersTotalCountAC(totalCount)),
        toggleIsFetching: (isFetching: boolean) => dispatch(isFetchingAC(isFetching))
    }
}*/
// export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersComponent);