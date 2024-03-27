import React, {FC} from 'react';
import s from './Header.module.css'
import {NavLink} from 'react-router-dom';
import {AuthStateType} from '../../redux/authReducer';

export const Header: FC<HeaderPropsType> = ({auth}) => {
    return <header className={s.header}>
        <img src="https://www.freelogodesign.org/Content/img/logo-ex-7.png" alt={'logo'}/>
        <div className={s.loginBlock}>
            {auth.isAuth ? auth.login : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
}

type HeaderPropsType = {
    auth: AuthStateType
}