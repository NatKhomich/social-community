import React from 'react';
import styles from './Header.module.css'
import logo from '../../image/social-logo.png'
import {NavLink} from 'react-router-dom';
import Button from '@mui/material/Button';

type HeaderType = {
    isLoggedIn: boolean
    login: string | null
    logout: () => void
}

const Header = (props: HeaderType) => {
    return (
        <header className={styles.header}>
            <img alt={'logo'} src={logo}/>
            {props.isLoggedIn
                ? <div className={styles.loginText}>
                    <div className={styles.login}>
                        {props.login}
                    </div>
                    <Button color="secondary" variant={'outlined'} onClick={() => props.logout()}>Log Out</Button>
                </div>
                : <NavLink className={styles.loginBlock} to={'/login'}>
                    <Button color="secondary" variant={'outlined'}>Login</Button>
                </NavLink>
            }
        </header>
    )
}

export default Header;