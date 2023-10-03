import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/reduxStore';
import {ProfileResponseType, setUserProfileTC} from '../../redux/profilePageReducer';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';

export type PropsType = MapStateToPropsType & MapDispatchToPropsType
type PathParamsType = { userId: string }
type ProfileContainerType = RouteComponentProps<PathParamsType> & PropsType

class ProfileContainer extends React.Component<ProfileContainerType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
       this.props.setUserProfile(userId)
    }

    render() {
        return <Profile profile={this.props.profile}/>
    }
}

const AuthRedirectComponent = withAuthRedirect(ProfileContainer)

type MapStateToPropsType = {
    profile: ProfileResponseType
}
type MapDispatchToPropsType = {
    setUserProfile: (userId: string) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    }
}

const witchUrlDataContainer = withRouter(AuthRedirectComponent)

export default withAuthRedirect (connect(mapStateToProps,
    {setUserProfile: setUserProfileTC})(witchUrlDataContainer))