import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/reduxStore';
import {logoutTC, setIsAuthTC} from '../../redux/authReducer';
import {compose} from 'redux';

class HeaderContainer extends React.Component<HeaderContainerType> {
    componentDidMount() {
        this.props.setIsAuth()
    }

    render() {
        return <Header isAuth={this.props.isAuth} login={this.props.login} logout={this.props.logout}/>
    }
}

type HeaderContainerType = MapStateToPropsType & MapDispatchToPropsType
type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
}
type MapDispatchToPropsType = {
    setIsAuth: () => void
    logout: () => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        setIsAuth: setIsAuthTC,
        logout: logoutTC
    })
    )(HeaderContainer)