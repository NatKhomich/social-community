import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {MessengerContainer} from './Components/Messenger/MessengerContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';
import UsersContainer from './Components/Users/UsersContainer';
import {Route} from 'react-router-dom';
import HeaderContainer from './Components/Header/HeaderContainer';
import {Login} from './Components/Login/Login';
import {LinearProgress} from '@mui/material';
import {connect} from 'react-redux';
import {AppStateType} from './redux/reduxStore';
import {RequestStatusType} from './redux/appReducer';

type mapStateToPropsType = {
    status: RequestStatusType
}
const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        status: state.app.status
    }
}
type AppType = {
    status: RequestStatusType
}

function App(props: AppType) {
    return (
        <div>
            <HeaderContainer />
            {props.status === 'loading' ? <LinearProgress color="primary" /> : ''}
            <div className={'appWrapper'}>
                <div className={'container'}>
                    <Navbar/>
                    <div className={'content'}>
                        <Route path={'/profile/:userId?'} render={() => <ProfileContainer />}/>
                        <Route path={'/messenger'} render={() => <MessengerContainer />}/>
                        <Route path={'/users'} render={() => <UsersContainer />}/>
                        <Route path={'/login'} render={() => <Login />}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export const AppContainer = connect(mapStateToProps)(App)


