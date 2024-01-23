import {ActionsTypes} from './actionsTypes';

export type MessageType = {
    id: string
    message: string
}
export type DialogType = {
    id: string
    name: string
}

export type InitialStateType = {
    dialogs: DialogType[]
    messages: MessageType[]
    newMessageText: string
}

const initialState: InitialStateType = {
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
}

export const dialogsReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-TEXT':
            return {...state, newMessageText: action.newMessage}
        case 'SEND-MESSAGE':
            const newMessage = {id: crypto.randomUUID(), message: state.newMessageText}
            return {...state, messages: [...state.messages, newMessage], newMessageText: ''}
        default :
            return state
    }
}

export const sendMessageAC = () => ({type: 'SEND-MESSAGE'}) as const
export const updateNewMessageTextAC = (text: string) => ({type: 'UPDATE-NEW-MESSAGE-TEXT', newMessage: text}) as const