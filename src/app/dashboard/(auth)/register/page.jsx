"use client"
import React, { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link.js";
import { useRouter } from "next/navigation.js";
const Register = () => {
  const router = useRouter()
    const [err, setErr] = useState(false)
    const handleSubmit = async (e)=>{
        e.preventDefault()
        const name = e.target[0].value
        const email = e.target[1].value
        const password = e.target[2].value
      try{
        const res = await fetch("/api/auth/register",{
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name,
            email,
            password
          })
        });
        res.status === 201 && router.push("/dashboard/login?success=Account has been created")
      }catch(err){
        setErr(true)
      }
    }
  return (
    <div className={styles.container} >
      <form className={styles.form} onSubmit={handleSubmit}>
        <input type="text" placeholder="username" className={styles.input} required={true}/>
        <input type="mail" placeholder="email" className={styles.input} required={true}/>
        <input
          type="password"
          placeholder="password"
          className={styles.input}
          required={true}
        />
        <button type="submit" className={styles.btn}>Register</button>
      </form>
      <Link href="/dashboard/login">Se connecter avec un compt existant</Link>
    </div>
  );
};

export default Register;
