"use client";
import React from "react";
import styles from "./touch.module.css";
import Image from "next/image.js";
const Touch = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textBox}>
      <h4 className={styles.title}>Contact.</h4>
      <p>
      Vous êtes intéressé par une collaboration avec moi ? Je suis ouvert à la discussion concernant la conception et le développement de votre application, ainsi que les opportunités de partenariat. N&apos;hésitez pas à me <span className={styles.colorEffect}>contacter</span> .
      </p>
      </div>
      <form action="" method="post" className={styles.form}>
        <div className={`${styles.inputContainer} ${styles.ic1}`}>
          <input
            type="text"
            id={styles.firstName}
            className={styles.input}
            placeholder=""
          />
          <div className={styles.cut}></div>
          <label htmlFor="firstName" className={styles.label}>
            Nom
          </label>
        </div>
        <div className={`${styles.inputContainer} ${styles.ic2}`}>
          <input
            type="text"
            id={styles.lastName}
            className={styles.input}
            placeholder=""
          />
          <div className={`${styles.cut} ${styles.cutpre}`}></div>
          <label htmlFor="lastName" className={styles.label}>
            Prénom
          </label>
        </div>
        <div className={`${styles.inputContainer} ${styles.ic3}`}>
          <input
            type="email"
            id={styles.email}
            className={styles.input}
            placeholder=""
          />
          <div className={`${styles.cut} ${styles.short}`}></div>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
        </div>
        <div className={`${styles.inputContainer} ${styles.ic4}`}>
          <input
            type="phone"
            id={styles.phone}
            className={styles.input}
            placeholder=""
          />
          <div className={`${styles.cut} ${styles.cuttel}`}></div>
          <label htmlFor="phone" className={styles.label}>
            Téléphone
          </label>
        </div>
        <div className={`${styles.inputContainer} ${styles.ic5}`}>
          <textarea
            rows={8}
            type="text"
            id={styles.message}
            className={styles.input}
            placeholder=""
          />
          <div className={`${styles.cut} ${styles.cutmes}`}></div>
          <label htmlFor="message" className={styles.label}>
            Message
          </label>
        </div>
        <div className={`${styles.inputContainer} ${styles.ic5}`}>
          <button className={styles.btn} type="submit">
            envoyer
          </button>
        </div>
      </form>
    </div>
  );
};

export default Touch;
