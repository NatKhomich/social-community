import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/reduxStore';
import {ProfileResponseType, setUserProfileAC} from '../../redux/profilePageReducer';
import {RouteComponentProps, withRouter} from 'react-router-dom';

const baseUrl = 'https://social-network.samuraijs.com/api/1.0'

class ProfileContainer extends React.Component<ProfileContainerType>{
    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId) {
            userId = '2'
        }

        axios.get(`${baseUrl}/profile/`+userId)
            .then(res => {
                this.props.setUserProfile(res.data)
            })
    }
    render() {
        return <Profile profile={this.props.profile} />
    }
}

export type PropsType = MapStateToPropsType & MapDispatchToPropsType

type MapStateToPropsType = {
    profile: ProfileResponseType
}
type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileResponseType) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    }
}
type PathParamsType = {
    userId: string
}
type ProfileContainerType = RouteComponentProps<PathParamsType> & PropsType

const witchUrlDataContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps,
    {setUserProfile: setUserProfileAC})(witchUrlDataContainer)