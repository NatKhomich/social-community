import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import {Route} from 'react-router-dom';
import {MessengerContainer} from './Components/Messenger/MessengerContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';
import UsersContainer from './Components/Users/UsersContainer';


function App() {
    return (
        <div>
            <Header/>
            <div className={'appWrapper'}>
                <div className={'container'}>
                    <Navbar/>
                    <div className={'content'}>
                        <Route path={'/profile'} render={() => <ProfileContainer />}/>
                        <Route path={'/messenger'} render={() => <MessengerContainer />}/>
                        <Route path={'/users'} render={() => <UsersContainer />}/>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default App;
