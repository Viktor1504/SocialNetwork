import React from 'react';
import './App.css';
import {Navbar} from './components/navbar/Navbar';
import {Profile} from './components/profile/Profile';
import {Header} from './components/header/Header';
import {Dialogs} from './components/dialogs/Dialogs';
import {Route, Routes} from 'react-router-dom';
import {ActionsTypes, RootStateType} from './redux/store';
import {AppRootStateType} from './redux/redux-store';
import {Store} from 'redux';

type PropsType = {
    state: RootStateType
    store: Store<AppRootStateType>
    dispatch: (action: ActionsTypes) => void
}

function App(props: PropsType) {
    return <div className="app-wrapper">
        <Header/>
        <Navbar/>
        <div className={'app-wrapper-content'}>
            <Routes>
                <Route path="/dialogs"
                       element={<Dialogs store={props.store}/>}
                />
                <Route path="/profile"
                       element={<Profile
                           store={props.store}/>}
                />
            </Routes>
        </div>
    </div>
}

export default App;