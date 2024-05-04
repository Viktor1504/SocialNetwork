import React from 'react';
import './App.css';
import {Navbar} from './components/navbar/Navbar';
import {Route, Routes} from 'react-router-dom';
import HeaderContainer from './components/header/HeaderContainer';
import UsersContainer from './components/users/UsersContainer';
import ProfileContainer from './components/profile/ProfileContainer';
import DialogsContainer from './components/dialogs/DialogsContainer';
import {Login} from './components/login/Login';

function App() {
    return <div className="app-wrapper">
        <HeaderContainer/>
        <Navbar/>
        <div className={'app-wrapper-content'}>
            <Routes>
                <Route path="/dialogs"
                       element={<DialogsContainer/>}
                />
                <Route path="/profile/:userId?"
                       element={<ProfileContainer/>}
                />
                <Route path="/users"
                       element={<UsersContainer/>}
                />
                <Route path="/login"
                       element={<Login/>}
                />
            </Routes>
        </div>
    </div>
}

export default App;