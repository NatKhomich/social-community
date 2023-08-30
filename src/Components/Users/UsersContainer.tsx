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
import {Users} from './Users';


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

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);