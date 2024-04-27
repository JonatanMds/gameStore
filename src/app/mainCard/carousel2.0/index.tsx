'use client';
import Image from "next/image";
import { useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from "swiper/react";

export default function Carousel2(){
  const slides = [
    {
      url: "https://images6.alphacoders.com/117/1177249.jpg"
    },
    {
      url: "https://image.api.playstation.com/vulcan/img/rnd/202201/1616/THJbARAq2YiRVUv5abCQ8GYQ.png"
    },
    {
      url: "https://assets.xboxservices.com/assets/13/cf/13cf037e-0e97-4812-90d9-b18791367f09.jpg?n=Hogwarts-Legacy_GLP-Page-Hero-1084_Redesign_1920x1080_01.jpg"
    },
    {
      url: "https://image.api.playstation.com/vulcan/ap/rnd/202102/2307/vbIii6P97qiAOhdnYdLT85u8.jpg"
    }
  ]

  return(
    <Swiper
    slidesPerView={2}
    pagination={{clickable: true}}
    navigation
    // onSlideChange={() => console.log('slide change')}
    // onSwiper={(swiper) => console.log(swiper)}
    >
      {slides.map((slide)=>{
        return(
          <SwiperSlide key={1}>
            <Image 
              alt=""
              src={slide.url}
              width={50}
              height={50}
            />
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
} 