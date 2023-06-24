import React from 'react';
import styles from "./cards.module.css"
import Image from 'next/image.js';
const Cards = () => {
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
    return (
        <div className={styles.container}>
            <ul className={styles.cards}>
  <li>
    <div className={styles.card}>
      <Image src="/img/backend.png" className={styles.image} alt="back end logo" width={300} height={300}/>
      <div className={styles.overlay} >
        <div className={styles.header}>
          <svg className={styles.arc} xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <Image className={styles.thumb}  src="/img/profile.png" alt=""  width={80} height={80}/>
          <div className={styles.headerText}>
            <h3 className={styles.title}>Jessica Parker</h3>            
            <span className={styles.status}>1 hour ago</span>
          </div>
        </div>
        {back.map(img =>(
            <Image key={img.id} className={styles.pic} src={img.url} alt={img.title} width={80} height={80} />
        ))}
      </div>
    </div>      
  </li>
  <li>
    <div className={styles.card}>
      <Image src="/img/frontend.png" className={styles.image} alt="front end logo" width={300} height={300}/>
      <div className={styles.overlay} >        
        <div className={styles.header}>
          <svg className={styles.arc} xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
          <Image className={styles.thumb} src="/img/profile.png" alt=""  width={80} height={80}/>
          <div className={styles.headerText}>
            <h3 className={styles.title}>kim Cattrall</h3>
            <span className={styles.status}>3 hours ago</span>
          </div>
        </div>
        <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
      </div>
    </div>
  </li>
  <li>
    <div className={styles.card}>
      <Image src="/img/others.png" className={styles.image} alt="others technos logo" width={300} height={300}/>
      <div className={styles.overlay} >
        <div className={styles.header}>
          <svg className={styles.arc} xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <Image className={styles.thumb}  src="/img/profile.png" alt="" width={80} height={80}/>
          <div className={styles.headerText}>
            <h3 className={styles.title}>Jessica Parker</h3>
            <span className="card__tagline">Lorem ipsum dolor sit amet consectetur</span>            
            <span className={styles.status}>1 hour ago</span>
          </div>
        </div>
        <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
      </div>
    </div>
  </li>
  <li></li>
  </ul>
        </div>
    );
};

export default Cards;