import {ActionsTypes} from './actionsTypes';

export type UsersType = {
    id: string
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: { city: string, country: string }
}
export type InitialStateType = {
    users: UsersType[]
}

const initialState: InitialStateType = {
    users: []
}

export const usersReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'FOLLOW': {
            return {...state, users: state.users.map(u => u.id === action.userID ? {...u, followed: true} : u)}
        }

        case 'UNFOLLOW': {
            return {...state, users: state.users.map(u => u.id === action.userID ? {...u, followed: false} : u)}
        }
        case 'SET-USERS': {
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state
    }
}

export const followAC = (userID: string) => ({type: 'FOLLOW', userID}) as const
export const unfollowAC = (userID: string) => ({type: 'UNFOLLOW', userID}) as const
export const setUsersAC = (users: UsersType[]) => ({type: 'SET-USERS', users}) as const