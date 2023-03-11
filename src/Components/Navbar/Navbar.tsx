import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className={s.navbar}>
            <div className={s.item}> <NavLink to='/profile' activeClassName={s.active}> Profile </NavLink> </div>
            <div className={s.item}> <NavLink to='/dialogs' activeClassName={s.active}> Messages </NavLink> </div>
            <div className={s.item}> <a> News </a> </div>
            <div className={s.item}> <a> Music </a></div>
            <div className={s.item}> <a> Settings </a></div>
        </nav>
    );
};

export default Navbar;