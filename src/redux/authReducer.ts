import {ActionsTypes} from './actionsTypes';

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

export type AuthStateType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

export const authReducer = (state: AuthStateType = initialState, action: ActionsTypes): AuthStateType => {
    switch (action.type) {
        case 'SET-USER-DATA' :
            return {...state, ...action.data, isAuth: true}
        default:
            return state
    }
}

export const setAuthUserData = (data: AuthStateType) => ({type: 'SET-USER-DATA', data}) as const
