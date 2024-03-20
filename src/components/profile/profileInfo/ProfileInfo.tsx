import React from 'react';
import s from './ProfileInfo.module.css'
import {Preloader} from '../../common/Preloader/Preloader';
import {InitialStateType, ProfileType} from '../../../redux/profileReducer';
import {ProfilePropsType} from '../Profile';

export const ProfileInfo = (props: ProfilePropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img
                    src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350"/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} alt={'not found...'}/>
                ava + description
            </div>
        </div>
    )
}
