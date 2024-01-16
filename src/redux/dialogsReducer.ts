import {ActionsTypes, DialogsPageType} from './store';

const initialState: DialogsPageType = {
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

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsTypes): DialogsPageType => {
    switch (action.type) {
        case 'SEND-MESSAGE':
            const newMessage = {id: crypto.randomUUID(), message: state.newMessageText}
            return {...state, messages: [...state.messages, newMessage], newMessageText: ''}
        case 'UPDATE-NEW-MESSAGE-TEXT':
            return {...state, newMessageText: action.newMessage}
        default :
            return state
    }
}

export const sendMessageAC = () => ({type: 'SEND-MESSAGE'}) as const
export const updateNewMessageTextAC = (text: string) => ({type: 'UPDATE-NEW-MESSAGE-TEXT', newMessage: text}) as const