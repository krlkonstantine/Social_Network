import {
    AddMessageAT,
} from "./reducers/dialogs-reducer";
import {
    AddPostAT, DeletePostAT,
    setUserProfileAT, setUserStatusAT,
} from "./reducers/profile-reducer";
import {
    FollowAT,
    SetAT,
    setCurrentPageAT,
    ToggleFollowingProgressAT,
    UnfollowAT,
} from "./reducers/users-reducer";
import {ProfileType} from "../components/main/ProfilePage/Profile";
import {PostType} from "../components/main/Posts/Posts";
import {SetUserDataAT} from "./reducers/auth-reducer";
import {ChangePreloaderStatusType} from "./reducers/preloaderReducer";
import {SetInitializedType} from "./reducers/app-reducer";

// export type StorePropsType = {
//     _state: StatePropsType
//     getState: () => StatePropsType
//     _callSubscriber: (state: StatePropsType) => void
//     subscribe: (observer: () => void) => void
//     dispatch: (action: ActionType) => void
// }
// export type StatePropsType = {
//     profilePage: ProfilePagePropsType
//     dialogsPage: DialogsPagePropsType
//     sidebar: SidebarPropsType
//     usersPage: InitialStateType
//     preloader: PreloaderStateType
// }
export type ProfilePagePropsType = {
    profile: ProfileType | null
    posts: Array<PostType>
    status: string
}
export type DialogsPagePropsType = {
    dialogs: {
        dialogsPerson: {
            _id: string
            name: string
        }[]
        messages: {
            _id: string
            message: string
        }[]
    }
}
export type SidebarPropsType = {}
export type ActionType = AddPostAT
    | AddMessageAT
    | FollowAT
    | UnfollowAT
    | SetAT
    | setCurrentPageAT
    | setUserProfileAT
    | SetUserDataAT
    | ToggleFollowingProgressAT
    | setUserStatusAT
    | ChangePreloaderStatusType
    | SetInitializedType
    | DeletePostAT


// export const store: StorePropsType = {
//     _state: {
//         profilePage: {
//             profile: {
//                 aboutMe: '',
//                 contacts: {
//                     facebook: null,
//                     website: null,
//                     vk: null,
//                     twitter: null,
//                     instagram: null,
//                 },
//                 fullName: '',
//                 lookingForAJob: true,
//                 lookingForAJobDescription: '',
//                 photos: {
//                     small: null,
//                     large: null
//                 },
//                 userId: 1
//             },
//             posts: [],
//             status: ''
//         },
//         dialogsPage: {
//             dialogs: {
//                 dialogsPerson: [
//                     {_id: v1(), name: 'Mama'},
//                     {_id: v1(), name: 'Alex'},
//                     {_id: v1(), name: 'Dima'},
//                     {_id: v1(), name: 'Leha'},
//                     {_id: v1(), name: 'Sasha'},
//                     {_id: v1(), name: 'IT-Incubator'}
//                 ],
//                 messages: [
//                     {_id: v1(), message: 'first message'},
//                     {_id: v1(), message: 'second message'},
//                     {_id: v1(), message: 'third message'},
//                     {_id: v1(), message: 'first message'},
//                     {_id: v1(), message: 'second message'},
//                     {_id: v1(), message: 'third message'},
//                     {_id: v1(), message: 'Sasha'}
//                 ]
//             },
//         },
//         sidebar: {},
//         usersPage: {
//             users: [],
//             pageSize: 0,
//             totalUsersCount: 0,
//             currentPage: 0,
//             followingProgress: []
//         },
//         preloader: {
//             preloader: false
//         }
//     },
//     _callSubscriber() {
//     },
//     getState() {
//         return this._state
//     },
//     subscribe(observer: () => void) {
//         this._callSubscriber = observer
//     },
//     dispatch(action: ActionType) {
//         profileReducer(this._state.profilePage, action)
//         dialogsReducer(this._state.dialogsPage, action)
//         usersReducer(this._state.usersPage, action)
//         sidebarReducer(this._state.sidebar, action)
//         preloaderReducer(this._state.preloader, action)
//         this._callSubscriber(this._state)
//     }
// }




