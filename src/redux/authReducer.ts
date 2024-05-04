import {ActionsTypes} from './actionsTypes';
import {Dispatch} from 'redux';
import {authAPI, LoginParamsType} from '../api/api';

const initialState = {
    id: null,
    email: null,
    login: null,
    isLoggedIn: false
}

export const authReducer = (state: AuthStateType = initialState, action: ActionsTypes): AuthStateType => {
    switch (action.type) {
        case 'SET-USER-DATA' :
            return {...state, ...action.data}
        case 'login/SET-IS_LOGIN':
            return {...state, isLoggedIn: action.value}
        default:
            return state
    }
}

export const setAuthUserData = (data: AuthStateType) => ({type: 'SET-USER-DATA' as const, data})
export const setIsLoggedInAC = (value: boolean) => ({type: 'login/SET-IS_LOGIN' as const, value})

export const getAuthUserDataTC = () => async (dispatch: Dispatch<ActionsTypes>) => {
    const res = await authAPI.me()
    if (res.data.resultCode === 0) {
        dispatch(setAuthUserData(res.data.data))
        dispatch(setIsLoggedInAC(true))
    }
}

export const loginTC = (data: LoginParamsType) => async (dispatch: Dispatch<ActionsTypes>) => {
    const res = await authAPI.login(data)
    if (res.data.resultCode === 0) {
        dispatch(setIsLoggedInAC(true))
    }
}

export const logoutTC = () => async (dispatch: Dispatch<ActionsTypes>) => {
    const res = await authAPI.logout()
    if (res.data.resultCode === 0) {
        dispatch(setIsLoggedInAC(false))
    }
}

export type AuthStateType = {
    id: number | null
    email: string | null
    login: string | null
    isLoggedIn: boolean
}