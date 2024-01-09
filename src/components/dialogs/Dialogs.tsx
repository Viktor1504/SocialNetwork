import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './dialogItem/DialogItem';
import {Message} from './message/Message';
import {ActionsTypes, sendMessageAC, DialogsPageType, updateNewMessageTextAC} from '../../redux/state';

type DialogsType = {
    dialogsPage: DialogsPageType
    dispatch: (action: ActionsTypes) => void
}

export const Dialogs: React.FC<DialogsType> = (props) => {

    const dialogsElements = props.dialogsPage.dialogs.map(dialog => <DialogItem key={dialog.id} id={dialog.id}
                                                                                name={dialog.name}/>)
    const messagesElements = props.dialogsPage.messages.map(message => <Message key={message.id} id={message.id}
                                                                                message={message.message}/>)

    const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewMessageTextAC(e.currentTarget.value))
    }

    const onSendMessageClick = () => {
        props.dispatch(sendMessageAC())
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
                                  value={props.dialogsPage.newMessageText}
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

