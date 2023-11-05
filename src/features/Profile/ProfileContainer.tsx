import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {AppRootStateType} from '../../app/store';
import {
    getStatusTC,
    ProfileResponseType, savePhotoTC,
    setUserProfileTC,
    SidebarType,
    updateProfileTC,
    updateStatusTC
} from './profileReducer';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../common/hoc/withAuthRedirect';
import {compose} from 'redux';
import {selectAuthLoginDataId} from '../Auth/authSelectors';
import {selectProfile, selectProfileSidebar, selectProfileStatus} from './profileSelectors';
import {UpdateProfileType} from "../../api/profileApi";


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
                        sidebar={this.props.sidebar}
                        updateProfile={this.props.updateProfile}
                        savePhoto={this.props.savePhoto}
        />
    }
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        profile: selectProfile(state),
        status: selectProfileStatus(state),
        userId: selectAuthLoginDataId(state),
        sidebar: selectProfileSidebar(state)
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps,
        {
            setUserProfile: setUserProfileTC,
            getStatus: getStatusTC,
            updateStatus: updateStatusTC,
            updateProfile: updateProfileTC,
            savePhoto: savePhotoTC
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
    status: string,
    userId: string
    sidebar: SidebarType
}
type MapDispatchToPropsType = {
    setUserProfile: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatus: (status: string) => void
    updateProfile: (profile: UpdateProfileType) => void
    savePhoto: (file: File) => void
}
