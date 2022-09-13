import React from "react";
import st from './NavBar.module.css';
import {NavLink} from "react-router-dom";


export const NavBar = () => {
    return (
        <nav className={st.nav}>
            <div>
                <NavLink className={({ isActive }) =>  isActive ? `${st.active}` : `${st.item}`} to="/profile" >Profile</NavLink>
            </div>
            <div>
                <NavLink className={({ isActive }) =>  isActive ? `${st.active}` : `${st.item}`}  to="/dialogs">Messages</NavLink>
            </div>
            <div>
                <NavLink className={({ isActive }) =>  isActive ? `${st.active}` : `${st.item}`}  to="/users">Users</NavLink>
            </div>
            <div>
                <NavLink className={({ isActive }) =>  isActive ? `${st.active}` : `${st.item}`}  to="/music">Music</NavLink>
            </div>
            <div>
                <NavLink className={({ isActive }) =>  isActive ? `${st.active}` : `${st.item}`}  to="/settings">Settings</NavLink>
            </div>
            <div>
                <NavLink className={({ isActive }) =>  isActive ? `${st.active}` : `${st.item}`}  to="/friends">Friends</NavLink>
            </div>
        </nav>
    )
}