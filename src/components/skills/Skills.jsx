import React from "react";
import styles from "./skills.module.css";
import Image from "next/image.js";
import Cards from "../cards/Cards.jsx";
const Skils = () => {
  const back = [
    {
      id: 1,
      title: "mongodb",
      url: "/img/back/mongodb.png",
    },
    {
      id: 2,
      title: "node.js",
      url: "/img/back/nod.png",
    },
    {
      id: 3,
      title: "python",
      url: "/img/back/python.png",
    },
    {
      id: 18,
      title: "sql",
      url: "/img/back/sql.png",
    },
  ];
  const front = [
    {
      id: 4,
      title: "html",
      url: "/img/front/html.png",
    },
    {
      id: 5,
      title: "css",
      url: "/img/front/css.png",
    },
    {
      id: 6,
      title: "sass",
      url: "/img/front/sass.png",
    },
    {
      id: 7,
      title: "bootstrap",
      url: "/img/front/bootstrap.png",
    },
    {
      id: 8,
      title: "javascript",
      url: "/img/front/js.png",
    },
    {
      id: 9,
      title: "react",
      url: "/img/front/react.png",
    },
    {
      id: 10,
      title: "redux",
      url: "/img/front/redux.png",
    },
    {
      id: 11,
      title: "next",
      url: "/img/front/next.png",
    },
    {
      id: 12,
      title: "taildwind",
      url: "/img/front/tailwind1.png",
    },
    {
      id: 13,
      title: "Vite",
      url: "/img/front/Vite.png",
    },
  ];

  const others = [
    {
      id: 14,
      title: "Jira",
      url: "/img/others/jirasoft.png",
    },
    {
      id: 15,
      title: "Git",
      url: "/img/others/git.png",
    },
    {
      id: 16,
      title: "Github",
      url: "/img/others/github.png",
    },
    {
      id: 17,
      title: "Docker",
      url: "/img/others/docker.png",
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.textBox}>
        <h3 className={styles.title}>Compétences.</h3>
        <p className={styles.text}>
          Bénéficiez de mon expérience dans le développement web et créons
          ensemble, en utilisant cette <span className={styles.colorEffect}>stack</span>, une interface web que vos
          utilisateurs vont adorer.
        </p>
      </div>
      <Cards />
    </div>
  );
};

export default Skils;
