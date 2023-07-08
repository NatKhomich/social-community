import React from 'react';
import './index.css';
import {reduxType, store} from './redux/reduxStore';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';


 const rerenderEntireTree = (state: reduxType) => {
     debugger
    ReactDOM.render(
        <BrowserRouter>
            <App store={store} dispatch={store.dispatch.bind(store)}/>,
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState())
let state = store.getState()
store.subscribe(()=> rerenderEntireTree(state))