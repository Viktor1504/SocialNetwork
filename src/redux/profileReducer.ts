import {ActionsTypes} from './actionsTypes';

const initialState: InitialStateType = {
    posts: [
        {id: crypto.randomUUID(), message: 'Hi, how are you?', likesCount: 12},
        {id: crypto.randomUUID(), message: 'It\'s my firs post', likesCount: 11},
        {id: crypto.randomUUID(), message: 'Bla', likesCount: 10},
        {id: crypto.randomUUID(), message: 'BLABLABLA', likesCount: 9}
    ],
    newPostText: '',
    profile: {
        aboutMe: '',
        contacts: {
            facebook: null,
            website: null,
            vk: null,
            twitter: null,
            instagram: null,
            youtube: null,
            github: null,
            mainLink: null
        },
        lookingForAJob: false,
        lookingForAJobDescription: '',
        fullName: '',
        userId: '',
        photos: {
            small: '',
            large: ''
        }
    }
}

export const profileReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'ADD-POST' :
            const newPost: PostType = {id: crypto.randomUUID(), message: state.newPostText, likesCount: 0}
            return {...state, posts: [...state.posts, newPost], newPostText: ''}
        case 'UPDATE-NEW-POST-TEXT':
            return {...state, newPostText: action.newText}
        case 'SET-USER-PROFILE' :
            return {...state, profile: action.profile}
        default:
            return state
    }
}

export const addPostAC = () => ({type: 'ADD-POST'}) as const
export const setUserProfile = (profile: ProfileType) => ({type: 'SET-USER-PROFILE', profile}) as const
export const updateNewPostTextAC = (text: string) => ({type: 'UPDATE-NEW-POST-TEXT', newText: text}) as const


export type PostType = {
    id: string
    message: string
    likesCount: number
}

export type ProfileType = {
    aboutMe: string
    contacts: {
        facebook: string | null
        website: string | null
        vk: string | null
        twitter: string | null
        instagram: string | null
        youtube: string | null
        github: string | null
        mainLink: string | null
    }
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: string
    photos: {
        small: string
        large: string
    }
}

export type InitialStateType = {
    posts: PostType[]
    newPostText: string
    profile: ProfileType
}