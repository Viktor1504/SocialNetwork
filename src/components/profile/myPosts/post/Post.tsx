import React from 'react';
import s from './Posts.module.css'
import {PostType} from '../../../../redux/profileReducer';

export const Post = (props: PostType) => {
    return (
        <div className={s.item}>
            <img
                src={'https://thumbs.dreamstime.com/b/%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D0%B0-%D0%BB%D1%8E%D0%B4%D0%B5%D0%B9-%D0%B8%D0%BA%D0%BE%D0%BD%D0%BA%D0%B0-%D0%BF%D1%80%D0%BE%D1%81%D1%82%D0%BE%D0%B9-%D0%BF%D0%BB%D0%BE%D1%81%D0%BA%D0%B8%D0%B9-%D1%80%D0%B8%D1%81%D1%83%D0%BD%D0%BE%D0%BA-159018237.jpg'}/>
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    )
}
