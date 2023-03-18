import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import {PostsType} from './Components/Profile/MyPosts/MyPosts';
import {MessagesType} from './Components/Dialogs/Messages/Message';
import {DialogsType} from './Components/Dialogs/DialogItem/DialogItem';

type AppPropsType = {
    posts: PostsType[]
    dialogs: DialogsType[]
    messages: MessagesType[]
}

function App(props: AppPropsType) {

    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    {/*<Route path={'/dialogs'} component={Dialogs}/>   exact
                    <Route path={'/profile'} component={Profile}/>*/}

                    <Route path={'/dialogs'} render={ ()=> <Dialogs dialogs={props.dialogs}
                                                                    messages={props.messages} />}/>

                    <Route path={'/profile'} render={ ()=> <Profile posts = {props.posts}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
