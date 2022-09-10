import React, {Dispatch} from "react";

import {sendNewMsgAC, updNewMsgTextAC} from "../../redux/dialogs-reducers"
import {ActionsType, AppStateType, DialogsPageType} from "../../redux/redux-store";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";

type mapStateToPropsType = {
    dialogsPage: DialogsPageType
    avatar: string
    name: string
}

/*export const DialogsContainer = (props: DialogsPropsType) => {


    return (
        <StoreContext.Consumer>
            {
                (value) => {
                    const sendMessageFnc = () => value.dispatch(sendNewMsgAC())
                    const onMsgTextChangeFnc = (newMessageText: string) => value.dispatch(updNewMsgTextAC(newMessageText))

                    return <Dialogs avatar={"ghhghg"}
                                    name={"panda"}
                                    dialogsPage={value.getState().dialogsPage}
                                    //dispatch={value.dispatch}
                                    sendMessageCallback={sendMessageFnc}
                                    changeMessageText={onMsgTextChangeFnc}
                    />
                }


            }
        </StoreContext.Consumer>
    )
}*/

//задача этой фн превратить часть стейта в пропсы
//чтомы мыоттуда взяли что нам надо и вернули объект с данными
let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
        avatar: "ghhghg",
        name: "panda",
    }
}
//задача этой фн превратить часть коллбэков в пропсы
//диспатч приходит сюда как store.dispatch(bind(store))
let mapDispatchToProps = (dispatch: Dispatch<ActionsType>) => {
    return {
        //стора у нас уже не будет
        //sendMessageCallback: ()=> {store.dispatch(sendNewMsgAC())} ,
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
