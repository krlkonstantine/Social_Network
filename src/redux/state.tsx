
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
    subscribe: (observer: ()=>void) => void
}

export const store: StoreType = {
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
    _rerenderEntireTree() {
        console.log('state rendered')
    },
    subscribe(observer: ()=>void) {
        this._rerenderEntireTree = observer
    },
}


/*
export let state: RootStateType = {
    dialogsPage: {
        dialogs: [
            {id: 1, name: "Dimych"},
            {id: 2, name: "Sandu"},
            {id: 3, name: "Viktor"},
            {id: 4, name: "Nastasiale"},
            {id: 5, name: "Vadim"},
            {id: 6, name: "Gagiu"},
            {id: 7, name: "Gagiu"},
        ],
        messages: [
            {id: 7, messageText: "Does it really works??"},
            {id: 1, messageText: "Ну Хэллоу"},
            {id: 2, messageText: "Гдэ ДЭньги??"},
            {id: 3, messageText: "Whaaat"},
            {id: 4, messageText: "50 Rubley"},
            {id: 5, messageText: "Polnostyu Lomay"},
            {id: 6, messageText: "Ya tvoy DOM tryba shatal!"},
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
}

export const addPost = () => {
    let newPost: PostsTextsType = {id: 4, messageText: state.profilePage.newPostText, likeCount: '0'}
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ""
    renderTree()
}
export const updateNewPostText = (newPostText: string) => {
    state.profilePage.newPostText = newPostText
    renderTree()
}
export const sendMessage = () => {
    let newMessage: MessagesTextsType = {id: 4, messageText: state.dialogsPage.newMessageText}
    state.dialogsPage.messages.push(newMessage)
    state.dialogsPage.newMessageText = ""
    renderTree()
}
export const updateMessageText = (newMsgText: string) => {
    state.dialogsPage.newMessageText = newMsgText
    renderTree()
}

export let renderTree = () => {
        console.log("hello")
    }

    export const subscribe = (observer: () => void) => {
        renderTree = observer
    }*/






