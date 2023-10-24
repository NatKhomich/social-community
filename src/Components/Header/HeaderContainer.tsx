import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/reduxStore';
import {logoutTC} from '../../redux/authReducer';
import {compose} from 'redux';
import {initializeAppTC} from '../../redux/appReducer';

class HeaderContainer extends React.Component<HeaderContainerType> {

    render() {
        return <Header isLoggedIn={this.props.isLoggedIn} login={this.props.login} logout={this.props.logout}/>
    }
}

type HeaderContainerType = MapStateToPropsType & MapDispatchToPropsType
type MapStateToPropsType = {
    isLoggedIn: boolean
    login: string | null
}
type MapDispatchToPropsType = {
    setIsAuth: () => void
    logout: () => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isLoggedIn: state.auth.isLoggedIn,
        login: state.auth.loginData.login
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        initializeApp: initializeAppTC,
        logout: logoutTC
    })
    )(HeaderContainer)