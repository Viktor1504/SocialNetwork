import s from '../Dialogs.module.css';
import React from 'react';

type MessagePropsType = {
    id: string
    message: string
}
export const Message: React.FC<MessagePropsType> = (props) => {
    return <div className={s.message}>{props.message}</div>
}