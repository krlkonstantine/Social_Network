import React from "react";
import {Dispatch} from "redux";
import {DialogsPageType, sendNewMsgAC, updNewMsgTextAC} from "../../redux/dialogs-reducers"
import {ActionsType, AppStateType} from "../../redux/redux-store";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";

type mapStateToPropsType = {
    dialogsPage: DialogsPageType
    avatar: string
    name: string
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
        avatar: "ghhghg",
        name: "panda",
    }
}
type mapDispatchToPropsType = {
    sendMessageCallback: () => void
    changeMessageText: (newMessageText: string) => void
}
let mapDispatchToProps = (dispatch: Dispatch<ActionsType>): mapDispatchToPropsType => {
    return {
        sendMessageCallback: () => {
            dispatch(sendNewMsgAC())
        },
        changeMessageText: (newMessageText: string) => {
            dispatch(updNewMsgTextAC(newMessageText))
        },
    }
}

//fn connect есть в React-Redux
//Dialogs, мы хотим созд през.комп ктр снабдит тебя даннными
//первым вызовом коннекта мы как бы настраиваем нашу контейнерную
//сначала коннект создаст контенерную компоненту, потом отрисует презентационную
//и запихнет в нее через атрибуты. Формируются 2 bj, склеиваются в 1 и go как пропсы в диалогс
//эти две фнк без вызова (), коннекст их вызовет сам, а в них он передаст store
//эти две fnc настраивают наш коннект,
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
