"use client"
import { useContext, useEffect, useState } from "react";
import { api } from "../lib";
import CardGame from "./cardGame";
import { PiHeartFill } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
import { WishListContext } from "../components/main";


interface HighlightedListProps {
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

export default function Highlighted(){

  const {wishListProp, wishList, setWishList} = useContext(WishListContext)
  const [listGame, setListGame] = useState<HighlightedListProps[]>([])
  const [selectedGameId, setSelectedGameId] = useState<WishListType>()
  
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
    const verifica = wishList.filter((idGame)=> idGame.id === idGameAtual).length
    return verifica
  }

  return(
    <section className="w-full h-full">
      <div>
        <div className="w-full flex justify-between items-center">
          <h1 className="text-xl">Grandes descontos</h1>
          <a className="text-xs">mostrar mais</a>
        </div>
        <ul className="flex justify-between mt-6">
          {listGame.map((gameInfo)=>{
            return(
              <li key={gameInfo.id}>
                <CardGame
                onClick={()=> checkIfWishListAlreadyExists(gameInfo.id) > 0 ? deleteGameToFavoritesList(gameInfo.id.toString()):gameInformationAddedToWishList(gameInfo.name, gameInfo.urlCardBgImage, gameInfo.id)}
                icon={changeTheIconIfItIsOnTheWishList(gameInfo.name)} 
                iconColor={changeTheColorOfTheIconIfItIsOnTheWishList(gameInfo.name)} 
                name={gameInfo.name} 
                value={gameInfo.value} 
                urlCardBgImage={gameInfo.urlCardBgImage}
                id={gameInfo.id}
                />
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}