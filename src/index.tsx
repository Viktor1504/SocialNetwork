import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

export type DataTypeProps = {
    dialogs?: DialogsType[]
    messages?: MessagesType[]
    posts?: PostsType[]
}

type DialogsType = {
    id: string
    name: string
}

type MessagesType = {
    id: string
    message: string
}

type PostsType = {
    id: string
    message: string
    likesCount: string
}

const dialogs: DialogsType[] = [
    {id: '1', name: 'Victor'},
    {id: '2', name: 'Pavel'},
    {id: '3', name: 'Dima'},
    {id: '4', name: 'Lena'},
    {id: '5', name: 'Sweta'},
    {id: '6', name: 'Valera'}
]

const messages: MessagesType[] = [
    {id: '1', message: 'Hi'},
    {id: '2', message: 'How is your'},
    {id: '3', message: 'Yo'},
    {id: '4', message: 'Yo'},
    {id: '5', message: 'Yo'},
    {id: '6', message: 'Yo'}
]

const posts: PostsType[] = [
    {id: '1', message: 'Hi, how are you?', likesCount: '12'},
    {id: '2', message: 'It\'s my firs post', likesCount: '11'},
    {id: '3', message: 'Bla', likesCount: '11'},
    {id: '4', message: 'BLABLABLA', likesCount: '11'}
]

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <App dialogs={dialogs} messages={messages} posts={posts}/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
