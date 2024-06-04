"use client"
import IconsGameShop from "../../components/icons/iconsHeader";
import NewsCard from "./newsCard";
import { BsPlusLg } from "react-icons/bs";


export default function ReviewsOfTheWeek(){
  return(
    <section>
      <div className="flex justify-between items-center pb-8">
        <h1 className="text-lg md:text-xl">Avaliações da semana</h1>
        <IconsGameShop icon={BsPlusLg} iconColor="#ffff" iconSize={18} />
      </div>
      <div className="flex justify-between gap-4 md:gap-0">
        <NewsCard />
        <NewsCard />
        <div className="hidden md:flex">
          <NewsCard />
        </div>
      </div>
    </section>
  )
}