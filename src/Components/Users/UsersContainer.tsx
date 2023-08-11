import {connect} from 'react-redux';
import {Users} from './Users';
import {AppStateType} from '../../redux/reduxStore';
import {
    followActionCreator,
    setUsersActionCreator,
    unfollowActionCreator,
    UserPropsType,
    UsersType
} from '../../redux/usersPageReducer';
import {Dispatch} from 'redux';


export type UsersContainerType = MapStateToPropsType & MapDispatchToPropsType

type MapStateToPropsType = {
    usersPage: UsersType
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        usersPage: state.usersPage
    }
}

type MapDispatchToPropsType = {
    onClickFollow: (userID: string) => void
    onClickUnfollow: (userID: string) => void
    setUsers: (users: UserPropsType[]) => void
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        onClickFollow: (userID: string) => {
            dispatch(followActionCreator(userID))
        },

        onClickUnfollow: (userID: string) => {
            dispatch(unfollowActionCreator(userID))
        },

        setUsers: (users: UserPropsType[]) => {
            dispatch(setUsersActionCreator(users))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);