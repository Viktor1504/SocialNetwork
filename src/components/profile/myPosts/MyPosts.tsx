import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import {PostType} from '../../../redux/store';

type MyPostsPropsType = {
    updateNewPostText: (text: string) => void
    addPost: () => void
    postsElements: React.ReactNode
    newPostText: string
}

export const MyPosts = (props: MyPostsPropsType) => {

    const onClickAddPost = () => {
        props.addPost()
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea value={props.newPostText} onChange={onPostChange}/>
                </div>
                <div>
                    <button onClick={onClickAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {props.postsElements}
            </div>
        </div>
    )
}