"use client";
import React, { useContext, useRef } from "react";
import styles from "./touch.module.css";
import Image from "next/image.js";
import { ThemeContext } from "@/context/themeContextToggle.js";
import emailjs from '@emailjs/browser';
const Touch = () => {
  console.log(process.env.GOOGLE_CLIENT_ID)
  const form = useRef(null)
  const {mode} =  useContext(ThemeContext)
  const sendEmail = (e)=>{
    e.preventDefault();
    
    emailjs.sendForm(process.env.NEXT_PUBLIC_MY_SERVICE_ID, process.env.NEXT_PUBLIC_MY_TEMPLATE_ID, form.current, process.env.NEXT_PUBLIC_MY_PUBLIC_KEY)
    .then((result) => {
      console.log(result);
  }, (error) => {
      console.log(error);
  });
  }

  return (
    <div className={mode ==="light"? `${styles.container}`: `${styles.container} ${styles.dark}`}>
      <div className={styles.textBox}>
      <h4 className={styles.title}>Contact.</h4>
      <p>
      Vous êtes intéressé par une collaboration avec moi ? Je suis ouvert à la discussion concernant la conception et le développement de votre application, ainsi que les opportunités de partenariat. N&apos;hésitez pas à me <span >contacter</span> .
      </p>
      </div>
      <form  onSubmit={sendEmail} ref={form} className={mode ==="dark" ? `${styles.form} ${styles.dark}`: `${styles.form} ${styles.whiteBg}`}>
        <div className={`${styles.inputContainer} ${styles.ic1}`}>
          <input
            type="text"
            id={styles.firstName}
            className={styles.input}
            placeholder=""
            name="name"
          />
          <div className={mode === "light" ? `${styles.cut} ${styles.whiteBg}` : `${styles.dark} ${styles.cut}`}></div>
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
            name="lastName"
          />
          <div className={mode === "light" ? `${styles.cut} ${styles.cutpre} ${styles.whiteBg}`: `${styles.cut} ${styles.cutpre} ${styles.dark}`} ></div>
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
            name="email"
          />
          <div className={mode === "light" ? `${styles.cut} ${styles.short}`: `${styles.cut} ${styles.dark}`}></div>
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
            name="phone"
          />
          <div className={mode === "light" ? `${styles.cut} ${styles.cuttel} ${styles.whiteBg}` : `${styles.cut} ${styles.cuttel} ${styles.dark}`}></div>
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
            name="message"
          />
          <div className={mode === "light" ? `${styles.cut} ${styles.cutmes} ${styles.whiteBg}` : `${styles.cut} ${styles.cutmes} ${styles.dark}`}></div>
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
