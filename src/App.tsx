import React from 'react';
import './App.css';
import {Navbar} from './components/navbar/Navbar';
import {Profile} from './components/profile/Profile';
import {Header} from './components/header/Header';
import {Dialogs} from './components/dialogs/Dialogs';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>

                <div className={'app-wrapper-content'}>
                    <Routes>
                        <Route path="profile" element={<Profile/>}/>
                        <Route path="dialogs" element={<Dialogs/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
