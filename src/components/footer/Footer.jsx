import React from 'react';
import styles from "./footer.module.css"
import Image from 'next/image.js';
import { SiLinkedin, SiGithub, SiTwitter,SiYoutube } from "react-icons/si";

const footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.signature}>
                <Image className={styles.logoImg} src="/img/logoali.png" width={100} height={80} alt='logo picture' />
            </div>
            <div className={styles.textBox}>
                <p>2023 © Ali Missoum <br />- Le Mans, FRANCE - SIRET n° - contact@alimissoum.com</p>
            </div>
            <div className={styles.iconsBox}>
                <div className={styles.iconContainer}>
                    <SiLinkedin className={styles.icon}/>
                </div>
                <div className={styles.iconContainer}>
                    <SiGithub className={styles.icon}/>
                </div>
                <div className={styles.iconContainer}>
                    <SiTwitter className={styles.icon}/>
                </div>
                <div className={styles.iconContainer}>
                    <SiYoutube className={styles.icon}/>
                </div>
                
            </div>
        </div>
    );
};

export default footer;