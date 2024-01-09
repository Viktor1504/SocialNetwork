import {ActionsTypes, DialogsPageType} from './state';

export const dialogsReducer = (state: DialogsPageType, action: ActionsTypes): DialogsPageType => {
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