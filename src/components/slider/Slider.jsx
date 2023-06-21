import Image from 'next/image.js';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
import 'swiper/swiper-bundle.min.css';
import styles from "./slider.module.css"
const Slider = () => {
  const projects = [
    {
      id: 1,
      title: "sunshine", 
      url: "/img/projects/sunshine-project.png",
    },
    {
      id: 2,
      title: "restaurent", 
      url: "/img/projects/restau-project.png",
    },{
      id: 3,
      title: "campus", 
      url: "/img/projects/campus-project.png",
    },{
      id: 4,
      title: "heluim", 
      url: "/img/projects/heluim-project.png",
    }
  ]
    return (<Swiper
    className={styles.swiper}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        scrollbar={{ draggable: true }}
        modules={[Autoplay, Pagination, Navigation]}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {projects.map(projet =>(
          <SwiperSlide key={projet.id}>
            <Image src={projet.url} width={300} height={300} alt={projet.title} />
            <div className={styles.textContainer}>
              <h4>application de reservation de villas</h4>
              <h3>Sunshine Villas</h3>
              <h5>Reservation en ligne de villas avec un back-office complet</h5>
              <p>
                {" "}
                <strong>Application construite avec: </strong> Node, Sass, JavaScript,
                SQL, React, Redux Toolkit, Stripe
              </p>
            </div>
          </SwiperSlide>

        ))}
      </Swiper>
    );
};

export default Slider;