import React from 'react';
import './App.css';
import Navbar from '../features/Navbar/Navbar';
import ProfileContainer from '../features/Profile/ProfileContainer';
import UsersContainer from '../features/Users/UsersContainer';
import {Route, withRouter} from 'react-router-dom';
import HeaderContainer from '../features/Header/HeaderContainer';
import Login from '../features/Auth/Login';
import {CircularProgress, LinearProgress} from '@mui/material';
import {connect} from 'react-redux';
import {AppRootStateType} from './store';
import {initializeAppTC, RequestStatusType} from './appReducer';
import {MessengerContainer} from '../features/Messenger/MessengerContainer';
import imageError from '../common/image/404.jpg'
import {selectAppIsInitialized, selectAppStatus} from './appSelectors';
import {compose} from 'redux';
import ErrorSnackbar from "../common/components/ErrorSnackbar/ErrorSnackbar";

type AppType = MapStateToPropsType & MapDispatchToPropsType

class App extends React.Component<AppType> {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.isInitialized) {
            return <div
                style={{position: 'fixed', top: '30%', textAlign: 'center', width: '100%'}}>
                <CircularProgress/>
            </div>
        } else {
            return <div className={'root'}>
                <HeaderContainer/>
                {this.props.status === 'loading' ? <LinearProgress color="primary"/> : ''}
                <div className={'appWrapper'}>
                    <div className={'container'}>
                        <Navbar/>
                        <div className={'content'}>
                            <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
                            <Route path={'/messenger'} render={() => <MessengerContainer/>}/>
                            <Route path={'/users'} render={() => <UsersContainer/>}/>
                            <Route path={'/login'} render={() => <Login/>}/>

                            <Route path="/404" render={() => <img src={imageError} alt="error"/>}/>
                            {/*<Redirect from = '*' to = '/404'/>*/}
                        </div>
                    </div>
                </div>
                <ErrorSnackbar />
            </div>
        }
    }
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        status: selectAppStatus(state),
        isInitialized: selectAppIsInitialized(state)
    }
}

type MapStateToPropsType = {
    status: RequestStatusType
    isInitialized: boolean
}
type MapDispatchToPropsType = {
    initializeApp: () => void
}

export const AppContainer = compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {
        initializeApp: initializeAppTC
    })
)(App);