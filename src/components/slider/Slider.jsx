import Image from 'next/image.js';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, Mousewheel } from "swiper";
import 'swiper/swiper-bundle.min.css';
import styles from "./slider.module.css"
const Slider = () => {
  const projects = [
    {
      id: 1,
      title: "Sunshine Villas", 
      url: "/img/projects/sunshine-project.png",
      desc: "Reservation en ligne de villas avec un back-office complet",
      stacks: "Node.js, Sass, JavaScript,SQL, React, Redux Toolkit, Stripe."
    },
    {
      id: 2,
      title: "restaurent", 
      url: "/img/projects/restau-project.png",
      desc: "Site vitrine d'un restaurent réalisé dans le cadre de l'apprentissage de SASS",
      stacks: "Html, Css, Sass, JavaScript, Email.js."
    },{
      id: 3,
      title: "campus", 
      url: "/img/projects/campus-project.png",
      desc: "TP d'application des compétance théoriques CSS.",
      stacks: "Html, Css, Sass, JavaScript."
    },
  ]
    return (<Swiper
    className={styles.swiper}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation, Mousewheel]}
       /*  onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)} */
      >
        {projects.map(projet =>(
          <SwiperSlide key={projet.id}>
            <div className={styles.imgContainer}>
            <Image className={styles.img} src={projet.url} width={400} height={400} alt={projet.title} />
            </div>
            <div className={styles.textContainer}>
              <h4>{projet.shortDesc}</h4>
              <h3>{projet.title}</h3>
              <h5>{projet.desc}</h5>
              <p>
                {" "}
                <strong>Application construite avec: </strong> {projet.stacks}
              </p>
            </div>
          </SwiperSlide>

        ))}
      </Swiper>
    );
};

export default Slider;