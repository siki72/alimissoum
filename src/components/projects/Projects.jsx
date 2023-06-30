"use client"
import React from "react";
import styles from "./projects.module.css";
import Image from "next/image.js";
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react';
import Slider from "../slider/Slider.jsx";

const Projects = () => {
  return (
    <div id="projetcs" className={styles.container}>
        <div >
        </div>
        <div className={styles.textBox}>
        <h3 className={styles.title}>Projets. </h3>
        <p>Vous trouverez ici une sélection de projets variés, chaque réalisation offre un design élégant et des fonctionalité <span className={styles.colorEffect}>personnalisées</span>, parcourez les différents slides pour explorer les détails et les captures d&apos;écran de chaque projet.</p>
        </div>
        <Slider />
    </div>
  );
};

export default Projects;
