export type DialogsTextsType = {
    id: number
    name: string
}
export type MessagesTextsType = {
    id: number
    messageText: string
}
export type PostsTextsType = {
    id: number
    messageText: string
    likeCount: string
}
export type DialogsPageType = {
    dialogs: Array<DialogsTextsType>
    messages: Array<MessagesTextsType>
    newMessageText: string
}
export type ProfilePageType = {
    posts: Array<PostsTextsType>
    newPostText: string
}
export type FriendsType = {
    id: number
    name: string
}

export type RootStateType = {
    dialogsPage: DialogsPageType
    profilePage: ProfilePageType
    friends: Array<FriendsType>
}


export type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    addPost: () => void
    updateNewPostText: (newPostText: string) => void
    sendMessage: () => void
    updateMessageText: (newMsgText: string) => void
    _rerenderEntireTree: () => void
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionTypes) => void
}

export type ActionTypes = AddNewPostActionType | UpdNewPostTextActionType | SendNewMsgActionType | UpdNewMsgTextActionType

type AddNewPostActionType = {
    actionType: 'ADD-NEW-POST'
}
type UpdNewPostTextActionType = {
    actionType: 'UPDATE-NEW-POST-TEXT'
    newPostText: string
}
type SendNewMsgActionType = {
    actionType: 'SEND-NEW-MSG'
}
type UpdNewMsgTextActionType = {
    actionType: 'UPDATE-NEW-MSG-TEXT'
    newMsgText: string
}

export const store: StoreType = {
    dispatch(action: any) {
        if (action.type === 'ADD-NEW-POST') {
            let newPost: PostsTextsType = {id: 4, messageText: store._state.profilePage.newPostText, likeCount: '0'}
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ""
            this._rerenderEntireTree()
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newPostText
            this._rerenderEntireTree()
        } else if (action.type === 'SEND-NEW-MSG') {
            let newMessage: MessagesTextsType = {id: 4, messageText: store._state.dialogsPage.newMessageText}
            this._state.dialogsPage.messages.push(newMessage)
            this._state.dialogsPage.newMessageText = ""
            this._rerenderEntireTree()
        } else if (action.type === 'UPDATE-NEW-MSG-TEXT') {
            this._state.dialogsPage.newMessageText = action.newMsgText
            this._rerenderEntireTree()
        }
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

    addPost() {
        let newPost: PostsTextsType = {id: 4, messageText: store._state.profilePage.newPostText, likeCount: '0'}
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ""
        this._rerenderEntireTree()
    },
    updateNewPostText(newPostText: string) {
        this._state.profilePage.newPostText = newPostText
        this._rerenderEntireTree()
    },
    sendMessage() {
        let newMessage: MessagesTextsType = {id: 4, messageText: store._state.dialogsPage.newMessageText}
        this._state.dialogsPage.messages.push(newMessage)
        this._state.dialogsPage.newMessageText = ""
        this._rerenderEntireTree()
    },
    updateMessageText(newMsgText: string) {
        this._state.dialogsPage.newMessageText = newMsgText
        this._rerenderEntireTree()
    },


}







