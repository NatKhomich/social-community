import React from 'react';
import './index.css';
import {AppStateType, store} from './redux/reduxStore';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';


/* const rerenderEntireTree = (state: AppStateType) => {*/
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
            {/*<App store={store} dispatch={store.dispatch.bind(store)}/>*/}
                <App />
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );


/*
rerenderEntireTree(store.getState())
let state = store.getState()
store.subscribe(()=> rerenderEntireTree(state))*/
