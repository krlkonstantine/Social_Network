import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Profile} from "./components/Profile/Profile";
import {Settings} from "./components/Settings/Settings";
import {Music} from "./components/Music/Music";
import {Friends} from "./components/Friends/Friends";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {RootStateType, StoreType, DialogsPageType, ProfilePageType, store, ActionTypes} from "./redux/state";

type AppPropsType = {
    store: StoreType
    /*updateNewPostText: (newMsgText: string) => void
    addPost: () => void
    sendMessageCallback: () => void
    updateMessageText: (newMsgText: string) => void
    dispatch: (action:ActionTypes) => void*/
}


let App = (props: AppPropsType) => {

    const state = props.store.getState()

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/dialogs/*" element={<Dialogs avatar={"ghhghg"}
                                                                   name={"panda"}
                                                                   dialogsPage={state.dialogsPage}
                                                                   //sendMessageCallback={props.store.sendMessage.bind(props.store)}
                                                                   //updateMessageText={props.store.updateMessageText.bind(props.store)}
                            dispatch={props.store.dispatch.bind(props.store)}
                            />}/>
                        <Route path="/profile" element={<Profile
                            /*addPost={props.store.addPost.bind(store)}*/
                            /*updateNewPostText={props.updateNewPostText.bind(props.store)}*/
                            dispatch={props.store.dispatch.bind(props.store)}
                            profilePage={state.profilePage}
                        />}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                        <Route path="/friends" element={<Friends friends={state.friends}/>}/>
                    </Routes>

                </div>
            </div>
        </BrowserRouter>
    );
}
export default App;

