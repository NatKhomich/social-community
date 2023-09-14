import React from 'react';
import s from './Header.module.css'
import logo from '../../image/social-network-low-resolution-logo-black-on-transparent-background.png'
import {NavLink} from 'react-router-dom';

type HeaderType = {
    isAuth: boolean
    login: string | null
}

const Header = (props: HeaderType) => {
    return (
        <header className={s.header}>
            <img alt={'logo'} src={logo}/>
            {props.isAuth
                ? <div className={s.loginText}> {props.login} </div>
                : <NavLink className={s.loginBlock} to={'/login'}>
                    <div className={s.login}> Login</div>
                </NavLink>
            }
        </header>
    );
};

export default Header;