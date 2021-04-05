import React from "react";
import '../navbar/NavStyle.css'
import { NavLink } from "react-router-dom";

const NavBar = (props) =>{
    return(
        <div className={'nav_main'}>
            <nav className={'nav_wrapper'}>
                <div className={'items'}><NavLink to={'/profile'}>Profile</NavLink></div>
                <div className={'items'}><NavLink to={'/dialogs'}>Message</NavLink></div>
                <div className={'items'}><NavLink to={'/news'}>News</NavLink></div>
                <div className={'items'}><NavLink to={'/music'}>Music</NavLink></div>
                <div className={'items'}><NavLink to={'/setting'}>Setting</NavLink></div>
                <br/>
                <div className={'items'}><NavLink to={'/friends'}>Friends</NavLink></div>
              
            </nav>
        </div>
    )
}

export default NavBar