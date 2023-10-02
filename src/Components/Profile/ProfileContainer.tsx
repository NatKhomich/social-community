import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/reduxStore';
import {ProfileResponseType, setUserProfileTC} from '../../redux/profilePageReducer';
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom';

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
        if (!this.props.isAuth) return <Redirect to={'/login'} />

        return <Profile profile={this.props.profile}/>
    }
}

type MapStateToPropsType = {
    profile: ProfileResponseType
    isAuth: boolean
}
type MapDispatchToPropsType = {
    setUserProfile: (userId: string) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}

const witchUrlDataContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps,
    {setUserProfile: setUserProfileTC})(witchUrlDataContainer)