import React from 'react';
import {sendMessageAC, updateNewMessageTextAC} from '../../redux/dialogsReducer';
import {Store} from 'redux';
import {AppRootStateType} from '../../redux/redux-store';
import {Dialogs} from './Dialogs';

type DialogsType = {
    store: Store<AppRootStateType>
}

export const DialogsContainer: React.FC<DialogsType> = (props) => {

    const state = props.store.getState().dialogsPage

    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageAC())
    }

    const onMessageChange = (body: string) => {
        props.store.dispatch(updateNewMessageTextAC(body))
    }

    return (
        <Dialogs updateNewMessage={onMessageChange} dialogsPage={state} sendMessage={onSendMessageClick}/>
    )
}

