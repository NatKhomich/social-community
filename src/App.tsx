import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {MessengerContainer} from './Components/Messenger/MessengerContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';
import UsersContainer from './Components/Users/UsersContainer';
import {Route} from 'react-router-dom';
import HeaderContainer from './Components/Header/HeaderContainer';
import {Login} from './Components/Login/Login';


function App() {
    return (
        <div>
            <HeaderContainer />
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


export default App;
