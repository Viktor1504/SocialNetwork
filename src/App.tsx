import React from 'react';
import './App.css';
import {Navbar} from './components/navbar/Navbar';
import {Profile} from './components/profile/Profile';
import {Header} from './components/header/Header';
import {Dialogs} from './components/dialogs/Dialogs';
import {Route, Routes} from 'react-router-dom';
import {RootStateType} from './redux/state';

type PropsType = {
    state: RootStateType
    addPost: () => void
    updateNewPostText: (text: string) => void
}

function App(props: PropsType) {

    return <div className="app-wrapper">
        <Header/>
        <Navbar/>
        <div className={'app-wrapper-content'}>
            <Routes>
                <Route path="/dialogs"
                       element={<Dialogs
                           dialogs={props.state.dialogsPage.dialogs}
                           messages={props.state.dialogsPage.messages}/>}/>
                <Route path="/profile"
                       element={<Profile
                           profilePage={props.state.profilePage}
                           addPost={props.addPost}
                           updateNewPostText={props.updateNewPostText}
                       />}/>
            </Routes>
        </div>
    </div>
}

export default App;