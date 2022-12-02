import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserDataAC} from "../../redux/auth-reducers";


type StateType = any
type AuthPropsType = any

export type MapStateToPropsType = {
    isAuth: boolean,
    login: string
}
export type MapDispatchToPropsType = {
    setAuthUserDataAC: (id:number, login:string, email:string) => void
}

type HeaderContainerPropType = MapStateToPropsType & MapDispatchToPropsType & AuthPropsType

export class HeaderContainer extends React.Component<HeaderContainerPropType, StateType> {

    componentDidMount() {
        axios.get<any>(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                    if (response.data.resultCode === 0) {
                        let {id, login, email} = response.data.data
                        this.props.setAuthUserDataAC(id, login, email)
                        //вместо this.props.setAuthUserDataAC
                        // (response.data.data.id,response.data.data.login,response.data.data.email)
                    }
                }
            )
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

export const HeaderExtContainer = connect(mapStateToProps, {setAuthUserDataAC})(HeaderContainer)