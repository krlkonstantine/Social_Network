import {v1} from "uuid";
import {ActionType, DialogsPagePropsType} from "../store";

export type AddMessageAT = ReturnType<typeof addMessageActionCreator>

const initialState: DialogsPagePropsType = {
    dialogs: {
        dialogsPerson: [
            {_id: v1(), name: 'Mama'},
            {_id: v1(), name: 'Alex'},
            {_id: v1(), name: 'Dima'},
            {_id: v1(), name: 'Leha'},
            {_id: v1(), name: 'Sasha'},
            {_id: v1(), name: 'IT-Incubator'}
        ],
        messages: [
            {_id: v1(), message: 'first message'},
            {_id: v1(), message: 'second message'},
            {_id: v1(), message: 'third message'},
            {_id: v1(), message: 'first message'},
            {_id: v1(), message: 'second message'},
            {_id: v1(), message: 'third message'},
            {_id: v1(), message: 'Sasha'}
        ]
    },
}

export const dialogsReducer = (state: DialogsPagePropsType = initialState,
                               action: ActionType): DialogsPagePropsType => {
    switch (action.type) {
        case "ADD-MESSAGE": {
            let newMessage = {
                _id: v1(),
                message: `${action.textNewMessage}`
            }
            return  {
                ...state,
                dialogs: {
                    ...state.dialogs,
                    messages: [...state.dialogs.messages, newMessage]
                },
            }
        }
        default: return state
    }
}

export const addMessageActionCreator = (textNewMessage: string) => {
    return {type: 'ADD-MESSAGE', textNewMessage: textNewMessage} as const
}