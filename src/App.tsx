import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import {Route} from 'react-router-dom';
import {addPost, RootStateType} from './redux/State';

export type AppStatePropsType = {
    state: RootStateType
    addPost: (postText: string) => void
}

function App(props: AppStatePropsType) {
    return (
        <div className={'app-wrapper'}>

            <Header/>


            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Route path={'/dialogs'} render={() => <Dialogs dialogs={props.state.dialogsPage.dialogs}
                                                                messages={props.state.dialogsPage.messages}/>}/>

                <Route path={'/profile'} render={() => <Profile posts={props.state.profilePage.posts}
                                                                addPost={addPost}

                />}/>
            </div>

        </div>
    );

}


export default App;
