import {rerenderEntireTree} from '../render';

type MessageType = {
    id: string
    message: string
}

type DialogType = {
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

type SidebarType = {}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}

export const state: RootStateType = {
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
}

export const addPost = () => {
    const newPost: PostType = {
        id: crypto.randomUUID(),
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}

export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}

