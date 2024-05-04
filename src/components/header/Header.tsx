import React, {FC, useCallback} from 'react';
import {NavLink} from 'react-router-dom';
import {AuthStateType, logoutTC} from '../../redux/authReducer';
import {AppBar, Button, IconButton, Toolbar, Typography} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import s from './Header.module.css'
import {useDispatch} from 'react-redux';

export const Header: FC<HeaderPropsType> = ({auth}) => {

    const dispatch = useDispatch()

    const logoutHandler = useCallback(() => {
        dispatch(logoutTC())
    }, [])

    return <AppBar position="static" className={s.header}>
        <Toolbar>
            <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{mr: 2}}>
                <MenuIcon/>
            </IconButton>
            <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                {auth.isLoggedIn ? auth.login : <NavLink to={'/login'}>Login</NavLink>}
            </Typography>
            {auth.isLoggedIn && <Button color="inherit" onClick={logoutHandler}>Log out</Button>}
        </Toolbar>
    </AppBar>
}

type HeaderPropsType = {
    auth: AuthStateType
}