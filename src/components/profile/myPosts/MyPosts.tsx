import React from 'react';
import s from './MyPosts.module.css'
import {Post} from './post/Post';
import {DataTypeProps} from '../../../index';

export const MyPosts = ({posts}: DataTypeProps) => {

    const postsElements = posts ? posts.map(post => <Post id={post.id} message={post.message}
                                                          likesCount={post.likesCount}/>) : null

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}
