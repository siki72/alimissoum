import React from "react";
import styles from "./page.module.css";
import Image from "next/image.js";
import Skils from "@/components/skils/Skils.jsx";
const page = () => {
  return (
    <div className={styles.container}>
      
      <section className={styles.hero}>
        <div className={styles.welcom}>
          <p>Bienvenue dans mon portfolio</p>
        </div>
        <div className={styles.title}>
        <div className={styles.stylediv}>
        <Image  className={styles.imgbg} src="/img/colorimg.png" height={300} width={360} alt="art color" />
      </div>
          <h2> <span>Imaginer,</span> <span>Coder,</span> <span>créer</span></h2>
        </div>
        <div className={styles.textContainer}>
          <p>bienvenue sur mon portfolio</p>
        </div>
        <div className={styles.imgcontainer}>
          <div className={styles.imgrounder}>
            <Image className={styles.img} src="/img/profile.png" width={80} height={80} alt="pic" />
          </div>
            <p className={styles.presentation}>Hello, <br /> je m&apos;applle Ali, je suis un Développeur Web. Autodidacte au départ puis je me suis formée à la 3W Academy pendant 6 mois trés intenses, qui m&apos;ont permis de me construire des bases solides dans le dévloppement web. <br /></p>
        </div>
      </section>
      <section className={styles.skils}>
        <Skils />
      </section>
    </div>
  );
};

export default page;
