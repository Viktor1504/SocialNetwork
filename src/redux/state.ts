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
}
export type SidebarType = {}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}

const store = {
    _state: <RootStateType>{
        profilePage: {
            posts: [
                {id: crypto.randomUUID(), message: 'Hi, how are you?', likesCount: 12},
                {id: crypto.randomUUID(), message: 'It\'s my firs post', likesCount: 11},
                {id: crypto.randomUUID(), message: 'Bla', likesCount: 10},
                {id: crypto.randomUUID(), message: 'BLABLABLA', likesCount: 9}
            ],
            newPostText: 'it-kamasutra.com'
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
            ]
        },
        sidebar: {}
    },
    getState() {
        return this._state
    },
    _callSubscriber(state: RootStateType) {
        console.log('State changed')
    },
    addPost() {
        const newPost: PostType = {
            id: crypto.randomUUID(),
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)
    },
    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },
    subscribe(observer: (state: RootStateType) => void) {
        this._callSubscriber = observer
    }
}

export default store