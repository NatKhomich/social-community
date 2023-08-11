import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import {Route} from 'react-router-dom';
import {Users} from './Components/Users/Users';


function App() {

    return (

        <div>
            <Header/>

            <div className={'appWrapper'}>

                <div className={'container'}>

                    <Navbar/>

                    <div className={'content'}>
                        <Route path={'/profile'} render={() => <Profile />}/>
                        <Route path={'/dialogs'} render={() => <Dialogs />}/>
                        <Route path={'/users'} render={() => <Users />}/>
                    </div>
                </div>
            </div>

        </div>
    );

}


export default App;
