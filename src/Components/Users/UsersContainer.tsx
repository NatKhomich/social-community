import {connect} from 'react-redux';
import {AppStateType} from '../../redux/reduxStore';
import {followTC, getUsersTC, setCurrentPageTC, unfollowTC, UsersType} from '../../redux/usersReducer';
import React from 'react';
import Users from './Users';
import {compose} from 'redux';

class UsersContainer extends React.Component<UsersContainerType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    setCurrentPage = (pageNumber: number) => {
       this.props.setCurrentPage(pageNumber, this.props.pageSize)
    }

    follow = (userId: number) => {
        this.props.follow(userId)
    }

    unfollow = (userId: number) => {
        this.props.unfollow(userId)
    }

    render() {
        return <>
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
    followingProgress: number[]

}
type MapDispatchToPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
    setCurrentPage: (pageNumber: number, pageSize: number) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalCountUser: state.usersPage.totalCountUser,
        currentPage: state.usersPage.currentPage,
        followingProgress: state.usersPage.followingProgress
    }
}

export default compose<React.ComponentType>(connect(mapStateToProps,
    {
        follow: followTC,
        unfollow: unfollowTC,
        getUsers: getUsersTC,
        setCurrentPage: setCurrentPageTC
    }))(UsersContainer)

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