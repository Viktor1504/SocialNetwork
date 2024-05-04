import {Profile} from './Profile';
import {getStatusTC, getUserProfileTC, ProfileType, updateStatusTC} from '../../redux/profileReducer';
import {connect} from 'react-redux';
import {AppRootStateType} from '../../redux/redux-store';
import React, {ComponentType, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {compose} from 'redux';
import {WithAuthRedirect} from '../../hoc/WithAuthRedirect';

const ProfileContainer = (props: PropsType) => {
    const {userId} = useParams<ParamsType>()

    useEffect(() => {
        props.getUserProfileTC(userId || '22803')
        props.getStatusTC(userId || '22803')
    }, [userId])

    return <Profile {...props} profile={props.profile} status={props.status} updateStatusTC={props.updateStatusTC}/>
}

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
    }
}

export default compose<ComponentType>(
    connect(mapStateToProps, {getUserProfileTC, getStatusTC, updateStatusTC}),
    WithAuthRedirect
)(ProfileContainer)

type ParamsType = {
    userId: string
}
type MapStatePropsType = {
    profile: ProfileType
    status: string
}
type MapDispatchPropsType = {
    getUserProfileTC: (userId: string) => void
    getStatusTC: (userId: string) => void
    updateStatusTC: (userId: string) => void
}
type PropsType = MapStatePropsType & MapDispatchPropsType