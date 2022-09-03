import React from "react";
import {ProfilePageType} from "../../../redux/store";
import {addPostAC, updNewPostTextAC} from "../../../redux/profile-reducers"
import {StoreType} from "../../../redux/redux-store";
import {MyPosts} from "./MyPosts";

type MyPostsContainerType = {
    store: StoreType
}


export const MyPostsContainer = (props: MyPostsContainerType) => {

    let state = props.store.getState()

    const addPost = () => {
        props.store.dispatch(addPostAC())
    }
    const updNewPostText = (newPostText: string) => {
        props.store.dispatch(updNewPostTextAC(newPostText))
    }
    return (
        <MyPosts profilePage={state.profilePage} updNewPostText={updNewPostText} addPost={addPost}/>
    )
}