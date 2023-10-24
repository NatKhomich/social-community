import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {AppStateType} from '../../state/store';
import {logoutTC} from '../../state/authReducer';
import {compose} from 'redux';
import {initializeAppTC} from '../../state/appReducer';
import {selectAuthIsLoggedIn, selectAuthLoginData} from '../../state/selectors/authSelectors';

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