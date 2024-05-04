import React from 'react';
import {ProfileInfo} from './profileInfo/ProfileInfo';
import {MyPostsContainer} from './myPosts/MyPostsContainer';
import {ProfileType} from '../../redux/profileReducer';

export const Profile = (props: ProfilePropsType) => {
    return <div>
        <ProfileInfo profile={props.profile} status={props.status} updateStatusTC={props.updateStatusTC}/>
        <MyPostsContainer/>
    </div>
}

export type ProfilePropsType = {
    profile: ProfileType
    status: string
    updateStatusTC: (userId: string) => void
}