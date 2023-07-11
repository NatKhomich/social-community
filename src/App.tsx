import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import {Route} from 'react-router-dom';

/*export type AppStatePropsType = {
    store: reduxStoreType
    dispatch: (action: actionsTypes) => void
}*/

function App() {

    //const state = props.store.getState()

    return (

        <div>
            <Header/>

            <div className={'appWrapper'}>

                <div className={'container'}>

                    <Navbar/>

                    <div className={'content'}>

                        <Route path={'/profile'} render={() => <Profile />}/>
                        <Route path={'/dialogs'} render={() => <Dialogs />}/>

                    </div>
                </div>
            </div>

        </div>
    );

}


export default App;
