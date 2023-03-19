import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import {AppRootStateType} from './redux/State';

export type StatePropsType = {
state: AppRootStateType
}


function App(props: StatePropsType) {
    let state = props.state
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/dialogs'} render={ ()=> <Dialogs dialogs={state.dialogsPage.dialogs}
                                                                    messages={state.dialogsPage.messages} />}/>

                    <Route path={'/profile'} render={ ()=> <Profile posts = {state.profilePage.posts}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
