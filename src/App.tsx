import React from 'react';
import './App.css';
import {Navbar} from './components/navbar/Navbar';
import {Profile} from './components/profile/Profile';
import {Header} from './components/header/Header';
import {Route, Routes} from 'react-router-dom';
import {DialogsContainer} from './components/dialogs/DialogsContainer';
import {UsersContainer} from './components/users/UsersContainer';

function App() {
    return <div className="app-wrapper">
        <Header/>
        <Navbar/>
        <div className={'app-wrapper-content'}>
            <Routes>
                <Route path="/dialogs"
                       element={<DialogsContainer/>}
                />
                <Route path="/profile"
                       element={<Profile/>}
                />
                <Route path="/users"
                       element={<UsersContainer/>}
                />
            </Routes>
        </div>
    </div>
}

export default App;