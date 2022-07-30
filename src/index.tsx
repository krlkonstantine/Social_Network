import React from 'react';
import './index.css';
import {renderTree, state, subscribe} from "./redux/state";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addPost, RootStateType, sendMessage, updateMessageText, updateNewPostText} from "./redux/state";

export const rerenderEntireTree = (state:RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 updateNewPostText={updateNewPostText}
                 addPost={addPost}
                 sendMessageCallback={sendMessage}
                 updateMessageText={updateMessageText}/>
        </React.StrictMode>,
        document.getElementById('root')
    )
}
reportWebVitals();

rerenderEntireTree(state)
subscribe(renderTree)

