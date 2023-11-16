import React from 'react';
import './App.css';
import {Navbar} from './components/navbar/Navbar';
import {Profile} from './components/profile/Profile';
import {Header} from './components/header/Header';
import {Dialogs} from './components/dialogs/Dialogs';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {RootStateType} from './redux/state';

type PropsType = {
    state: RootStateType
}

function App(props: PropsType) {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Routes>
                        <Route path="/profile/*"
                               element={<Profile posts={props.state.profilePage.posts}/>}/>
                        <Route path="/dialogs/*"
                               element={<Dialogs dialogs={props.state.dialogsPage.dialogs}
                                                 messages={props.state.dialogsPage.messages}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
