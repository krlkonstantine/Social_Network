import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Profile} from "./components/Profile/Profile";
import {Settings} from "./components/Settings/Settings";
import {Music} from "./components/Music/Music";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {FriendsContainer} from "./components/Friends/FriendsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";

type AppPropsType = {

}

let App = (props: AppPropsType) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/dialogs/*" element={<DialogsContainer/>}/>
                        <Route path="/profile" element={<Profile/>}/>
                        <Route path="/friends" element={<FriendsContainer/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                        <Route path="/users" element={<UsersContainer/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}
export default App;

