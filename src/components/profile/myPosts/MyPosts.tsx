import React, {ChangeEvent, useRef, useState} from 'react';
import s from './MyPosts.module.css'
import {Post} from './post/Post';
import {ProfilePropsType} from '../Profile';

export const MyPosts: React.FC<ProfilePropsType> = (props) => {

    const postsElements = props.profilePage.posts.map(post => <Post key={post.id}
                                                                    id={post.id}
                                                                    message={post.message}
                                                                    likesCount={post.likesCount}/>)

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
    }

    const onClickAddPost = () => {
        props.addPost()
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea value={props.profilePage.newPostText} onChange={onPostChange}/>
                </div>
                <div>
                    <button onClick={onClickAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}