import React from 'react';
import './App.css';
import {Navbar} from './components/navbar/Navbar';
import {Profile} from './components/profile/Profile';
import {Header} from './components/header/Header';
import {Dialogs} from './components/dialogs/Dialogs';

function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Dialogs/>
            </div>
            {/*<Profile/>*/}
        </div>
    );
}

export default App;
