'use client';
import { CSSProperties, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


type CarouselInfoProps = {
  cardBgImage: string[],
  id: string
}

export default function Carousel({cardBgImage, id}:CarouselInfoProps){
  
  return(
    <div className="container mt-32 mb-16 px-6">
      <Swiper
        navigation
        pagination={{type:'bullets'}}
        modules={[Navigation, Pagination]}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={10}
        loop
        className="h-[250px] w-[1164px]"
        style={{'--swiper-theme-color':"#8a5dd2"} as CSSProperties}
      >
        {cardBgImage.map((infoImage)=>{
          return(
            <SwiperSlide key={id}><img src={infoImage} className="block w-full h-full rounded-lg object-cover"></img></SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
} 