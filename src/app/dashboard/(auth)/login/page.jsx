"use client";
import React, { useEffect } from "react";
import styles from "./page.module.css";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image.js";

const Login = () => {
  const { data: sessiosn, status } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/dashboard/login");
    }
    if (status === "authenticated") {
      router.push("/dashboard");
    }
  }, [status, router]);

  if (status === "loading") {
    return <p>loading ...</p>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    signIn("credentials", { email, password });
  };

  return (
    <div className={styles.container}>
      <div className={styles.googleLink}>
        <Image className={styles.googleIcon} src="/img/google.png" width={100} height={80} alt="google icon" />
        <button className={styles.btnGoogle} onClick={() => signIn("google")}>Login With Google</button>
      </div>
      <div className={styles.or}>ou</div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="mail"
          placeholder="email"
          className={styles.input}
          required={true}
        />
        <input
          type="password"
          placeholder="password"
          className={styles.input}
          required={true}
        />
        <button type="submit" className={styles.btn}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
