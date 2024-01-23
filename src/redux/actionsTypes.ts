import {addPostAC, updateNewPostTextAC} from './profileReducer';
import {sendMessageAC, updateNewMessageTextAC} from './dialogsReducer';

export type ActionsTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof sendMessageAC>
    | ReturnType<typeof updateNewMessageTextAC>