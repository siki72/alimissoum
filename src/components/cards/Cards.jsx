"use client"
import React, { useEffect, useState } from 'react';
import styles from "./cards.module.css"
import Image from 'next/image.js';
import { AiOutlineArrowUp } from "react-icons/ai";
import { MdOutlineLan, MdOutlineScreenshotMonitor, MdExtension } from "react-icons/md";
const Cards = () => {
  const [backOpen, setBackOpen] = useState(null)
  const [frontOpen, setFrontOpen] = useState(null)
  const [othersOpen, setOthersOpen] = useState(null)
    const back = [
        {
          id:1,
          title: "mongodb",
          url: "/img/back/mongodb.png"
        },
        {
          id:2,
          title: "node.js",
          url: "/img/back/nod.png"
        },
        {
          id:3,
          title: "python",
          url: "/img/back/python.png"
        },
        {
          id:18,
          title: "sql",
          url: "/img/back/sql.png"
        },
      ]
      const front =[
        {
          id:4,
          title: "html",
          url: "/img/front/html.png"
        },
        {
          id:5,
          title: "css",
          url: "/img/front/css.png"
        },
        {
          id:6,
          title: "sass",
          url: "/img/front/sass.png"
        },
        {
          id:7,
          title: "bootstrap",
          url: "/img/front/bootstrap.png"
        },
        {
          id:8,
          title: "javascript",
          url: "/img/front/js.png"
        },
        {
          id:9,
          title: "react",
          url: "/img/front/react.png"
        },{
          id:10,
          title: "redux",
          url: "/img/front/redux.png"
        },
        {
          id:11,
          title: "next",
          url: "/img/front/next.png"
        },
        {
          id:12,
          title: "taildwind",
          url: "/img/front/tailwind1.png"
        },
        {
          id:13,
          title: "Vite",
          url: "/img/front/Vite.png"
        },
        
      ]
    
      const others = [
        {
          id:14,
          title: "Jira",
          url: "/img/others/jirasoft.png"
        },
        {
          id:15,
          title: "Git",
          url: "/img/others/git.png"
        },
        {
          id:16,
          title: "Github",
          url: "/img/others/github.png"
        },
        {
          id:17,
          title: "Docker",
          url: "/img/others/docker.png"
        },
      ]
    
        const hadnleOpen = (tab) =>{
          console.log("tab", tab)
          switch (tab){
            case "front": 
              setFrontOpen(!frontOpen)
              break;
            case "back":
              setBackOpen(!backOpen)
              break;
            case "others":
              setOthersOpen(!othersOpen)
              break;
          }
        }
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
      <div className={!backOpen ? `${styles.overlay}` :`${styles.overlay} ${styles.toTop}` } >
        <div className={!backOpen ? `${styles.header}` :`${styles.header} ${styles.toTop}` }>
          <svg className={styles.arc} xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <div className={styles.arrow} onClick={()=> hadnleOpen("back")}>
            <AiOutlineArrowUp className={!backOpen ? `${styles.icon}` : `${styles.icon} ${styles.rotate180}`}/>
          </div>
        </div>
        <div  className={styles.imgContainer}>
        {back.map(img =>(
          <div key={img.id} className={styles.pics}>
            <Image   className={styles.pic} src={img.url} alt={img.title} width={50} height={50} />
            <p className={styles.techName}>{img.title}</p>
          </div>
            ))}
            </div>
      </div>
    </div>      
  </li>
  <li>
  <div className={`${styles.card} ${styles.cardFront}`}>
      <div className={styles.technosHeader}>
      <MdOutlineScreenshotMonitor className={styles.iconTechnos}/>
      <h3 className={styles.title}>Front-end</h3>
      <p className={styles.desc}>Voici une liste de quelques langagues et de framwork coté front-end avec laquel je donne vie à des des interfaces utilisateur interactives et esthétiquement agréables et les voir prendre vie dans le navigateur. </p>
      </div>
      <div className={!frontOpen ? `${styles.overlay}` :`${styles.overlay} ${styles.toTop}` } >
        <div className={!frontOpen ? `${styles.header}` :`${styles.header} ${styles.toTop}` }>
          <svg className={styles.arc} xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <div className={styles.arrow} onClick={()=> hadnleOpen("front")}>
            <AiOutlineArrowUp className={!frontOpen ? `${styles.icon}` : `${styles.icon} ${styles.rotate180}`}/>
          </div>
        </div>
        <div  className={styles.imgContainer}>
        {front.map(img =>(
          <div key={img.id} className={styles.picsFront}>
            <Image   className={styles.pic} src={img.url} alt={img.title} width={50} height={50} />
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
      <p className={styles.desc}>Les outils essentiels pour collaborer, organiser de manière méthodique et versionner son travail </p>
      </div>
      <div className={!othersOpen ? `${styles.overlay}` :`${styles.overlay} ${styles.toTop}` } >
        <div className={!othersOpen ? `${styles.header}` :`${styles.header} ${styles.toTop}` }>
          <svg className={styles.arc} xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <div className={styles.arrow} onClick={()=> hadnleOpen("others")}>
            <AiOutlineArrowUp className={!othersOpen ? `${styles.icon}` : `${styles.icon} ${styles.rotate180}`}/>
          </div>
        </div>
        <div  className={styles.imgContainer}>
        {others.map(img =>(
          <div key={img.id} className={styles.pics}>
            <Image   className={styles.pic} src={img.url} alt={img.title} width={50} height={50} />
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