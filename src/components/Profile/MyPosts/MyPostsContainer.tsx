import React, {ChangeEvent, Dispatch} from "react";
import {ActionTypes, ProfilePageType} from "../../../redux/store";
import {addPostAC, updNewPostTextAC} from "../../../redux/profile-reducers"
import {ActionsType} from "../../../redux/redux-store";
import {MyPosts} from "./MyPosts";

type MyPostsContainerType = {
    profilePage: ProfilePageType
    dispatch: Dispatch<ActionsType>
}


export const MyPostsContainer = (props: MyPostsContainerType) => {

    const addPost = () => {
        props.dispatch(addPostAC())
    }
    const updNewPostText = (newPostText: string) => {
        props.dispatch(updNewPostTextAC(newPostText))
    }
    return (
        <MyPosts profilePage={props.profilePage} updNewPostText={updNewPostText} addPost={addPost}/>
    )
}