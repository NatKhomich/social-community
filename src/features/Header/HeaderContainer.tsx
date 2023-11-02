import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {logoutTC} from '../Auth/authReducer';
import {compose} from 'redux';
import {initializeAppTC} from '../../app/appReducer';
import {selectAuthIsLoggedIn, selectAuthLoginData} from '../Auth/authSelectors';
import {AppRootStateType} from "../../app/store";

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

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        isLoggedIn: selectAuthIsLoggedIn(state),
        login: selectAuthLoginData(state)
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        initializeApp: initializeAppTC,
        logout: logoutTC
    })
    )(HeaderContainer)