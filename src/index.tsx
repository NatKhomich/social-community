import React from 'react';
import './index.css';
import {RootStateType, state, subscribe} from './redux/State';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, updateNewMyPostText} from './redux/State';
import {BrowserRouter} from 'react-router-dom';

 const rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 addPost={addPost}
                 updateNewMyPostText={updateNewMyPostText}
            />,
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree(state)

subscribe(rerenderEntireTree)