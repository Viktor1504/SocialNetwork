import React, {useRef} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './dialogItem/DialogItem';
import {Message} from './message/Message';
import {DialogsPageType} from '../../redux/state';

export const Dialogs: React.FC<DialogsPageType> = (props) => {

    const dialogsElements = props.dialogs.map(dialog => <DialogItem key={dialog.id} id={dialog.id} name={dialog.name}/>)
    const messagesElements = props.messages.map(message => <Message key={message.id} id={message.id}
                                                                    message={message.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

