import React from 'react';
import './index.css';
import {store} from './redux/Store';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';


 const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store} />,
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree()

store.subscribe(rerenderEntireTree)