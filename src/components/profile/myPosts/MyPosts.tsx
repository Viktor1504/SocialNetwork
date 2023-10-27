import React from 'react';
import s from './MyPosts.module.css'
import {Post} from './post/Post';

export const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message={'Hi, how are you?'} likes={'15'}/>
                <Post message={'It\'s my firs post'} likes={'10'}/>
            </div>
        </div>
    )
}
