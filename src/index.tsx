import React from 'react';
import './index.css';
import {store} from './app/store';
import ReactDOM from 'react-dom';
import {AppContainer} from './app/App';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer />
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );

