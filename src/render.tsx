import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {store} from './redux/redux-store'
import {Provider} from "react-redux";
import {HashRouter} from "react-router-dom";
import App from "./App";

export const renderEntireTree = () => {
    ReactDOM.render(
        <HashRouter>
            <Provider store={{...store}}>
                <App/>
            </Provider>
        </HashRouter>,
        document.getElementById('root')
    )
}



