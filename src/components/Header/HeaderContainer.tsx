import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {getAuthorizedThunkCreator, setAuthUserDataAC} from "../../redux/auth-reducers";
import {usersApi} from "../api/api";


type StateType = any
type AuthPropsType = any

export type MapStateToPropsType = {
    isAuth: boolean,
    login: string
}
export type MapDispatchToPropsType = {
    setAuthUserDataAC: (email: string, id: number, login: string) => void
    getAuthorizedThunkCreator: () => void
}

type HeaderContainerPropType = MapStateToPropsType & MapDispatchToPropsType & AuthPropsType

export class HeaderContainer extends React.Component<HeaderContainerPropType, StateType> {

    componentDidMount() {
        this.props.getAuthorizedThunkCreator()
        /*usersApi.getAuthorized().then(response => {
                if (response.resultCode === 0) {
                    let {email, id, login} = response.data
                    this.props.setAuthUserDataAC(email, id, login)
                    //вместо this.props.setAuthUserDataAC
                    // (response.data.data.id,response.data.data.login,response.data.data.email)
                }
            }
        )*/
    }

    render() {
        return (
            < Header {...this.props}/>
        )
    }
}

//мы обернули header в классовую контейнерную,
//которая выполняет запросы на сервер
//и потом контейнерную еще раз оборачиваем в connect
//через connect передали AC и теперь он доступен через пропсы
const mapStateToProps = (state: any): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export const HeaderExtContainer = connect(mapStateToProps, {setAuthUserDataAC,getAuthorizedThunkCreator})(HeaderContainer)