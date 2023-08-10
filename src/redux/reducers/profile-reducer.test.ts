import react from 'react'
import {addPostActionCreator, deletePostActionCreator, profileReducer} from "./profile-reducer";
import {v1} from "uuid";
import {ProfilePagePropsType} from "../store";


test('profile reducer should add new post', () => {
    //d
    const initialState: ProfilePagePropsType = {
        profile: null,
        posts: [
            {_id: v1(), title: 'Post 3', descr: "This is post about my jobs..."},
            {_id: v1(), title: 'Post 2', descr: "This is post about my family..."},
            {_id: v1(), title: 'Post 1', descr: "This is first post about me..."},
        ],
        status: ''
    }


    // a

    let newState = profileReducer(initialState, addPostActionCreator("This is post about my post haha =D"))
    // e
    expect(newState.posts.length).toBe(4)
    expect(newState.posts[0].descr).toBe("This is post about my post haha =D")
})

test('profile reducer should delete a certain post', () => {
    //d
    const initialState: ProfilePagePropsType = {
        profile: null,
        posts: [
            {_id: '1', title: 'Post 3', descr: "This is post about my jobs..."},
            {_id: '2', title: 'Post 2', descr: "This is post about my family..."},
            {_id: '3', title: 'Post 1', descr: "This is first post about me..."},
        ],
        status: ''
    }


    // a

    let newState = profileReducer(initialState, deletePostActionCreator("2"))
    // e
    expect(newState.posts.length).toBe(2)
    expect(newState.posts[1].title).toBe("Post 1")
})
test('profile reducer should not delete a post if wrong id provided', () => {
    //d
    const initialState: ProfilePagePropsType = {
        profile: null,
        posts: [
            {_id: '1', title: 'Post 3', descr: "This is post about my jobs..."},
            {_id: '2', title: 'Post 2', descr: "This is post about my family..."},
            {_id: '3', title: 'Post 1', descr: "This is first post about me..."},
        ],
        status: ''
    }


    // a

    let newState = profileReducer(initialState, deletePostActionCreator("22"))
    // e
    expect(newState.posts.length).toBe(3)
    expect(newState.posts[1].title).toBe("Post 2")
})