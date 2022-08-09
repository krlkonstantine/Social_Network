import React, {ChangeEvent} from "react";
import {Post} from "./Post/Post";
import mpsts from "./MyPosts.module.css"
import {ActionTypes, ProfilePageType} from "../../../redux/state";
//import {type} from "os";

type MyPostsPropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionTypes) => void
    /*addPost: (newPostText: string) => void
    updateNewPostText: (newPostText: string) => void*/
}


export const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.profilePage.posts.map(pst => <Post messageText={pst.messageText}
                                                                 likeCount={pst.likeCount}
                                                                 key={pst.id}/>)

    const onAddPostClickHandler = () => {
        debugger
        //props.addPost(props.profilePage.newPostText)
        props.dispatch({actionType: 'ADD-NEW-POST'})
    }


    const onNewPostTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        //props.updateNewPostText(e.currentTarget.value)
        props.dispatch({actionType: 'UPDATE-NEW-POST-TEXT', newPostText: e.currentTarget.value},)
    }

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