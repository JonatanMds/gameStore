'use client';
import { useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { GoDotFill } from "react-icons/go";


type Teste = {
  id?: string,
  name?: string,
  urlCardBgImage: string,
}
interface CarouselInfoProps {
  cardBgImage: Teste[],
  indexOfListUsedInCarrosel: (indice: number)=>void
  updatedIndex: number
}

export default function Carousel({cardBgImage, indexOfListUsedInCarrosel, updatedIndex}:CarouselInfoProps){
 
  const [currentIndex, setCurrentIndex] = useState(updatedIndex)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? cardBgImage.length - 1 : currentIndex - 1
    indexOfListUsedInCarrosel(newIndex)
    setCurrentIndex(newIndex);
  }
  
  const nextSlide = () => {
    const isFirstSlide = currentIndex === cardBgImage.length - 1
    const newIndex = isFirstSlide ? 0 : currentIndex + 1
    indexOfListUsedInCarrosel(newIndex)
    setCurrentIndex(newIndex);
  }

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex)
  }

  return(
    <div className="flex max-w-[250px] h-[90px] mx-auto w-full relative group">
        <div key={1} style={{backgroundImage: `url(${cardBgImage[currentIndex].urlCardBgImage})`}} className="w-full h-full rounded-2xl bg-center bg-cover duration-500"></div>
      <div className="absolute group-hover:block top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <FaArrowCircleLeft onClick={prevSlide}/>
      </div>
      <div className="absolute group-hover:block top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <FaArrowCircleRight onClick={nextSlide}/>
      </div>
      {/* <div className="flex justify-center py-2">
        {cardBgImage.map((slide, slideIndex)=>(
          <div 
            key={slideIndex}
            onClick={()=>goToSlide(slideIndex)}
            className="text-2xl cursor-pointer">
            <GoDotFill />
          </div>
        ))}
      </div> */}
    </div>
  )
} 