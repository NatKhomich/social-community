import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, RootStateType, updateNewMyPostText} from './redux/State';
import {BrowserRouter} from 'react-router-dom';

export const rerenderEntireTree = (state: RootStateType) => {
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
