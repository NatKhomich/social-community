import React from 'react';
import './index.css';
import {store} from './redux/State';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';

 const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store}
                 /*addPost={store.addPost}
                 updateNewMyPostText={store.updateNewMyPostText}*/
            />,
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree()

store.subscribe(rerenderEntireTree)