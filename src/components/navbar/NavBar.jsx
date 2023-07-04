"use client"
import Link from 'next/link.js';
import React, { useContext, useState } from 'react';
import styles from "./navbar.module.css"
import Image from 'next/image.js';
import DarkMode from '../darkMode/DarkMode.jsx';
import { ThemeContext } from '@/context/themeContextToggle.js';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const {mode} = useContext(ThemeContext)
    const links = [
        {
            id: 1,
            title: "Home",
            url: "/",
        },
        {
            id: 2 ,
            title: "Portfolio",
            url: "/portfolio",
        },
        {
            id: 3,
            title: "Blog",
            url: "/blog",
        },
        {
            id: 4,
            title: "About",
            url: "/about",
        },
        {
            id: 5,
            title: "Contact",
            url: "/contact",
        },
        {
            id: 6,
            title: "Dashboard",
            url: "/dashboard",
        },
        
    ]
    return (
        <nav className={styles.container}>
            <div className={styles.signature}>
                <Image className={styles.logoImg} src="/img/logoali.png" width={100} height={70} alt='logo picture' />
            </div>
            <div className={styles.btnContainer}>
                <button className={`${styles.btn} ${styles.btnone}`}
                    onClick={()=> setIsOpen(!isOpen)}
                >
                    <svg className={mode ==="light" ? `${styles.hamburger}`: `${styles.hamburger} ${styles.dark}`} viewBox='0 0 100 100'  width={30}>
                        <rect className={isOpen ?  `${styles.line} ${styles.top}`:`${styles.line}` }
                         width={80}
                         height={10}
                         x={10}
                         y={25}
                         rx={5}
                         ></rect> 
                         <rect className={isOpen ?  `${styles.line} ${styles.middle}`:`${styles.line}` }
                         width={80}
                         height={10}
                         x={10}
                         y={45}
                         rx={5}
                         ></rect>
                         <rect className={isOpen ?  `${styles.line} ${styles.bottom}`:`${styles.line}` }
                         width={80}
                         height={10}
                         x={10}
                         y={65}
                         rx={5}
                         ></rect>
                    </svg>
                </button>
            </div>
            <ul className={isOpen ? `${styles.active}`: `${styles.ul}`}>
                <DarkMode />
                {links.map(link => (
                    <li key={link.id} className={styles.li} onClick={()=> setIsOpen(false)}>
                        <Link href={link.url}>{link.title}</Link>
                    </li>
                ))}
                <button
          className={styles.logout}
          onClick={() => console.log("logged out")}
        >
          Logout
        </button>
            </ul>
        </nav>
    );
};

export default NavBar;