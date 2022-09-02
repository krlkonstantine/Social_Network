import React, {ChangeEvent, Dispatch} from "react";
import {Post} from "./Post/Post";
import mpsts from "./MyPosts.module.css"
import {ActionTypes, ProfilePageType} from "../../../redux/store";
import {addPostAC, updNewPostTextAC} from "../../../redux/profile-reducers"
import {ActionsType} from "../../../redux/redux-store";
type MyPostsPropsType = {
    profilePage: ProfilePageType
    dispatch: Dispatch<ActionsType>
}


export const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.profilePage.posts.map(pst => <Post messageText={pst.messageText}
                                                                 likeCount={pst.likeCount}
                                                                 key={pst.id}/>)

    const onAddPostClickHandler = () => props.dispatch(addPostAC())
    const onNewPostTextChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) =>
        props.dispatch(updNewPostTextAC(e.currentTarget.value.toString()))

    return (
        <div className={mpsts.postsBlock}>
            <h3>My Posts</h3>

            <div>
                <div>
                    <textarea onChange={onNewPostTextChangeHandler} value={props.profilePage.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPostClickHandler}>Add post</button>
                </div>
            </div>
            <div className={mpsts.posts}> {postsElements} </div>
        </div>
    )
}