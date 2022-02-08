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
import {RootStateType} from "./redux/state";

type AppPropsType = {
    state: RootStateType
    addPost: (newPostText: string) => void
    updateNewPostText: (newPostText: string) => void
    sendMessageCallback: (msgTxt: string) => void
}

let App = (props: AppPropsType) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/dialogs/*" element={<Dialogs avatar={"ghhghg"}
                                                                   name={"panda"}
                                                                   dialogsPage={props.state.dialogsPage}
                                                                   sendMessageCallback={props.sendMessageCallback}/>}/>
                        <Route path="/profile" element={<Profile addPost={props.addPost} updateNewPostText={props.updateNewPostText} profilePage={props.state.profilePage}/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                        <Route path="/friends" element={<Friends friends={props.state.friends}/>}/>
                    </Routes>

                </div>
            </div>
        </BrowserRouter>
    );
}
export default App;

