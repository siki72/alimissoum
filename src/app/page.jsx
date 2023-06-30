"use client"
import React from "react";
import styles from "./page.module.css";
import Image from "next/image.js";
import Skills from "@/components/skills/Skills.jsx";
import Projects from "@/components/projects/Projects.jsx";
import Touch from "@/components/touch/Touch.jsx";
import Button from "@/components/button/Button.jsx";
const page = () => {

  return (
    <div className={styles.container}>
      <div className={styles.gradient}></div>
      <section className={styles.hero}>
        <div className={styles.welcom}>
          <h2 className={styles.desc}>Bonjour, je suis Ali Missoum</h2>
          <h1 className={styles.text}>Développeur full-stack freelance, Node / Express / SQL / JavaScript / React / Nextjs.</h1>
            <p> <span className={styles.colorEffect}>Ensemble</span>, créons une interface web moderne, offrant une expérience <span className={styles.colorEffect}>utilisateur</span> optimale</p>
            <Button url={"#projetcs"} text={"mes projets"}/>
            <div className={styles.svgContainer}>
            <Image className={styles.svg} src="/img/svgPro.svg" width={250} height={250} alt="illustration picture" />
            </div>
        </div>
        <div className={styles.imgcontainer}>
          <div className={styles.imgrounder}>
            <Image className={styles.img} src="/img/profile.png" width={80} height={80} alt="pic" />
          </div>
          <p>  
          Je suis un développeur full-stack freelance orienté front-end , basé sur Le Mans. Vous trouverez ici plus d&apos;informations sur moi, ce que je fais, et mes compétences actuelles. Je suis ouvert aux opportunités d&apos;emploi où je peux collaborer, apprendre et accroître mes compétences. Si vous avez un projet à réaliser, n&apos;hésitez pas à me contacter. </p> 
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
    </div>
  );
};

export default page;
