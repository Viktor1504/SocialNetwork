import {ActionsTypes} from './actionsTypes';

export type UsersType = {
    id: string
    photoUrl: string
    followed: boolean
    name: string
    status: string
    location: { city: string, country: string }
}
export type InitialStateType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

const initialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 2
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
            return {...state, users: action.users}
        }
        case 'SET-CURRENT-PAGE' : {
            return {...state, currentPage: action.currentPage}
        }
        case 'SET-TOTAL-USERS-COUNT': {
            return {...state, totalUsersCount: action.totalCount}
        }
        default:
            return state
    }
}

export const followAC = (userID: string) => ({type: 'FOLLOW', userID}) as const
export const unfollowAC = (userID: string) => ({type: 'UNFOLLOW', userID}) as const
export const setUsersAC = (users: UsersType[]) => ({type: 'SET-USERS', users}) as const
export const setCurrentPageAC = (currentPage: number) => ({type: 'SET-CURRENT-PAGE', currentPage}) as const
export const setTotalUsersCountAC = (totalCount: number) => ({type: 'SET-TOTAL-USERS-COUNT', totalCount}) as const