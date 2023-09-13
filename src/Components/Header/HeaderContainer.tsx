import React from 'react';
import Header from './Header';
import axios from 'axios';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/reduxStore';
import {authType, setAuthUserDataAC} from '../../redux/authReducer';

const baseUrl = 'https://social-network.samuraijs.com/api/1.0'

class HeaderContainer extends React.Component<HeaderContainerType> {
    componentDidMount() {
        axios.get(`${baseUrl}/auth/me`, {withCredentials: true})
            .then(res => {
                if (res.data.resultCode === 0) {
                    this.props.setAuthUserData(res.data.data)
                }
            })
    }

    render() {
        return <Header isAuth={this.props.isAuth} login={this.props.login}/>
    }
}

export type HeaderContainerType = MapStateToPropsType & MapDispatchToPropsType

type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
}
type MapDispatchToPropsType = {
    setAuthUserData: (data: authType) => void
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToProps,
    {setAuthUserData: setAuthUserDataAC})(HeaderContainer)