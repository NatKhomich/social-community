import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/reduxStore';
import {ProfileResponseType, setUserProfileAC} from '../../redux/profilePageReducer';


const baseUrl = 'https://social-network.samuraijs.com/api/1.0'

class ProfileContainer extends React.Component<ProfileContainerType>{

    componentDidMount() {
        axios.get(`${baseUrl}/profile/2`)
            .then(res => {
                this.props.setUserProfile(res.data)
            })
    }

    render() {
        return <Profile profile={this.props.profile} />
    }
}

export type ProfileContainerType = MapStateToPropsType & MapDispatchToPropsType

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

export default connect(mapStateToProps,
    {
        setUserProfile: setUserProfileAC
    })(ProfileContainer);