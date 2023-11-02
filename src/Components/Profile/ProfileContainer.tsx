import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {AppRootStateType} from '../../state/store';
import {getStatusTC, ProfileResponseType, setUserProfileTC, updateStatusTC} from '../../state/profileReducer';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';
import {selectAuthLoginDataId} from '../../state/selectors/authSelectors';
import {selectProfile, selectProfileStatus} from '../../state/selectors/profileSelectors';


class ProfileContainer extends React.PureComponent<ProfileContainerType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            //@ts-ignore
            userId = this.props.userId
        }
        this.props.setUserProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return <Profile profile={this.props.profile}
                        status={this.props.status}
                        updateStatus={this.props.updateStatus}
        />
    }
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        profile: selectProfile(state),
        status: selectProfileStatus(state),
        userId: selectAuthLoginDataId(state)
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps,
        {
            setUserProfile: setUserProfileTC,
            getStatus: getStatusTC,
            updateStatus: updateStatusTC,
        }),
    withRouter,
    withAuthRedirect,
)(ProfileContainer)

//types
export type PropsType = MapStateToPropsType & MapDispatchToPropsType
type PathParamsType = { userId: string }
type ProfileContainerType = RouteComponentProps<PathParamsType> & PropsType

type MapStateToPropsType = {
    profile: ProfileResponseType
    status: string,
    userId: number | null | string
}
type MapDispatchToPropsType = {
    setUserProfile: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatus: (status: string) => void
}
