import dialogsReducer, {DialogsReducerType, sendNewMsgAC, updNewMsgTextAC} from "./dialogs-reducers";
import profileReducer, {addPostAC, ProfileReducerType, updNewPostTextAC} from "./profile-reducers";
import friendsReducer from "./friends-reducers";

type DialogsTextsType = {
    id: number
    name: string
}
type MessagesTextsType = {
    id: number
    messageText: string
}
type PostsTextsType = {
    id: number
    messageText: string
    likeCount: string
}
type DialogsPageType = {
    dialogs: Array<DialogsTextsType>
    messages: Array<MessagesTextsType>
    newMessageText: string
}
type ProfilePageType = {
    posts: Array<PostsTextsType>
    newPostText: string
}
type FriendsType = {
    id: number
    name: string
}
type RootStateType = {
    dialogsPage: DialogsPageType
    profilePage: ProfilePageType
    friends: Array<FriendsType>
}
type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    _rerenderEntireTree: () => void
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionTypes) => void
}
type ActionTypes = ProfileReducerType & DialogsReducerType

const store: StoreType = {
    dispatch(action: any) {
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.friends = friendsReducer(this._state.friends, action)
        this._rerenderEntireTree()
    },
    _state: {
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Dimych"},
                {id: 2, name: "Sandu"},
                {id: 3, name: "Viktor"},
                {id: 4, name: "Nastasiale"},
                {id: 5, name: "Vadim"},
                {id: 6, name: "Gagiu"},
                {id: 7, name: "Catherine"},
            ],
            messages: [
                {id: 7, messageText: "Hi there"},
                {id: 1, messageText: "Does it really works??"},
                {id: 2, messageText: "1 2 3 4 5 6"},
                {id: 3, messageText: "Whaaat"},
                {id: 4, messageText: "Lorem ipsum dolor"},
                {id: 5, messageText: "The price per unit is"},
                {id: 6, messageText: "Please do not..."},
            ],
            newMessageText: "Hi"
        },
        profilePage: {
            posts: [
                {id: 1, messageText: "Hello everybody!", likeCount: '15'},
                {id: 2, messageText: "Is anybody here?", likeCount: '15'},
                {id: 3, messageText: "Here's the first post o.O!", likeCount: '20'},
            ],
            newPostText: "it-kamasutra.com"
        },
        friends: [
            {id: 1, name: "Dimych"},
            {id: 2, name: "Sandu"},
            {id: 3, name: "Viktor"},
            {id: 4, name: "Nastasiale"},
            {id: 5, name: "Vadim"},
            {id: 6, name: "Gagiu"},
            {id: 7, name: "Gagiu"},
        ]
    },
    _rerenderEntireTree() {
        console.log('state rendered')
    },
    subscribe(observer: () => void) {
        this._rerenderEntireTree = observer
    },

    getState() {
        return this._state
    },
}








