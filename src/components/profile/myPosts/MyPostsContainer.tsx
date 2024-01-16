import React from 'react';
import {addPostAC, updateNewPostTextAC} from '../../../redux/profileReducer';
import {MyPosts} from './MyPosts';
import {Store} from 'redux';
import {AppRootStateType} from '../../../redux/redux-store';

export type MyPostsContainerPropsType = {
    store: Store<AppRootStateType>
}

export const MyPostsContainer: React.FC<MyPostsContainerPropsType> = (props) => {

    const state = props.store.getState()

    const onClickAddPost = () => {
        props.store.dispatch(addPostAC())
    }

    const onPostChange = (text: string) => {
        props.store.dispatch(updateNewPostTextAC(text))
    }

    return (
        <MyPosts addPost={onClickAddPost}
                 updateNewPostText={onPostChange}
                 newPostText={state.profilePage.newPostText}
                 postsElements={state.profilePage.posts}
        />
    )
}