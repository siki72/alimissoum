"use client"
import React from 'react';
import styles from "./touch.module.css"
import Image from 'next/image.js';
const Touch = () => {
    return (
        <div className={styles.container}>
            <Image className={styles.img} src="/" width={20} height={20} alt=''/>
            <form action="" method="post">
                <div className={`${styles.inputContainer} ${styles.ic1}`}>
                    <input type="text" id={styles.firstName}
                     className={styles.input}
                     placeholder=''
                     />
                     <div className={styles.cut}></div>
                     <label htmlFor="firstName" className={styles.placeHolder}>Nom</label>
                </div>
                <div className={`${styles.inputContainer} ${styles.ic2}`}>
                    <input type="text" id={styles.lastName}
                     className={styles.input}
                     placeholder=''
                     />
                     <div className={styles.cut}></div>
                     <label htmlFor="lastName" className={styles.placeHolder}>Prénom</label>
                </div>
                <div className={`${styles.inputContainer} ${styles.ic3}`}>
                    <input type="email" id={styles.email}
                     className={styles.input}
                     placeholder=''
                     />
                     <div className={styles.cut}></div>
                     <label htmlFor="email" className={styles.placeHolder}>Email</label>
                </div>
                <div className={`${styles.inputContainer} ${styles.ic4}`}>
                    <input type="phone" id={styles.phone}
                     className={styles.input}
                     placeholder=''
                     />
                     <div className={styles.cut}></div>
                     <label htmlFor="phone" className={styles.placeHolder}>Téléphone</label>
                </div>
                <div className={`${styles.inputContainer} ${styles.ic4}`}>
                    <textarea type="text" id={styles.message}
                     className={styles.input}
                     placeholder=''
                     />
                     <div className={styles.cut}></div>
                     <label htmlFor="message" className={styles.placeHolder}>Message</label>
                </div>
                <button type="submit">envoyer</button>
            </form>
        </div>
    );
};

export default Touch;