import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/reduxStore';
import {authType, setAuthUserDataAC} from '../../redux/authReducer';
import {socialAPI} from '../../api/api';

class HeaderContainer extends React.Component<HeaderContainerType> {
    componentDidMount() {
        socialAPI.getAuthMe()
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