"use client"
import React from 'react';
import styles from "./page.module.css"
import { signIn } from 'next-auth/react';

const Login = () => {
    const handleSubmit = async (e)=>{
        e.preventDefault()
        const email = e.target[0].value
        const password = e.target[1].value
        signIn("credentials", {email, password})
     
    }

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
        <input type="mail" placeholder="email" className={styles.input} required={true}/>
        <input
          type="password"
          placeholder="password"
          className={styles.input}
          required={true}
        />
        <button type="submit" className={styles.btn}>Login</button>
      </form>
            <button onClick={()=> signIn("google")} >login with google</button>
        </div>
    );
};

export default Login;