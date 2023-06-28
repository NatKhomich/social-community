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

    const state = props.store.getState()

    return (
        <div className={'app-wrapper'}>

            <Header/>
            <Navbar/>

            <div className={'app-wrapper-content'}>

                <Route path={'/profile'} render={() => <Profile posts={state.profilePage.posts}
                                                                newMyPostText={state.profilePage.newMyPostText}
                                                                dispatch={props.store.dispatch.bind(props.store)}
                />}/>

                <Route path={'/dialogs'} render={() => <Dialogs dialogs={state.dialogsPage.dialogs}
                                                                messages={state.dialogsPage.messages}
                                                                dispatch={props.store.dispatch.bind(props.store)}
                                                                newMessage={state.dialogsPage.newMessage}
                />}/>


            </div>

        </div>
    );

}


export default App;
