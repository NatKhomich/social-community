import React from 'react';
import styles from './Navbar.module.css'
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <ul className={styles.items}>

            <li className={styles.item}>
                <NavLink to="/profile" className={styles.link} activeClassName={styles.linkActive}>
                    <div className={styles.image}>
                        {/*<img src={iconProfile} alt="icon-profile"/>*/}
                    </div>
                    <span className={styles.span}>Profile</span>
                </NavLink>
            </li>

            <li className={styles.item}>
                <NavLink to="/messenger" className={styles.link} activeClassName={styles.linkActive}>
                    <div className={styles.image}>
                        {/*<img src={iconProfile} alt="icon-profile"/>*/}
                    </div>
                    <span className={styles.span}>Messenger</span>
                </NavLink>
            </li>

            <li className={styles.item}>
                <NavLink to="/users" className={styles.link} activeClassName={styles.linkActive}>
                    <div className={styles.image}>
                        {/*<img src={iconProfile} alt="icon-profile"/>*/}
                    </div>
                    <span className={styles.span}>Users</span>
                </NavLink>
            </li>

            <li className={styles.item}>
                <NavLink to="/news" className={styles.link} activeClassName={styles.linkActive}>
                    <div className={styles.image}>
                        {/*<img src={iconProfile} alt="icon-profile"/>*/}
                    </div>
                    <span className={styles.span}>News</span>
                </NavLink>
            </li>

            <li className={styles.item}>
                <NavLink to="/music" className={styles.link} activeClassName={styles.linkActive}>
                    <div className={styles.image}>
                        {/*<img src={iconProfile} alt="icon-profile"/>*/}
                    </div>
                    <span className={styles.span}>Music</span>
                </NavLink>
            </li>

            <li className={styles.item}>
                <NavLink to="/settings" className={styles.link} activeClassName={styles.linkActive}>
                    <div className={styles.image}>
                        {/*<img src={iconProfile} alt="icon-profile"/>*/}
                    </div>
                    <span className={styles.span}>Settings</span>
                </NavLink>
            </li>
        </ul>
    )
};

export default Navbar;