"use client"
import React, { useContext } from 'react';
import styles from "./darkMode.module.css"
import { ThemeContext } from '@/context/themeContextToggle.js';
const DarkMode = () => {
    const {toggle, mode} = useContext(ThemeContext)
    return (
        <div className={styles.container} onClick={toggle}>
            <div className={styles.icon}>🌙</div>
            <div className={styles.icon}>🔆</div>
            <div className={mode === "light" ? `${styles.ball}`: `${styles.ball} ${styles.right}`}
            /* style={mode === "light" ? {left:"2px"}: {right:  "2px"}} */
            ></div>
        </div>
    );
};

export default DarkMode;