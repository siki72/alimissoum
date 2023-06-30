import React from 'react';
import styles from "./button.module.css"
import Link from 'next/link.js';
const Button = ({text, url}) => {
    return (
        <Link href={url} scroll={false}>
            <button className={styles.container}>{text}</button>
        </Link>
    );
};

export default Button;