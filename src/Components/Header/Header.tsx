import React from 'react';
import s from './Header.module.css'
import logo from '../../image/social-network-low-resolution-logo-black-on-transparent-background.png'


const Header = () => {
    return (
        <header className={s.header}>
            <img src={logo}/>
        </header>
    );
};

export default Header;