import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import {Post} from './post/Post';
import {MyPostsPropsType} from './MyPostsContainer';

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    const postsElements = props.postsElements.map(post => <Post key={post.id}
                                                                id={post.id}
                                                                message={post.message}
                                                                likesCount={post.likesCount}/>)

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
                {postsElements}
            </div>
        </div>
    )
}