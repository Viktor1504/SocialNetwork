import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './dialogItem/DialogItem';
import {Message} from './message/Message';
import {DataTypeProps} from '../../index';

export const Dialogs = ({dialogs, messages}: DataTypeProps) => {

    const dialogsElements = dialogs ? dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>) : null
    const messagesElements = messages ? messages.map(message => <Message id={message.id} message={message.message}/>) : null

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

