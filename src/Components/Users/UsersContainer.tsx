import {connect} from 'react-redux';
import {AppRootStateType} from '../../state/store';
import {followTC, getUsersTC, setCurrentPageTC, unfollowTC, UsersType} from '../../state/usersReducer';
import React from 'react';
import Users from './Users';
import {compose} from 'redux';
import {
    selectUsers,
    selectUsersFollowingProgress, selectUsersPage,
    selectUsersPageSize,
    selectUsersTotalCount
} from '../../state/selectors/usersSelectors';

class UsersContainer extends React.Component<UsersContainerType> {

    componentDidMount() {
        this.props.getUsers(this.props.page, this.props.pageSize)
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
                   page={this.props.page}
                   users={this.props.users}
                   followingProgress={this.props.followingProgress}
            />
        </>
    }
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        users: selectUsers(state),
        pageSize: selectUsersPageSize(state),
        totalCountUser: selectUsersTotalCount(state),
        page: selectUsersPage(state),
        followingProgress: selectUsersFollowingProgress(state)
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
    page: number
    followingProgress: number[]

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