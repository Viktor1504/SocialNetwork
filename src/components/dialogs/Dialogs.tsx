import React from 'react';
import s from './Dialogs.module.css'

export const Dialogs = (props: any) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    Victor
                </div>
                <div className={s.dialog}>
                    Pavel
                </div>
                <div className={s.dialog}>
                    Dima
                </div>
                <div className={s.dialog}>
                    Lena
                </div>
                <div className={s.dialog}>
                    Sveta
                </div>

            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How is your</div>
                <div className={s.message}>Yo</div>
            </div>
        </div>
    );
};

