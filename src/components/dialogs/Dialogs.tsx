import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './dialogItem/DialogItem';
import {Message} from './message/Message';
import {ActionsTypes, DialogsPageType} from '../../redux/store';
import {sendMessageAC, updateNewMessageTextAC} from '../../redux/dialogsReducer';
import {Store} from 'redux';
import {AppRootStateType} from '../../redux/redux-store';

type DialogsType = {
    store: Store<AppRootStateType>
}

export const Dialogs: React.FC<DialogsType> = (props) => {

    const dialogsElements = props.store.getState().dialogsPage.dialogs.map(dialog => <DialogItem key={dialog.id}
                                                                                                 id={dialog.id}
                                                                                                 name={dialog.name}/>)
    const messagesElements = props.store.getState().dialogsPage.messages.map(message => <Message key={message.id}
                                                                                                 id={message.id}
                                                                                                 message={message.message}/>)

    const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.store.dispatch(updateNewMessageTextAC(e.currentTarget.value))
    }

    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageAC())
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea placeholder={'enter your message'}
                                  value={props.store.getState().dialogsPage.newMessageText}
                                  onChange={onMessageChange}></textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

