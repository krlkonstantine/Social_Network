import React from "react";
import h from './Header.module.css';
import {NavLink} from "react-router-dom";
import {ReactComponent} from "*.svg";
import {Header} from "./Header";

type StateType = any
type authPropsType = any

export class HeaderContainer extends React.Component<authPropsType, StateType> {
    render() {
        return (
            < Header {...this.props}/>
        )
    }
}