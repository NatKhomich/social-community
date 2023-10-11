import React from 'react';
import s from './Header.module.css'
import logo from '../../image/social-network-low-resolution-logo-black-on-transparent-background.png'
import {NavLink} from 'react-router-dom';
import Button from '@mui/material/Button';

type HeaderType = {
    isAuth: boolean
    login: string | null
    logout: () => void
}

const Header = (props: HeaderType) => {
    return (
        <header className={s.header}>
            <img alt={'logo'} src={logo}/>
            {props.isAuth
                ? <div className={s.loginText}> {props.login}
                    <Button color="secondary" onClick={() => props.logout()}>Log Out</Button>
            </div>
                : <NavLink className={s.loginBlock} to={'/login'}>
                    <Button color="secondary" >Login</Button>
                </NavLink>
            }
        </header>
    )
}

export default Header;