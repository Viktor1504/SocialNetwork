import React from 'react';
import {MyPosts} from './myPosts/MyPosts';
import {ProfileInfo} from './profileInfo/ProfileInfo';
import {ActionsTypes, ProfilePageType} from '../../redux/store';
import {MyPostsContainer} from './myPosts/MyPostsContainer';

export type ProfilePropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionsTypes) => void
}

export const Profile: React.FC<ProfilePropsType> = (props) => {
    return <div>
        <ProfileInfo/>
        <MyPostsContainer profilePage={props.profilePage}
                          dispatch={props.dispatch}
        />
    </div>
}