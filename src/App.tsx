import React from 'react';
import './App.css';
import {Navbar} from './components/navbar/Navbar';
import {Profile} from './components/profile/Profile';
import {Header} from './components/header/Header';
import {Dialogs} from './components/dialogs/Dialogs';
import {Route, Routes} from 'react-router-dom';
import {ActionsTypes, RootStateType} from './redux/store';

type PropsType = {
    state: RootStateType
    dispatch: (action: ActionsTypes) => void
}

function App(props: PropsType) {
    debugger
    return <div className="app-wrapper">
        <Header/>
        <Navbar/>
        <div className={'app-wrapper-content'}>
            <Routes>
                <Route path="/dialogs"
                       element={<Dialogs
                           dialogsPage={props.state.dialogsPage}
                           dispatch={props.dispatch}
                       />}/>
                <Route path="/profile"
                       element={<Profile
                           profilePage={props.state.profilePage}
                           dispatch={props.dispatch}
                       />}/>
            </Routes>
        </div>
    </div>
}

export default App;