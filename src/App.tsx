import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import ProfileContainer from './Components/Profile/ProfileContainer';
import UsersContainer from './Components/Users/UsersContainer';
import {Route} from 'react-router-dom';
import HeaderContainer from './Components/Header/HeaderContainer';
import Login from './Components/Login/Login';
import {CircularProgress, LinearProgress} from '@mui/material';
import {connect} from 'react-redux';
import {AppStateType} from './redux/reduxStore';
import {RequestStatusType} from './redux/appReducer';
import {MessengerContainer} from './Components/Messenger/MessengerContainer';
import imageError from './image/404.jpg'
import {setIsAuthTC} from './redux/authReducer';

type AppType = MapStateToPropsType & MapDispatchToPropsType

class App extends React.Component<AppType> {

    componentDidMount() {
        this.props.setIsAuth()
    }

    render() {
        if (!this.props.isInitialized) {
            return <div
                style={{position: 'fixed', top: '30%', textAlign: 'center', width: '100%'}}>
                <CircularProgress/>
            </div>
        } else {
            return <div>
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
            </div>
        }
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        status: state.app.status,
        isInitialized: state.app.isInitialized
    }
}

type MapStateToPropsType = {
    status: RequestStatusType
    isInitialized: boolean
}
type MapDispatchToPropsType = {
    setIsAuth: () => void
}


export const AppContainer = connect(mapStateToProps, {
    setIsAuth: setIsAuthTC
})(App)
