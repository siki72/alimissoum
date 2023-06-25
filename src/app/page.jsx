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
          <h1>Bonjour,<br /> je suis ali missoum</h1>
          <p className={styles}>Développeur full-stack freelance Node / Express / SQL / JavaScript / React / Nextjs. <br />
            </p>
            <button className={styles.btn}>mes projets</button>
        </div>
        <div className={styles.imgcontainer}>
          <div className={styles.imgrounder}>
            <Image className={styles.img} src="/img/profile.png" width={80} height={80} alt="pic" />
          </div>
          <p>  
              Je suis un développeur front-end freelance, basé sur Le Mans.
              Vous trouverez ici plus d&apos;informations sur moi, ce que je fais, et mes compétences actuelles, principalement en termes de programmation et de technologie.
              Je suis ouvert aux opportunités d&apos;emploi où je peux collaborer, apprendre et acroitrre mes compétances. Si vous avez un projets à réaliser, n&apos;hésitez pas à me contacter. </p> 
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
