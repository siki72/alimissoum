import React from "react";
import styles from "./page.module.css";
const page = () => {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.welcom}>
          <p>Bienvenue dans mon portfolio</p>
        </div>
        <div className={styles.title}>
          <h1>Hello, je m&apos;appelle Ali</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            placeat accusantium dignissimos deserunt.
          </p>
        </div>
      </section>
    </div>
  );
};

export default page;
