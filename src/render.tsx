import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addPost, RootStateType, sendMessage, updateNewPostText} from "./redux/state";



export const rerenderEntireTree = (state:RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} updateNewPostText={updateNewPostText} addPost={addPost} sendMessageCallback={sendMessage} />
        </React.StrictMode>,
        document.getElementById('root')
    )
}
reportWebVitals();
