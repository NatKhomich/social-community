import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import {Route} from 'react-router-dom';
import {Users} from './Components/Users/Users';
import {MessengerContainer} from './Components/Messenger/MessengerContainer';


function App() {

    return (

        <div>
            <Header/>

            <div className={'appWrapper'}>

                <div className={'container'}>

                    <Navbar/>

                    <div className={'content'}>
                        <Route path={'/profile'} render={() => <Profile />}/>
                        <Route path={'/messenger'} render={() => <MessengerContainer />}/>
                        <Route path={'/users'} render={() => <Users />}/>
                    </div>
                </div>
            </div>

        </div>
    );

}


export default App;
