"use client"
import Highlighted from "@/app/highlighted";
import ReviewsOfTheWeek from "@/app/reviewsOfTheWeek";
import FreeGames from "@/app/highlighted/freeGames";
import BestSoldAndPlayed from "@/app/highlighted/bestAoldAndPlayed";
import Header from "@/app/header";
import MainCard from "@/app/mainCard";
import { Dispatch, SetStateAction, createContext, useEffect, useState } from "react";
import { api } from "@/app/lib";


interface WishListType {
  name: string,
  urlCardBgImage: string,
  id: string,
}

interface WishListContextType {
  wishListProp: WishListType[]
  getUpdatedWishList: (list: WishListType[])=>void
  setWishList: Dispatch<SetStateAction<WishListType[]>>
  wishList: WishListType[]
}


export const WishListContext = createContext({} as WishListContextType)

export default function Main(){

  const [wishListProp, setWishListProp] = useState<WishListType[]>([])
  const [wishList, setWishList] = useState<WishListType[]>([])
  
  function getUpdatedWishList(list: WishListType[]){
    setWishListProp(list)
  }


  async function fetchWishList(){
    const response = await api.get('/wishlist')
    setWishList(response.data)
  }

  useEffect(()=>{
    fetchWishList()
  },[])

  return(
    <main className="h-full w-full flex flex-col gap-9">
      <WishListContext.Provider value={{wishListProp, getUpdatedWishList, setWishList, wishList}}>
        <Header />
        <MainCard />
        <Highlighted />
        <Highlighted />
        <h1>Jogos gratis</h1>
        <FreeGames />
        {/* <h1>Mais vendidos e mais jogados</h1>
        <BestSoldAndPlayed /> */}
        </WishListContext.Provider>
        <ReviewsOfTheWeek />
    </main>
  )
}