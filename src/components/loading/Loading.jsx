import React from 'react';
import styles from "./loading.module.css"
const Loading = () => {
    return (
        <div className={styles.container}>
            <div className={styles.balls}>
                <div className={`${styles.ball} ${styles.ball1}`}></div>
                <div className={`${styles.ball} ${styles.ball2}`}></div>
                <div className={`${styles.ball} ${styles.ball3}`}></div>
            </div>
        </div>
    );
};

export default Loading;