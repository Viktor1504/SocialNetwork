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
            {id: '1', message: 'Hi, how are you?', likesCount: 12},
            {id: '2', message: 'It\'s my firs post', likesCount: 11},
            {id: '3', message: 'Bla', likesCount: 10},
            {id: '4', message: 'BLABLABLA', likesCount: 9}
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: '1', name: 'Victor'},
            {id: '2', name: 'Pavel'},
            {id: '3', name: 'Dima'},
            {id: '4', name: 'Lena'},
            {id: '5', name: 'Sweta'},
            {id: '6', name: 'Valera'}
        ],
        messages: [
            {id: '1', message: 'Hi'},
            {id: '2', message: 'How is your'},
            {id: '3', message: 'Yo'},
            {id: '4', message: 'Yo'},
            {id: '5', message: 'Yo'},
            {id: '6', message: 'Yo'}
        ]
    },
    sidebar: {}
}
