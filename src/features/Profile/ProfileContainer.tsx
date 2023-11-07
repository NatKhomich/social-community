import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {AppRootStateType} from '../../app/store';
import {
    addPostAC,
    getStatusTC,
    ProfileResponseType,
    savePhotoTC,
    setUserProfileTC,
    updateProfileTC,
    updateStatusTC
} from './profileReducer';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../common/hoc/withAuthRedirect';
import {compose} from 'redux';
import {selectAuthLoginDataId} from '../Auth/authSelectors';
import {selectProfile, selectProfilePosts, selectProfileStatus} from './profileSelectors';
import {UpdateProfileType} from "../../api/profileApi";
import {PostType} from "./Posts/Post/Post";


class ProfileContainer extends React.PureComponent<ProfileContainerType> {

    refreshProfile () {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.userId
        }
        this.props.setUserProfile(userId)
        this.props.getStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<ProfileContainerType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return <Profile profile={this.props.profile}
                        isOwner={!this.props.match.params.userId}
                        status={this.props.status}
                        updateStatus={this.props.updateStatus}
                        updateProfile={this.props.updateProfile}
                        savePhoto={this.props.savePhoto}
                        addPost={this.props.addPost}
                        posts={this.props.posts}
        />
    }
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        profile: selectProfile(state),
        status: selectProfileStatus(state),
        userId: selectAuthLoginDataId(state),
        posts: selectProfilePosts(state),
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps,
        {
            setUserProfile: setUserProfileTC,
            getStatus: getStatusTC,
            updateStatus: updateStatusTC,
            updateProfile: updateProfileTC,
            savePhoto: savePhotoTC,
            addPost: addPostAC,
        }),
    withRouter,
    withAuthRedirect,
)(ProfileContainer)

//types
export type PropsType = MapStateToPropsType & MapDispatchToPropsType
type PathParamsType = { userId: string }
type ProfileContainerType = RouteComponentProps<PathParamsType> & PropsType

type MapStateToPropsType = {
    profile: ProfileResponseType | null
    status: string
    userId: string
    posts: PostType[]
}
type MapDispatchToPropsType = {
    setUserProfile: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatus: (status: string) => void
    updateProfile: (profile: UpdateProfileType) => Promise<any>
    savePhoto: (file: File) => void
    addPost: (newMyPostText: string) => void
}
