"use client"
import Highlighted from "@/app/mainPage/highlighted";
import ReviewsOfTheWeek from "@/app/mainPage/reviewsOfTheWeek";
import FreeGames from "@/app/mainPage/highlighted/freeGames";
import Header from "@/app/mainPage/header";
import { Dispatch, SetStateAction, createContext, useEffect, useState } from "react";
import { api } from "@/app/lib";
import MainCard from "./mainCard";


type WishListType = {
  name: string,
  urlCardBgImage: string,
  id: string,
}

interface WishListContextType {
  updatedWishList: WishListType[]
  getUpdatedWishList: (list: WishListType[])=>void
  setWishList: Dispatch<SetStateAction<WishListType[]>>
  wishList: WishListType[]
}


export const WishListContext = createContext({} as WishListContextType)

export default function MainPage(){

  const [updatedWishList, setUpdatedWishList] = useState<WishListType[]>([])
  const [wishList, setWishList] = useState<WishListType[]>([])
  
  function getUpdatedWishList(list: WishListType[]){
    setUpdatedWishList(list)
  }


  async function fetchWishList(){
    const response = await api.get('/wishlist')
    setWishList(response.data)
  }

  useEffect(()=>{
    fetchWishList()
  },[])

  return(
    <main className="h-full w-full flex flex-col gap-9 px-6">
      <WishListContext.Provider value={{updatedWishList, getUpdatedWishList, setWishList, wishList}}>
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