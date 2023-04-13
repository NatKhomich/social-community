import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import {Route} from 'react-router-dom';
import {StoreType} from './redux/State';

export type AppStatePropsType = {
    store: StoreType
}

function App(props: AppStatePropsType) {
    return (
        <div className={'app-wrapper'}>

            <Header/>
            <Navbar/>

            <div className={'app-wrapper-content'}>
                <Route path={'/dialogs'} render={() => <Dialogs dialogs={props.store._state.dialogsPage.dialogs}
                                                                messages={props.store._state.dialogsPage.messages}

                />}/>

                <Route path={'/profile'} render={() => <Profile posts={props.store._state.profilePage.posts}
                                                                newMyPostText={props.store._state.profilePage.newMyPostText}
                                                                dispatch={props.store.dispatch.bind(props.store)}
                    //addPost={props.store.addPost.bind(props.store)}
                    // updateNewMyPostText={props.store.updateNewMyPostText.bind(props.store)}
                />}/>
            </div>

        </div>
    );

}


export default App;
