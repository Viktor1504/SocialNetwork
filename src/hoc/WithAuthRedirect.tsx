import React, {ComponentType} from 'react';
import {Navigate} from 'react-router-dom';
import {connect} from 'react-redux';
import {AppRootStateType} from '../redux/redux-store';

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        isLoggedIn: state.auth.isLoggedIn
    }
}

export const WithAuthRedirect = (Component: ComponentType) => {

    const RedirectComponent = (props: MapStatePropsType) => {
        const {isLoggedIn, ...restProps} = props
        return !isLoggedIn
            ? <Navigate to={'/login'}/>
            : <Component {...restProps}/>
    }

    return connect(mapStateToProps)(RedirectComponent)
}

type MapStatePropsType = {
    isLoggedIn: boolean
}