import React from "react";
import {ProfilePageType} from "../../../redux/store";
import {addPostAC, updNewPostTextAC} from "../../../redux/profile-reducers"
import {StoreType} from "../../../redux/redux-store";
import {MyPosts} from "./MyPosts";
import {StoreContext} from "../../../StoreContext";

type MyPostsContainerType = {}

export const MyPostsContainer = (props: MyPostsContainerType) => {

    return (
        <StoreContext.Consumer>{
            (value) => {

                const addPost = () => {
                    value.dispatch(addPostAC())
                }
                const updNewPostText = (newPostText: string) => {
                    value.dispatch(updNewPostTextAC(newPostText))
                }

                return <MyPosts profilePage={value.getState().profilePage} updNewPostText={updNewPostText}
                                addPost={addPost}/>
            }
        }

        </StoreContext.Consumer>

    )
}