import React from 'react';
import s from './App.module.css';
import {Navigation} from "./components/navigation/Navigation";
import {Redirect, Route, withRouter} from "react-router-dom";
import {Messages} from "./components/main/Messages/Messages";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import {LoginPage} from "./components/login/LoginPage";
import ProfileContainer from "./components/main/ProfilePage/ProfileContainer";
import {compose} from "redux";
import {connect} from "react-redux";
import {initializeApp} from "./redux/reducers/app-reducer";
import {ActionType} from "./redux/store";
import {AppStateType} from "./redux/redux-store";
import {Preloader} from "./utils/preloader/Preloader";

type MapDispatchPropsType = {
    initializeApp: () => ActionType
}
type MapStateToPropsType = {
    initialized: boolean
}

type AppClassType = MapStateToPropsType & MapDispatchPropsType

class App extends React.Component<AppClassType> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) return <Preloader/>
        return (
            <div className={s.App}>
                <HeaderContainer/>
                <Navigation/>
                <div>
                    <Redirect exact from={'/'} to={'/profile'}/>
                    <Route path={'/profile/:userId?'}
                           render={() => <ProfileContainer/>}
                    />
                    <Route path={'/messages'}
                           render={() => <Messages/>}
                    />
                    <Route path={'/users'}
                           render={() => <UsersContainer/>}
                    />
                    <Route path={'/login'}
                           render={() => <LoginPage/>}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized
})

export default compose<React.FC>(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(App);
