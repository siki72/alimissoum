"use client"
import React from "react";
import styles from "./page.module.css";
import Image from "next/image.js";
import Skills from "@/components/skills/Skills.jsx";
import Projects from "@/components/projects/Projects.jsx";
import Touch from "@/components/touch/Touch.jsx";
import Parcour from "@/components/parcour/Parcour.jsx";
import Cards from "@/components/cards/Cards.jsx";
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
          <p></p>
        </div>
        <div className={styles.imgcontainer}>
          <div className={styles.imgrounder}>
            <Image className={styles.img} src="/img/profile.png" width={80} height={80} alt="pic" />
          </div>
            <p className={styles.presentation}>Hello, <br /> je suis Ali Missoum, Développeur full-stack freelance Node / Express/ SQL / JavaScript / React / Nextjs. <br /></p>
        </div>
      </section>
 {/*      <section className={styles.parcour}>
        <Parcour />
      </section> */}
      <section className={styles.skills}>
        <Skills />
      </section>
      <section className={styles.projects}>
        <Projects />
      </section>
      <section>
        <Touch />
      </section>
      <Cards />
    </div>
  );
};

export default page;
