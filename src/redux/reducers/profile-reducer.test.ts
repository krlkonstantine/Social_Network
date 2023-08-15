import react from 'react'
import {addPostActionCreator, deletePostActionCreator, ProfilePageType, profileReducer} from "./profile-reducer";
import {v1} from "uuid";

const initialState: ProfilePageType = {
    title: "My posts",
    posts: [
        {_id: v1(), title: 'Post 3', descr: "This is post about my jobs..."},
        {_id: v1(), title: 'Post 2', descr: "This is post about my family..."},
        {_id: v1(), title: 'Post 1', descr: "This is first post about me..."},
    ],
    descForNewPost: "",
    profile: {
        fullName: "",
        aboutMe: "",
        userId: null,
        photos: {
            small: "",
            large: "",
        },
        lookingForAJob: true,
        lookingForAJobDescription: "",
        contacts: {
            github: "",
            vk: "",
            facebook: "",
            instagram: "",
            twitter: "",
            website: "",
            youtube: "",
            mainLink: "",
        },
        followed: true,
        uniqueUrlName: "string"
    },
    status: "",
}

test('profile reducer should add new post', () => {
    //d


    // a

    let newState = profileReducer(initialState, addPostActionCreator("This is post about my post haha =D"))
    // e
    expect(newState.posts.length).toBe(4)
    expect(newState.posts[0].descr).toBe("This is post about my post haha =D")
})

test('profile reducer should delete a certain post', () => {
    //d


    // a

    let newState = profileReducer(initialState, deletePostActionCreator("2"))
    // e
    expect(newState.posts.length).toBe(2)
    expect(newState.posts[1].title).toBe("Post 1")
})
test('profile reducer should not delete a post if wrong id provided', () => {
    //d


    // a

    let newState = profileReducer(initialState, deletePostActionCreator("22"))
    // e
    expect(newState.posts.length).toBe(3)
    expect(newState.posts[1].title).toBe("Post 2")
})