"use client"
import { PiHeartFill } from "react-icons/pi";
import { useContext, useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { api } from "@/app/lib";
import Image from "next/image";
import Carousel from "./carousel";
import CardIcons from "../components/icons/cardIcons";
import Button from "../components/button";
import { WishListContext } from "../components/main";

type HighlightedListType = {
  id: string,
  name: string,
  urlCardBgImage: string,
  wishlist: boolean,
  highlighted: boolean,
  value: string,
  description: string
}

type WishListType = {
  name: string,
  urlCardBgImage: string,
  id: string,
}

export default function MainCard(){
  const {getUpdatedWishList} = useContext(WishListContext)
  const [listHighlighted, setListHighlighted] = useState<HighlightedListType[]>([])
  const [wishList, setWishList] = useState<WishListType[]>([])
  const [selectedGameId, setSelectedGameId] = useState<WishListType>()
  const [indexOfTheGameSelectedInCarousel, setIndexOfTheGameSelectedInCarousel] = useState(0)

  async function fetchHighlightedList(){
    const response = await api.get('/gameShoppingGames')
    setListHighlighted(response.data)
  }
  
  async function fetchWishList(){
    const response = await api.get('/wishlist')
    setWishList(response.data)
  }
  
  
  async function addNewGameToWishList(){
    const response = await api.post('/wishlist', selectedGameId)
    setWishList([...wishList, response.data])
  }
  
  async function deleteGameToFavoritesList(id: string){
    await api.delete(`/wishlist/${id}`)
    setWishList(wishList.filter((wish)=> wish.id !== id))
  }

  useEffect(()=>{
    fetchHighlightedList();
  },[])

  useEffect(()=>{
    if(selectedGameId?.name !== undefined){
      addNewGameToWishList();
    }
    fetchWishList();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[selectedGameId,])


  function changeTheColorOfTheIconIfItIsOnTheWishList(isWanted:boolean){
    const colorChange = isWanted === true ? "#8a5dd2" : "#FFFF"
    return colorChange
  }
  
  function changeTheIconIfItIsOnTheWishList(isWanted:boolean){
    const iconChange = isWanted === true ? PiHeartFill : FaRegHeart
    return iconChange
  }

  function indexOfTheGameSelectedInTheCarousel(index: number){
    setIndexOfTheGameSelectedInCarousel(index)
  }

  const gameThatHasTheSameIndexAsTheCarousel = listHighlighted.filter((highlighted)=> highlighted.id.toString() === indexOfTheGameSelectedInCarousel.toString())


  function gameInformationAddedToWishList(name:string, urlCardBgImage:string, id:string){
    setSelectedGameId({name, urlCardBgImage, id})
  }

  const checkTheGameAlreadyHasItOnTheWishList = wishList?.find(({name})=> name === gameThatHasTheSameIndexAsTheCarousel[0]?.name) 
  const returnsTrueOrFalseForWishList = checkTheGameAlreadyHasItOnTheWishList != undefined ? true : false 
  const idCurrentCardWishList = checkTheGameAlreadyHasItOnTheWishList?.id != undefined ? checkTheGameAlreadyHasItOnTheWishList?.id : ''

  getUpdatedWishList(wishList)

  return(
    <div>
      {
       gameThatHasTheSameIndexAsTheCarousel.map((gameInfo)=>{
        return(
        <div 
          key={gameInfo.id}
          className="h-[60vh] w-full relative flex flex-col justify-between rounded"
        >
          <Image 
            alt=""
            src={gameInfo.urlCardBgImage}
            sizes="100vw"
            style={{
              width: '100%',
              height: '100%',
              objectFit:'cover',
              borderRadius: '10px'
              
            }}
            width={500}
            height={300}
          />
          <div className="flex absolute p-2 top-0 right-0">
            <CardIcons 
              onClick={()=>checkTheGameAlreadyHasItOnTheWishList !== undefined ? deleteGameToFavoritesList(idCurrentCardWishList.toString()):gameInformationAddedToWishList(gameInfo.name, gameInfo.urlCardBgImage, gameInfo.id)}
              icon={changeTheIconIfItIsOnTheWishList(returnsTrueOrFalseForWishList)} 
              iconColor={changeTheColorOfTheIconIfItIsOnTheWishList(returnsTrueOrFalseForWishList)} 
            />
          </div>
          <div className="absolute bottom-0 left-0 flex justify-start items-center gap-2 bg-gradient-to-r from-[#000000] p-4">
            <div className="flex flex-col gap-2">
              <h1>{gameInfo.name}</h1>
              <p className="w-[50%] text-xs line-clamp-3">{gameInfo.description}</p>
              <span>{gameInfo.value}</span>
              <div>
                <Button label="Comprar" linkToPage="/gamePage" idGame={gameInfo.id}/>
              </div>
            </div>
            <Carousel cardBgImage={listHighlighted} indexOfListUsedInCarrosel={indexOfTheGameSelectedInTheCarousel} updatedIndex={indexOfTheGameSelectedInCarousel}/>
          </div>
        </div>
        )
      })}
    </div>
  )
}