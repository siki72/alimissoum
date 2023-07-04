"use client"
import React, { useEffect } from 'react';
import styles from "./page.module.css"
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const Login = () => {
    const {data: sessiosn, status} =  useSession()
    const router = useRouter()
    useEffect(() => {
        if (status === "unauthenticated") {
          router.push("/dashboard/login");
        }
        if (status === "authenticated"){
            router.push("/dashboard")
        }
      }, [status]);

    if (status === "loading"){
        return <p>loading ...</p>
    }
    
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