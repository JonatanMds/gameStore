"use client"
import Image from "next/image";
import SidebarMenu from "../sidebarMenu";
import { useEffect, useState } from "react";
import { api } from "../lib";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Button from "../components/button";

type HighlightedListType = {
  id: string,
  name: string,
  urlCardBgImage: string,
  wishlist: boolean,
  highlighted: boolean,
  value: string,
  description: string
}


export default function GamePage(){

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
    <div className="flex min-h-screen flex items-start justify-between bg-background-500">
      <SidebarMenu />
      <div className="h-full w-full flex flex-col gap-9">
        {listGames.map((gameInfo)=>{
          return(
            <div key={gameInfo.id}>
              <div className="w-full grid grid-cols-3">
              <Image
                alt=""
                src={gameInfo.urlCardBgImage}
                width={1200}
                height={1200}
                style={{width:"200px", height:"280px", borderRadius:"8px"}}
              />
              <section className="flex flex-col justify-end gap-4">
                <h1 className="text-3xl">{gameInfo.name}</h1>
                <p className="text-xs">{gameInfo.description}</p>
                <ul className="flex gap-2">
                  <li className="border rounded p-2">Xbox</li>
                  <li className="border rounded p-2">PS5</li>
                  <li className="border rounded p-2">PC</li>
                </ul>
              </section>
              <p>score: 94</p>
              <Button idGame={gameInfo.id} linkToPage="/purchase" label="Comprar"/>
            </div>
            {/* <div>
              <h1 className="text-2xl">About the game</h1>
              <p className="text-[#b5bdc7]">Uma aventura de ação e história, que combina exploração e combate em ritmo acelerado. Como Kena, os jogadores encontram e desenvolvem uma equipe de encantadores companheiros espirituais chamados Rot, aprimorando suas habilidades e criando novas maneiras de manipular o ambiente.</p>
              <button className="rounded bg-[#1d1d29] p-2">show more</button>
              <h1 className="text-2xl ">Visuais</h1>
              <div>
                <h1 className="text-2xl">Required</h1>
                <div className="w-full flex gap-4">
                  <div className="w-full flex flex-col rounded bg-background-400 p-4">
                    <p>Minimum</p>
                    <ul>
                      <li className="text-sm text-[#b5bdc7]">System</li>
                      <li>Windows 10</li>
                      <li className="text-sm text-[#b5bdc7]">Processor</li>
                      <li>Ryzen 5</li>
                      <li className="text-sm text-[#b5bdc7]">Graphics</li>
                      <li>Radeon x</li>
                      <li className="text-sm text-[#b5bdc7]">Memory</li>
                      <li>8 GB RAM</li>
                      <li className="text-sm text-[#b5bdc7]">Storage</li>
                      <li>100 GB</li>
                    </ul>
                  </div>
                  <div className="w-full flex flex-col rounded bg-background-400 p-4">
                    <p>Minimum</p>
                    <ul>
                      <li className="text-sm text-[#b5bdc7]">System</li>
                      <li>Windows 10</li>
                      <li className="text-sm text-[#b5bdc7]">Processor</li>
                      <li>Ryzen 5</li>
                      <li className="text-sm text-[#b5bdc7]">Graphics</li>
                      <li>Radeon x</li>
                      <li className="text-sm text-[#b5bdc7]">Memory</li>
                      <li>8 GB RAM</li>
                      <li className="text-sm text-[#b5bdc7]">Storage</li>
                      <li>100 GB</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div> */}
            </div>

          )
        })} 
      </div>
    </div>
  )
}