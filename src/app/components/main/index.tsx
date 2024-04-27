"use client"
import Highlighted from "@/app/highlighted";
import ReviewsOfTheWeek from "@/app/reviewsOfTheWeek";
import FreeGames from "@/app/highlighted/freeGames";
import BestSoldAndPlayed from "@/app/highlighted/bestAoldAndPlayed";
import Header from "@/app/header";
import MainCard from "@/app/mainCard";
import { createContext, useState } from "react";


interface WishListType {
  name: string,
  urlCardBgImage: string,
  id: string,
}

interface WishListContextType {
  wishListProp: WishListType[]
  getUpdatedWishList: (list: WishListType[])=>void
}


export const WishListContext = createContext({} as WishListContextType)

export default function Main(){

  const [wishListProp, setWishListProp] = useState<WishListType[]>([])
  
  function getUpdatedWishList(list: WishListType[]){
    setWishListProp(list)
  }

  return(
    <main className="h-full w-full flex flex-col gap-9">
      <WishListContext.Provider value={{wishListProp, getUpdatedWishList}}>
        <Header />
        <MainCard />
        <Highlighted />
        <Highlighted />
        <h1>Jogos gratis</h1>
        <FreeGames />
        <h1>Mais vendidos e mais jogados</h1>
        <BestSoldAndPlayed />
      </WishListContext.Provider>
      <ReviewsOfTheWeek />
    </main>
  )
}