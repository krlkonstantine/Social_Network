import React, {Dispatch} from "react";
import {addPostAC, updNewPostTextAC} from "../../../redux/profile-reducers"
import {ActionsType, AppStateType} from "../../../redux/redux-store";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";


const mapStateToProps = (state: AppStateType) => {
    return {
        profilePage: state.profilePage
    }
}

const mapDispatchToProps = (dispatch:Dispatch<ActionsType>) => {
    return {
        addPost: ()=>{dispatch(addPostAC())},
        updNewPostText: (newPostText: string)=>{dispatch(updNewPostTextAC(newPostText))},
    }
}

export const MyPostsContainer = connect (mapStateToProps,mapDispatchToProps)(MyPosts);