"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import styles from "./touch.module.css";
import Image from "next/image.js";
import { ThemeContext } from "@/context/themeContextToggle.js";
import emailjs from '@emailjs/browser';
import Loading from "../loading/Loading.jsx";
import validator from 'validator';
const Touch = () => {
  const form = useRef(null)
  const errorRef = useRef(null)
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [mailError, setMailError] = useState(false)

  const {mode} =  useContext(ThemeContext)
  useEffect(()=> {
    if (success){
      setTimeout(()=>{
        setSuccess(false)
      },3000)
    }
    if (error){
      setTimeout(()=>{
        setError(false)
      },3000)
    }
  }, [success, error])
  const sendEmail = async  (e)=>{
    setLoading(true)
    e.preventDefault();
    if (form.current) {
      const data = new FormData(form.current);
      const fields = {
        Nom: "name",
        Prénom: "lastName",
        Email: "email",
        Téléphone: "phone",
        Message: "message"
      }
      for (const [key, value] of Object.entries(fields)){
        const fieldValue = data.get(value)
        console.log(`${key} : ${fieldValue}`)

      if ((key === "Téléphone" && fieldValue.length <10) || (fieldValue.length < 2)) {
          setMailError(true)
          await errorRef.current
          setLoading(false)
          return errorRef.current.innerText = `Veuillez bien renseigner le champ : ${key}`
        } 
      }
      const email= data.get('email')
      if (!validator.isEmail(email) ){
        setLoading(false)
        setMailError(true)
        await errorRef.current
        errorRef.current.innerText = "Veuillez saisir un email valide"
        return
      }
      emailjs.sendForm(process.env.NEXT_PUBLIC_MY_SERVICE_ID, process.env.NEXT_PUBLIC_MY_TEMPLATE_ID, form.current, process.env.NEXT_PUBLIC_MY_PUBLIC_KEY)
      .then((result) => {
        if (result.status === 200){
          setSuccess(true)
          setLoading(false)
        }
      }, (error) => {
        setError(true)
        console.log(error);
        setLoading(false)
      });
    }
  }

  return (
    <div className={mode ==="light"? `${styles.container}`: `${styles.container} ${styles.dark}`}>
      {loading && <Loading />}
      <div className={styles.textBox}>
      <h4 className={styles.title}>Contact.</h4>
      <p>
      Vous êtes intéressé par une collaboration avec moi ? Je suis ouvert à la discussion concernant la conception et le développement de votre application, ainsi que les opportunités de partenariat. N&apos;hésitez pas à me <span >contacter</span> .
      </p>
      </div>
      <form  onClick={()=> setMailError(false)} onSubmit={sendEmail} ref={form} className={mode ==="dark" ? `${styles.form} ${styles.black}`: `${styles.form} ${styles.whiteBg}`}>
        {mailError && <div className={styles.errorMessage} >
          <span ref={errorRef}></span>
          </div>} 
        <div className={`${styles.inputContainer} ${styles.ic1}`}>
          <input
            type="text"
            id={styles.firstName}
            className={styles.input}
            placeholder="Nom"
            name="name"
          />
          <div className={mode === "light" ? `${styles.cut} ${styles.whiteBg}` : `${styles.black} ${styles.cut}`}></div>
          <label htmlFor="firstName" className={styles.label}>
            Nom
          </label>
        </div>
        <div className={`${styles.inputContainer} ${styles.ic2}`}>
          <input
            type="text"
            id={styles.lastName}
            className={styles.input}
            placeholder="Prénom"
            name="lastName"
          />
          <div className={mode === "light" ? `${styles.cut} ${styles.cutpre} ${styles.whiteBg}`: `${styles.cut} ${styles.cutpre} ${styles.black}`} ></div>
          <label htmlFor="lastName" className={styles.label}>
            Prénom
          </label>
        </div>
        <div className={`${styles.inputContainer} ${styles.ic3}`}>
          <input
            type="email"
            id={styles.email}
            className={styles.input}
            placeholder="Email"
            name="email"
          />
          <div className={mode === "light" ? `${styles.cut} ${styles.short}`: `${styles.cut} ${styles.black}`}></div>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
        </div>
        <div className={`${styles.inputContainer} ${styles.ic4}`}>
          <input
            type="phone"
            id={styles.phone}
            className={styles.input}
            placeholder="Téléphone"
            name="phone"
          />
          <div className={mode === "light" ? `${styles.cut} ${styles.cuttel} ${styles.whiteBg}` : `${styles.cut} ${styles.cuttel} ${styles.black}`}></div>
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
            placeholder="Message"
            name="message"
          />
          <div className={mode === "light" ? `${styles.cut} ${styles.cutmes} ${styles.whiteBg}` : `${styles.cut} ${styles.cutmes} ${styles.black}`}></div>
          <label htmlFor="message" className={styles.label}>
            Message
          </label>
        </div>
        <div className={`${styles.inputContainer} ${styles.ic5}`}>
          <button className={`${styles.btn} ${success ? styles.success : ""} ${error? styles.failed : ""}`} type="submit"> 
          {!success && !error && "Envoyer"}
            {success ? "Votre message à été envoyé avec succès" : ""} 
            {error ? "Echec d'envoi, ressayer plus tard" : ""} 
          </button>
        </div>
      </form>
    </div>
  );
};

export default Touch;
