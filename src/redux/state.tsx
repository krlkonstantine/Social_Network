import {rerenderEntireTree} from "../render";
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
export type FriendsTyPe = {
    id: number
    name: string
}

export type RootStateType = {
    dialogsPage: DialogsPageType
    profilePage: ProfilePageType
    friends: Array<FriendsTyPe>
}

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
    rerenderEntireTree(state)
}
export const updateNewPostText = (newPostText: string) => {
    state.profilePage.newPostText = newPostText
    rerenderEntireTree(state)
}

export const sendMessage = () => {
    let newMessage: MessagesTextsType = {id: 4, messageText: state.dialogsPage.newMessageText}
    state.dialogsPage.messages.push(newMessage)
    state.dialogsPage.newMessageText = ""
    rerenderEntireTree(state)
}
export const updateMessageText = (newMsgText: string) => {
    state.dialogsPage.newMessageText = newMsgText
    rerenderEntireTree(state)
}













