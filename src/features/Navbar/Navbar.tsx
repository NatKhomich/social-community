import React from 'react';
import styles from './Navbar.module.css'
import {NavLink} from 'react-router-dom';
import iconProfile from '../../common/image/profile/buttons/icon-profile.svg'
import iconUsers from '../../common/image/profile/buttons/icon-users.svg'
import iconMessenger from '../../common/image/profile/buttons/icon-messages.svg'
import iconNews from '../../common/image/profile/buttons/icon-news.svg'
import iconSettings from '../../common/image/profile/buttons/icon-settings.svg'

const Navbar = () => {
    return (
        <nav className={styles.root}>
            <div className={styles.wrapper}>

                <ul className={styles.items}>
                    <li className={styles.item}>
                        <NavLink to="/profile" className={styles.link} activeClassName={styles.linkActive}>
                            <div className={styles.image}>
                                <img src={iconProfile} alt="icon-profile"/>
                            </div>
                            <span className={styles.span}>Profile</span>
                        </NavLink>
                    </li>

                    <li className={styles.item}>
                        <NavLink to="/users" className={styles.link} activeClassName={styles.linkActive}>
                            <div className={styles.image}>
                                <img src={iconUsers} alt="icon-profile"/>
                            </div>
                            <span className={styles.span}>Users</span>
                        </NavLink>
                    </li>

                    <li className={styles.item}>
                        <NavLink to="/messenger" className={styles.link} activeClassName={styles.linkActive}>
                            <div className={styles.image}>
                                <img src={iconMessenger} alt="icon-profile"/>
                                <span className={styles.span}>Messenger</span>
                            </div>

                        </NavLink>
                    </li>

                    <li className={styles.item}>
                        <NavLink to="/news" className={styles.link} activeClassName={styles.linkActive}>
                            <div className={styles.image}>
                                <img src={iconNews} alt="icon-profile"/>
                            </div>
                            <span className={styles.span}>News</span>
                        </NavLink>
                    </li>

                    <li className={styles.item}>
                        <NavLink to="/settings" className={styles.link} activeClassName={styles.linkActive}>
                            <div className={styles.image}>
                                <img src={iconSettings} alt="icon-profile"/>
                            </div>
                            <span className={styles.span}>Settings</span>
                        </NavLink>
                    </li>
                </ul>

            </div>
        </nav>

    )
};

export default Navbar;