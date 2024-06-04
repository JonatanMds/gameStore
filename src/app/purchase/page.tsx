"use client"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { api } from "../lib"
import { FaExclamationTriangle} from "react-icons/fa"
import { FaHeartCircleCheck } from "react-icons/fa6"
import MenuHamburge from "../mainPage/header/menuHamburger";


type HighlightedListType = {
  id: string,
  name: string,
  urlCardBgImage: string,
  wishlist: boolean,
  highlighted: boolean,
  value: string,
  description: string
}

export default function Purchase(){
  const router = useSearchParams()
  const [listGames, setListGames] = useState<HighlightedListType[]>([])

  async function fetchListGame(){
    const response = await api.get(`/gameShoppingGames/${router.get('idGame')}`)
    setListGames([response.data])
  }
  
  useEffect(()=>{
    fetchListGame()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  
  return(
    <>
      <MenuHamburge />
      <div className="h-[90vh] w-full flex items-start justify-between">
        {listGames.map((gameInfo)=>{
          return(
            <div key={gameInfo.id} className="h-full w-full flex flex-col justify-center items-center">
              <span className="flex items-center gap-4">
                <h1 className="text-xl">Comprando {gameInfo.name}</h1>
                <FaHeartCircleCheck  size={34} />
              </span>
              <FaExclamationTriangle size={75}/>
              <p>site em manutenção</p>
            </div>
          )
          })}
      </div>
    </>
  )
}