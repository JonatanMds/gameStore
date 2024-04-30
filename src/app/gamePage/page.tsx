"use client"
import Image from "next/image";
import SidebarMenu from "../sidebarMenu";
import { useEffect, useState } from "react";
import { api } from "../lib";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Button from "../components/button";
import { FaPlaystation, FaWindows, FaXbox } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import React from "react";

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
    <div className="flex min-h-screen flex items-start justify-between bg-[#232426]">
      <SidebarMenu />
      <div className="h-full w-full flex flex-col gap-9">
        {listGames.map((gameInfo)=>{
          return(
            <div key={gameInfo.id}>
              <div className="w-full relative">
              <Image
                alt=""
                src={gameInfo.urlCardBgImage}
                width={1200}
                height={1200}
                style={{width:"100%", height:"70vh", objectFit:'cover', objectPosition:'top'}}
              />
              <section className="w-full absolute bottom-[-36px] flex px-6 pt-6 gap-6 bg-gradient-to-t from-[#232426] from-20%">
                <Image 
                  alt=""
                  src={gameInfo.urlCardBgImage}
                  width={400}
                  height={400}
                  style={{height:"250px", width:"200px", objectFit:"cover", borderRadius:"4%"}}
                />
                <div className="flex flex-col justify-between w-[40%]">
                  <h1 className="text-4xl font-bold">{gameInfo.name}</h1>
                  <p className="text-sm">{gameInfo.description}</p>
                  <ul className="flex gap-2">
                    <li className="border rounded p-2 flex justify-center items-center gap-2">Xbox <FaXbox /></li>
                    <li className="border rounded p-2 flex justify-center items-center gap-2">PS5 <FaPlaystation /></li>
                    <li className="border rounded p-2 flex justify-center items-center gap-2">PC <FaWindows /></li>
                  </ul>
                </div>
                <div className="w-[40%] flex flex-col justify-between">
                  <p className="text-4xl font-bold">5<span className="text-4xl font-bold text-primary-purple-300">/</span>5</p>
                  <p className="text-primary-purple-300 text-2xl font-semibold"><span className="text-2xl font-semibold text-[#fff]">S</span>core</p>
                  <section className="w-full flex justify-between">
                    <ul>
                      <li>Data de lançamento</li>
                      <li>Desenvolvido</li>
                      <li>Distribuído</li>
                      <li>Gênero</li>
                    </ul>
                    <ul>
                      <li>00/00/0000</li>
                      <li>Name01</li>
                      <li>Name02</li>
                      <li>RPG</li>
                    </ul>
                  </section>
                  <div className="flex gap-4">
                    <Button idGame={gameInfo.id} linkToPage="/purchase" label="COMPRAR"/>
                    <CiHeart className="rounded bg-primary-purple-300 p-2" size={36}/>
                  </div>
                </div>
              </section>
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