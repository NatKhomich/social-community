import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import {Route} from 'react-router-dom';
import {actionsTypes} from './types/Types';
import {reduxStoreType} from './types/Types';

export type AppStatePropsType = {
    store: reduxStoreType
    dispatch: (action: actionsTypes) => void
}

function App(props: AppStatePropsType) {

    const state = props.store.getState()

    return (
        <div className={'container'}>


            <Header/>

            <div className={'appWrapper'}>
                <Navbar/>

                <div className={'appWrapperContent'}>

                    <Route path={'/profile'} render={() => <Profile posts={state.profilePage.posts}
                                                                    newMyPostText={state.profilePage.newMyPostText}
                                                                    dispatch={props.dispatch.bind(props.store)}
                    />}/>

                    <Route path={'/dialogs'} render={() => <Dialogs dialogs={state.dialogsPage.dialogs}
                                                                    messages={state.dialogsPage.messages}
                                                                    newMessage={state.dialogsPage.newMessage}
                                                                    dispatch={props.dispatch.bind(props.store)}
                    />}/>
                </div>
            </div>

        </div>
    );

}


export default App;
