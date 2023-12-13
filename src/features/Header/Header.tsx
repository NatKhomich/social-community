import React from 'react';
import styles from './Header.module.css'
import logo from '../../common/image/social-logo.png'
import {NavLink} from 'react-router-dom';
import Button from '@mui/material/Button';

type HeaderType = {
    isLoggedIn: boolean
    login: string | null
    logout: () => void
}

const Header = (props: HeaderType) => {
    const {isLoggedIn, logout, login} = props

    return (
        <header className={styles.header}>

            <NavLink className={styles.img} to="/profile"> <img alt={'logo'} src={logo}/> </NavLink>

            {isLoggedIn
                ? <div className={styles.loginText}>
                    <div className={styles.login}>
                        {login}
                    </div>
                    <Button color="secondary" variant={'outlined'} onClick={() => logout()}>Log Out</Button>
                </div>
                : <NavLink className={styles.loginBlock} to={'/login'}>
                    <Button color="secondary" variant={'outlined'}>
                        Login
                    </Button>
                </NavLink>
            }
        </header>
    )
}

export default Header;