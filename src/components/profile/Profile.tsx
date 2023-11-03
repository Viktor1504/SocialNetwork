import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from './myPosts/MyPosts';

export const Profile = () => {
    return (
        <div>
            <div>
                <img
                    src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350"/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    )
}
