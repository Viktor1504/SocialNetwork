import React from 'react';
import {Post} from './post/Post';
import {ProfilePropsType} from '../Profile';
import {addPostAC, updateNewPostTextAC} from '../../../redux/profileReducer';
import {MyPosts} from './MyPosts';

export const MyPostsContainer: React.FC<ProfilePropsType> = (props) => {

    const postsElements = props.profilePage.posts.map(post => <Post key={post.id}
                                                                    id={post.id}
                                                                    message={post.message}
                                                                    likesCount={post.likesCount}/>)
    const newPostText = props.profilePage.newPostText

    const onClickAddPost = () => {
        props.dispatch(addPostAC())
    }

    const onPostChange = (text: string) => {
        props.dispatch(updateNewPostTextAC(text))
    }

    return (
        <MyPosts addPost={onClickAddPost}
                 updateNewPostText={onPostChange}
                 newPostText={newPostText}
                 postsElements={postsElements}
        />
    )
}