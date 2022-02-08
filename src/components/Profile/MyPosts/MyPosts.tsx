import React, {ChangeEvent} from "react";
import {Post} from "./Post/Post";
import mpsts from "./MyPosts.module.css"
import {ProfilePageType} from "../../../redux/state";

type MyPostsPropsType = {
    profilePage: ProfilePageType
    addPost: (newPostText: string) => void
    updateNewPostText: (newPostText: string) => void
}


export const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.profilePage.posts.map(pst => <Post messageText={pst.messageText}
                                                                 likeCount={pst.likeCount}
                                                                 key={pst.id}/>)

    const onAddPostClickHandler = () => {
        props.addPost(props.profilePage.newPostText)
    }


    const onNewPostTextChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
            props.updateNewPostText(e.currentTarget.value)
    }

    return (

        <div className={mpsts.postsBlock}>
            <h3>My Posts</h3>

            <div>
                <div>
                    <textarea onChange={onNewPostTextChangeHandler} value={props.profilePage.newPostText} />
                </div>
                <div>
                    <button onClick={onAddPostClickHandler}>Add post</button>
                </div>
            </div>
            <div className={mpsts.posts}> {postsElements} </div>
        </div>
    )
}