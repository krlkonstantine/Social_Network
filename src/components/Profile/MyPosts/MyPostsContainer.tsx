import React, {Dispatch} from "react";
import {addPostAC, updNewPostTextAC} from "../../../redux/profile-reducers"
import {ActionsType, AppStateType, StoreType} from "../../../redux/redux-store";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";


/*export const MyPostsContainer = (props: MyPostsContainerType) => {

    return <div>hi</div>(
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
}*/

const mapStateToProps = (state: AppStateType) => {
    return {
        profilePage: state.profilePage
    }
}

const mapDispatchToProps = (dispatch:Dispatch<ActionsType>) => {
    return {
        addPost: ()=>{dispatch(addPostAC())},
        updNewPostText: (newPostText: string)=>{updNewPostTextAC(newPostText)},
    }
}

export const MyPostsContainer = connect (mapStateToProps,mapDispatchToProps)(MyPosts);