import {connect} from 'react-redux';
import {AppRootStateType} from '../../app/store';
import {followTC, getUsersTC, setCurrentPageTC, unfollowTC, UsersType} from './usersReducer';
import React from 'react';
import {compose} from 'redux';
import {
    selectPortionSize,
    selectUsers,
    selectUsersFollowingProgress, selectUsersPage,
    selectUsersPageSize,
    selectUsersTotalCount
} from './usersSelectors';
import {Users} from "./Users";

class UsersContainer extends React.Component<UsersContainerType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    setCurrentPage = (pageNumber: number) => {
       this.props.setCurrentPage(pageNumber, this.props.pageSize)
    }

    follow = (userId: number) => this.props.follow(userId)

    unfollow = (userId: number) => this.props.unfollow(userId)

    render() {
        return <>
            <Users onClickUnfollow={this.unfollow}
                   onClickFollow={this.follow}
                   setCurrentPage={this.setCurrentPage}
                   totalCountUser={this.props.totalCountUser}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   followingProgress={this.props.followingProgress}
                   portionSize={this.props.portionSize}
            />
        </>
    }
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        users: selectUsers(state),
        pageSize: selectUsersPageSize(state),
        totalCountUser: selectUsersTotalCount(state),
        currentPage: selectUsersPage(state),
        followingProgress: selectUsersFollowingProgress(state),
        portionSize: selectPortionSize(state)
    }
}

export default compose<React.ComponentType>(connect(mapStateToProps,
    {
        follow: followTC,
        unfollow: unfollowTC,
        getUsers: getUsersTC,
        setCurrentPage: setCurrentPageTC
    }))(UsersContainer)

//types
export type UsersContainerType = MapStateToPropsType & MapDispatchToPropsType

type MapStateToPropsType = {
    users: UsersType
    pageSize: number
    totalCountUser: number
    currentPage: number
    followingProgress: number[]
    portionSize: number
}
type MapDispatchToPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    getUsers: (page: number, pageSize: number) => void
    setCurrentPage: (pageNumber: number, pageSize: number) => void
}
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