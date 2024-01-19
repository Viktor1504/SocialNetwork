import React from 'react';
import {ProfileInfo} from './profileInfo/ProfileInfo';
import {MyPostsContainer} from './myPosts/MyPostsContainer';
import {Store} from 'redux';
import {AppRootStateType} from '../../redux/redux-store';

// export type ProfilePropsType = {
//     store: Store<AppRootStateType>
// }

export const Profile = () => {
    return <div>
        <ProfileInfo/>
        <MyPostsContainer/>
    </div>
}