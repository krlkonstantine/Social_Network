import React, {ChangeEvent, Dispatch} from "react";
import {Post} from "./Post/Post";
import myPosts from "./MyPosts.module.css"
import {ProfilePageType} from "../../../redux/redux-store";

type MyPostsPropsType = {
    profilePage: ProfilePageType
    addPost: () => void
    updNewPostText: (newPostText: string) => void
}


export const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.profilePage.posts.map(pst => <Post messageText={pst.messageText}
                                                                 likeCount={pst.likeCount}
                                                                 key={pst.id}/>)

    const onAddPostClickHandler = () => {
        props.addPost()
    }
    const onNewPostTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) =>
        props.updNewPostText(e.currentTarget.value)
    return (
        <div className={myPosts.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea onChange={onNewPostTextChangeHandler} value={props.profilePage.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPostClickHandler}>Add post</button>
                </div>
            </div>
            <div className={myPosts.posts}> {postsElements} </div>
        </div>
    )
}