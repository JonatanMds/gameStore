"use client"
import { useContext, useEffect, useState } from "react";
import { api } from "../../lib";
import CardGame from "./cardGame";
import { PiHeartFill } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
import { WishListContext } from "../../mainPage";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { IGameInfos, IWishListInfos } from "@/shared/interfaces";

export default function Highlighted(){

  const {wishList, setWishList} = useContext(WishListContext)
  const [listGame, setListGame] = useState<IGameInfos[]>([])
  const [selectedGameId, setSelectedGameId] = useState<IWishListInfos>()
  
  async function fetchListGame(){
    const response = await api.get('/listOfDiscountedGames')
    setListGame(response.data)
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
    fetchListGame()
  },[])

  useEffect(()=>{
    if(selectedGameId?.name !== undefined){
      addNewGameToWishList();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[selectedGameId])

  function changeTheColorOfTheIconIfItIsOnTheWishList(name: string){
    const checkTheGameAlreadyHasItOnTheWishList = wishList.filter((game)=> game.name === name)
    const teste = checkTheGameAlreadyHasItOnTheWishList.length > 0 ? true : false
    const colorChange = teste === true ? "#8a5dd2" : "#1d1d1d"
    return colorChange
  }
  
  function changeTheIconIfItIsOnTheWishList(name: string){
    const checkTheGameAlreadyHasItOnTheWishList = wishList.filter((game)=> game.name === name)
    const teste = checkTheGameAlreadyHasItOnTheWishList.length > 0 ? true : false
    const iconChange = teste === true ? PiHeartFill : FaRegHeart
    return iconChange
  }

  function gameInformationAddedToWishList(name:string, urlCardBgImage:string, id:string){
    setSelectedGameId({name, urlCardBgImage, id})
  }

  function checkIfWishListAlreadyExists(idGameAtual: string){
    const checking = wishList.filter((idGame)=> idGame.id === idGameAtual).length
    return checking
  }

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return(
    <section className="h-full">
      <div className="lg:w-[75vw] flex flex-col justify-center">
        <div className="flex justify-between items-center">
          <h1 className="text-lg md:text-xl">Grandes descontos</h1>
          <a className="text-xs">mostrar mais</a>
        </div>
        <Carousel 
          responsive={responsive}
          className="py-6"
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlaySpeed={1000}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          // itemClass="carousel-item-padding-40-px"
        >
        {listGame.map((gameInfo)=>{
            return(
                <CardGame
                key={gameInfo.id}
                onClick={()=> checkIfWishListAlreadyExists(gameInfo.id) > 0 ? deleteGameToFavoritesList(gameInfo.id.toString()):gameInformationAddedToWishList(gameInfo.name, gameInfo.urlCardBgImage, gameInfo.id)}
                icon={changeTheIconIfItIsOnTheWishList(gameInfo.name)} 
                iconColor={changeTheColorOfTheIconIfItIsOnTheWishList(gameInfo.name)} 
                name={gameInfo.name} 
                value={gameInfo.value} 
                urlCardBgImage={gameInfo.urlCardBgImage}
                id={gameInfo.id}
                />
              )
            })}
        </Carousel>
      </div>
    </section>
  )
}