import React from 'react';
import s from './Header.module.css'


const Header = () => {
    return (
        <header className={s.header}>
            <img src={'https://media.istockphoto.com/id/1278996256/vector/camera-icon-simple-style-isolated-vector-illustration-on-white-background.jpg?s=612x612&w=0&k=20&c=nmJsi4AIImCMPD_hyNDb8kLhO1iDRcbW-haTBcByOJo='}/>
        </header>
    );
};

export default Header;