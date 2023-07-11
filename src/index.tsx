import React from 'react';
import './index.css';
import {reduxType, store} from './redux/reduxStore';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import { StoreContext } from './StoreContext';


 const rerenderEntireTree = (state: reduxType) => {
    ReactDOM.render(
        <BrowserRouter>
            <StoreContext.Provider value={store}>
            {/*<App store={store} dispatch={store.dispatch.bind(store)}/>*/}
                <App />
            </StoreContext.Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState())
let state = store.getState()
store.subscribe(()=> rerenderEntireTree(state))