import React from 'react';
import './App.css';
import {NavBar} from "./components/NavBar/NavBar";
import {Settings} from "./components/Settings/Settings";
import {Music} from "./components/Music/Music";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {FriendsContainer} from "./components/Friends/FriendsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import ProfileExtContainer from "./components/Profile/Profile.Container";
import {HeaderExtContainer} from "./components/Header/HeaderContainer";
import {Login} from "./components/Login/Login";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


let App = () => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderExtContainer/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/login/*" element={<Login/>}/>
                        <Route path="/dialogs/*" element={<DialogsContainer/>}/>
                        <Route path="/profile/:userId" element={<ProfileExtContainer/>}>
                            <Route path="" element={<ProfileExtContainer/>}/>
                        </Route>
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