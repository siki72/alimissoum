import React from "react";
import styles from "./skils.module.css";
import Image from "next/image.js";
const Skils = () => {
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
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Skills & Expérience</h3>
      <p className={styles.desc}>HTML, CSS, JS.., voici une liste de technos entre <em>back-end</em> et <em>Front-end</em> que j&apos;ai pu mettre en pratique mes compétences en réalisant divers projets concrets.</p>
      <div className={styles.cardsContainer}>
        <div className={styles.card}>
             <h3>Back-end</h3>
            <div className={styles.logoContainer}>
              {back.map(techno =>(
                <div key={techno.id} className={styles.wrapper}>
                <Image className={styles.logo} width={80} height={80} src={techno.url} alt={techno.title} />
                <p className={styles.techName}>{techno.title}</p>
                </div>
              ))}
            </div>
        </div>
        <div className={styles.card}>
             <h3>Front-end</h3>
             <div className={styles.logoContainer}>
              {front.map(techno =>(
                <div key={techno.id} className={styles.wrapper}>
                <Image className={styles.logo} width={80} height={80} src={techno.url} alt={techno.title} />
                <p className={styles.techName}>{techno.title}</p>
                </div>
              ))}
            </div>
            
        </div>
        <div className={styles.card}>
             <h3>Autres</h3>
             <div className={styles.logoContainer}>
              {others.map(techno =>(
                <div key={techno.id} className={styles.wrapper}>
                <Image className={styles.logo} width={80} height={80} src={techno.url} alt={techno.title} />
                <p className={styles.techName}>{techno.title}</p>
                </div>
              ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Skils;
