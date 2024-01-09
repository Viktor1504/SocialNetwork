import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import {Post} from './post/Post';
import {ProfilePropsType} from '../Profile';
import {addPostAC, updateNewPostTextAC} from '../../../redux/profileReducer';

export const MyPosts: React.FC<ProfilePropsType> = (props) => {

    const postsElements = props.profilePage.posts.map(post => <Post key={post.id}
                                                                    id={post.id}
                                                                    message={post.message}
                                                                    likesCount={post.likesCount}/>)

    const onClickAddPost = () => props.dispatch(addPostAC())

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => props.dispatch(updateNewPostTextAC(e.currentTarget.value))

    return <div className={s.postsBlock}>
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
}