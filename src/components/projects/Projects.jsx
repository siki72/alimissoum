"use client"
import React from "react";
import styles from "./projects.module.css";
import Image from "next/image.js";
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react';
import Slider from "../slider/Slider.jsx";

const Projects = () => {
  return (
    <div className={styles.container}>
        <div >
          <svg className={styles.svg} viewBox="0 0 800 500">

            <path d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500" stroke="transparent" fill="#F3F3F2"/>
            <path className="card__line" d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400" stroke="#0000" strokeWidth="3" fill="transparent"/>
          </svg>
        </div>
        <div className={styles.textBox}>

        <h3 className={styles.title}>Projets. </h3>
        <p>Vous trouverez ici de mes derniers projets et clients que j'ai créés, chaque projet contenant sa propre étude de cas.</p>
        </div>
        <Slider />
      {/* <Image
        className={styles.img}
        src="/img/sunshine-project.png"
        width={300}
        height={300}
        alt="sunshine project"
      />
      <div className={styles.textContainer}>
        <h4>application de reservation de villas</h4>
        <h3>Sunshine Villas</h3>
        <h5>Reservation en ligne de villas avec un back-office complet</h5>
        <p>
          {" "}
          <strong>Application construite avec: </strong> Node, Sass, JavaScript,
          SQL, React, Redux Toolkit, Stripe
        </p>
      </div> */}
    </div>
  );
};

export default Projects;
