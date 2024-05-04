import React from 'react';
import s from './ProfileInfo.module.css'
import {Preloader} from '../../common/Preloader/Preloader';
import userPhoto from '../../../assets/images/user.jpeg'
import {ProfileStatus} from './ProfileStatus';
import {ProfilePropsType} from '../Profile';

export const ProfileInfo = (props: ProfilePropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto}
                     alt={'not found...'}/>
                <ProfileStatus status={props.status} updateStatusTC={props.updateStatusTC}/>
            </div>
        </div>
    )
}