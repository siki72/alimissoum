
import React, { useContext } from 'react';
import styles from "./cards.module.css"
import Image from 'next/image.js';
import { AiOutlineArrowUp } from "react-icons/ai";
import { MdOutlineLan, MdOutlineScreenshotMonitor, MdExtension } from "react-icons/md";
import { SiExpress,SiMongodb, SiNodedotjs, SiMysql,SiHtml5, SiCss3, SiSass,SiTailwindcss, SiBootstrap,SiJavascript, SiReact, SiRedux,
  SiNextdotjs, SiVite, SiVisualstudio, SiJirasoftware, SiGit, SiGithub, SiDocker, SiSocketdotio,SiGraphql
 } from "react-icons/si";
 import {TbSeo} from "react-icons/tb"
import { ThemeContext } from '@/context/themeContextToggle.js';
const Cards = () => {
  const {mode} =  useContext(ThemeContext)
    const back = [
      {
        id:0,
        title: "Express",
        icon: SiExpress
      },
        {
          id:1,
          title: "mongodb",
          icon: SiMongodb
        },
        {
          id:2,
          title: "node.js",
          icon: SiNodedotjs
        },
        {
          id:3,
          title: "mysql",
          icon: SiMysql
        },
        {
          id:4,
          title: "Socket.io",
          icon: SiSocketdotio
        },
        {
          id:5,
          title: "Graphql",
          icon: SiGraphql
        },
      ]
      const front =[
        {
          id:6,
          title: "html",
          icon: SiHtml5
        },
        {
          id:7,
          title: "css",
          icon: SiCss3
        },
        {
          id:8,
          title: "sass",
          icon: SiSass
        },
        {
          id:9,
          title: "Tailwindcss",
          icon: SiTailwindcss
        },
        {
          id:10,
          title: "Bootstrap",
          icon: SiBootstrap
        },
        {
          id:11,
          title: "Javascript",
          icon: SiJavascript
        },{
          id:12,
          title: "React",
          icon: SiReact
        },
        {
          id:13,
          title: "Redux",
          icon: SiRedux
        },
        {
          id:14,
          title: "Next.js",
          icon: SiNextdotjs
        },
        {
          id:15,
          title: "Vite",
          icon: SiVite
        },
        
      ]
    
      const others = [
        {
          id:16,
          title: "Jirasoftware",
          icon: SiJirasoftware
        },
        {
          id:17,
          title: "Git",
          icon: SiGit
        },
        {
          id:18,
          title: "Github",
          icon: SiGithub
        },
        {
          id:19,
          title: "Docker",
          icon: SiDocker
        },
        {
          id:20,
          title: "VScode",
          icon: SiVisualstudio
        },
        {
          id:21,
          title: "SEO",
          icon: TbSeo
        },
      ]
    return (
        <div className={styles.container}>
            <ul className={styles.cards}>
  <li>
    <div className={`${styles.card} ${styles.cardBack}`}>
      <div className={styles.technosHeader}>
      <MdOutlineLan className={styles.iconTechnos}/>
      <h3 className={styles.title}>Back-end</h3>
      <p className={styles.desc}>Bien que je n&apos;ai pas fait du développement back-end ma spécialité, j&apos;éprouve toujours beaucoup de plaisir à créer des applications à partir de zéro en utilisant ces technologies.
      </p>
      </div>
      <div className={styles.overlay} >
        <div className={styles.header}>
          <svg className={styles.arc} xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <div className={styles.arrow} onClick={()=> hadnleOpen("back")}>
            <AiOutlineArrowUp className={styles.icon}/>
          </div>
        </div>
        <div  className={styles.imgContainer}>
        {back.map(img =>(
          <div key={img.id} className={styles.pics}>
            <img.icon  className={styles.pic}  />
            <p className={styles.techName}>{img.title}</p>
          </div>
            ))}
            </div>
      </div>
    </div>      
  </li>
  <li>
  <div className={mode === "light" ? `${styles.card} ${styles.cardFront}`: `${styles.dark} ${styles.cardFront} ${styles.card}`}>
      <div className={styles.technosHeader}>
      <MdOutlineScreenshotMonitor className={styles.iconTechnos}/>
      <h3 className={styles.title}>Front-end</h3>
      <p className={styles.desc}>Voici une liste de quelques langagues et de framwork coté front-end avec laquel je transforme des idées, en applications web et interfaces utilisateur interactives et esthétiquement agréables avec toujours le méme plaisir de les voir prendre vie dans le navigateur. </p>
      </div>
      <div className={styles.overlay} >
        <div className={styles.header}>
          <svg className={styles.arc} xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <div className={styles.arrow} onClick={()=> hadnleOpen("front")}>
            <AiOutlineArrowUp className={styles.icon}/>
          </div>
        </div>
        <div  className={styles.imgContainer}>
        {front.map(img =>(
          <div key={img.id} className={styles.picsFront}>
            <img.icon  className={styles.pic}  />
            <p className={styles.techName}>{img.title}</p>
          </div>
            ))}
            </div>
      </div>
    </div> 
  </li>
  <li>
  <div className={`${styles.card} ${styles.cardOthers}`}>
      <div className={styles.technosHeader}>
      <MdExtension className={styles.iconTechnos}/>
      <h3 className={styles.title}>Tools</h3>
      <p className={styles.desc}>Les outils indispensables qui facilitent mes tâches de développement, ainsi que ma collaboration, mon organisation méthodique et la gestion des versions de mon travail. </p>
      </div>
      <div className={styles.overlay} >
        <div className={styles.header}>
          <svg className={styles.arc} xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <div className={styles.arrow} onClick={()=> hadnleOpen("others")}>
            <AiOutlineArrowUp className={styles.icon}/>
          </div>
        </div>
        <div  className={styles.imgContainer}>
        {others.map(img =>(
          <div key={img.id} className={styles.pics}>
            <img.icon  className={styles.pic}  />
            <p className={styles.techName}>{img.title}</p>
          </div>
            ))}
            </div>
      </div>
    </div> 
  </li>
  </ul>
        </div>
    );
};

export default Cards;