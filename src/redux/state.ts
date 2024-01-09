import {addPostAC, profileReducer, updateNewPostTextAC} from './profileReducer';
import {dialogsReducer, sendMessageAC, updateNewMessageTextAC} from './dialogsReducer';
import {sidebarReducer} from './sidebarReducer';

export type MessageType = {
    id: string
    message: string
}
export type DialogType = {
    id: string
    name: string
}
export type PostType = {
    id: string
    message: string
    likesCount: number
}
export type ProfilePageType = {
    posts: PostType[]
    newPostText: string
}
export type DialogsPageType = {
    dialogs: DialogType[]
    messages: MessageType[]
    newMessageText: string
}
export type SidebarType = {}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}

export type ActionsTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof sendMessageAC>
    | ReturnType<typeof updateNewMessageTextAC>

const store = {
    _state: <RootStateType>{
        profilePage: {
            posts: [
                {id: crypto.randomUUID(), message: 'Hi, how are you?', likesCount: 12},
                {id: crypto.randomUUID(), message: 'It\'s my firs post', likesCount: 11},
                {id: crypto.randomUUID(), message: 'Bla', likesCount: 10},
                {id: crypto.randomUUID(), message: 'BLABLABLA', likesCount: 9}
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {id: crypto.randomUUID(), name: 'Victor'},
                {id: crypto.randomUUID(), name: 'Pavel'},
                {id: crypto.randomUUID(), name: 'Dima'},
                {id: crypto.randomUUID(), name: 'Lena'},
                {id: crypto.randomUUID(), name: 'Sweta'},
                {id: crypto.randomUUID(), name: 'Valera'}
            ],
            messages: [
                {id: crypto.randomUUID(), message: 'Hi'},
                {id: crypto.randomUUID(), message: 'How is your'},
                {id: crypto.randomUUID(), message: 'Yo'},
                {id: crypto.randomUUID(), message: 'Yo'},
                {id: crypto.randomUUID(), message: 'Yo'},
                {id: crypto.randomUUID(), message: 'Yo'}
            ],
            newMessageText: ''
        },
        sidebar: {}
    },
    _callSubscriber(state: RootStateType) {
        console.log('State changed')
    },
    getState() {
        return this._state
    },
    subscribe(observer: (state: RootStateType) => void) {
        this._callSubscriber = observer
    },

    dispatch(action: ActionsTypes) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state)
    }
}

export default store