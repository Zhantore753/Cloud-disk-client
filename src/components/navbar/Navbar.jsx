import React from 'react';
import './navbar.css';
import Logo from '../../assets/img/navbar-logo.svg';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="container">
                <NavLink to="/"><img src={Logo} alt="" className="navbar__logo"/></NavLink>
                <NavLink to="/" className="navbar__header"><div>MERN CLOUD</div></NavLink>
                <div className="navbar__login"><NavLink to="/login">Войти</NavLink></div>
                <div className="navbar__registration"><NavLink to="/registration">Регистрация</NavLink></div>
            </div>
        </div>
    );
};

export default Navbar;