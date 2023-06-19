"use client"
import Link from 'next/link.js';
import React from 'react';
import styles from "./navbar.module.css"
import Image from 'next/image.js';

const NavBar = () => {
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
            <Link  href="/" className={styles.logo}>
                <Image className={styles.img} src="/img/profile.png" width={80}height={80} alt='profile image' /><span className={styles.name}>Ali Missoum</span>
            </Link>
            <ul className={styles.ul}>
                {links.map(link => (
                    <li key={link.id} className={styles.li}>
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