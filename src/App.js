import React, { Component } from 'react';
import Header from "./components/header/Header";
import './App.css'
import NavBar from "./components/navbar/NavBar";
import Profile from "./components/profile/Profile";
import { BrowserRouter as Router, Switch, Route, Link, withRouter } from "react-router-dom";

import Dialogs from "./components/dialogs/Dialogs";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/setting/Settings";
import Friend from "./components/friends/Friend";

const App = ( props ) => {
    return (
        <Router>
            <div className={ 'app-wrapper' }>
                <Header/>
                <NavBar/>
                <div className={ 'app-wrapper-content' }>
                    <Route path={ '/profile' }
                           render={ () => <Profile state={ props.state.profilePage } addPost={props.addPost}/> }/>
                    <Route path={ '/dialogs' }
                           render={ () => <Dialogs state={ props.state.dialogPage }/> }/>
                    <Route path={ '/news' } render={ () => <News/> }/>
                    <Route path={ '/music' } render={ () => <Music/> }/>
                    <Route path={ '/setting' } render={ () => <Settings/> }/>
                    <Route path={ '/friends' } render={ () => <Friend/> }/>
                </div>
            </div>
        </Router>
    );
}

export default App;