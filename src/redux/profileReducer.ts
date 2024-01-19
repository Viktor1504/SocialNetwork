import {ActionsTypes} from './store';

export type PostType = {
    id: string
    message: string
    likesCount: number
}
export type InitialStateType = {
    posts: PostType[]
    newPostText: string
}

const initialState: InitialStateType = {
    posts: [
        {id: crypto.randomUUID(), message: 'Hi, how are you?', likesCount: 12},
        {id: crypto.randomUUID(), message: 'It\'s my firs post', likesCount: 11},
        {id: crypto.randomUUID(), message: 'Bla', likesCount: 10},
        {id: crypto.randomUUID(), message: 'BLABLABLA', likesCount: 9}
    ],
    newPostText: ''
}

export const profileReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'ADD-POST' :
            const newPost: PostType = {
                id: crypto.randomUUID(),
                message: state.newPostText,
                likesCount: 0
            }
            return {...state, posts: [...state.posts, newPost], newPostText: ''}
        case 'UPDATE-NEW-POST-TEXT':
            return {...state, newPostText: action.newText}
        default:
            return state
    }
}

export const addPostAC = () => ({type: 'ADD-POST'}) as const
export const updateNewPostTextAC = (text: string) => ({type: 'UPDATE-NEW-POST-TEXT', newText: text}) as const