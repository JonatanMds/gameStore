"use client"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { api } from "../lib"


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
    <div>
      {listGames.map((gameInfo)=>{
        return(
          <>
            <h1>comprando {gameInfo.name}</h1>
          </>

        )
      })}
    </div>
  )
}