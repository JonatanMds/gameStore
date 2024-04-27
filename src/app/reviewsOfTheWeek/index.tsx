"use client"
import IconsGameShop from "../components/icons/iconsHeader";
import NewsCard from "./newsCard";
import { BsPlusLg } from "react-icons/bs";


export default function ReviewsOfTheWeek(){
  return(
    <section>
      <div className="flex justify-between items-center pb-8">
        <h1 className="text-xl">Avaliações da semana</h1>
        <IconsGameShop icon={BsPlusLg} iconColor="#ffff" iconSize={18} linkToPage="/"/>
      </div>
      <div className="flex gap-4">
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    </section>
  )
}