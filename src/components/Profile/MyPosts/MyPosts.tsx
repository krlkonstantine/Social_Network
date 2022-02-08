import React from "react";
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
                                                                 likeCount={pst.likeCount}/>)
    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const onAddPostClickHandler = () => {
        if (newPostElement.current) {
            props.addPost(newPostElement.current.value)
        }
    }

    const onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            props.updateNewPostText(text)
        }
    }

    return (

        <div className={mpsts.postsBlock}>
            <h3>My Posts</h3>

            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.profilePage.newPostText} ref={newPostElement}/>
                </div>
                <div>
                    <button onClick={onAddPostClickHandler}>Add post</button>
                </div>
            </div>
            <div className={mpsts.posts}> {postsElements} </div>
        </div>
    )
}