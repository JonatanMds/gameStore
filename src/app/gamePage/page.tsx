"use client"
import Image from "next/image";
import SidebarMenu from "../sidebarMenu";
import { useEffect, useState } from "react";
import { api } from "../lib";
import { useSearchParams } from "next/navigation";
import Button from "../components/button";
import { FaPlaystation, FaWindows, FaXbox } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

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
    <div className="h-full flex items-start justify-between bg-second-black-300">
      <SidebarMenu />
      <div className="h-full w-full flex flex-col gap-9">
        {listGames.map((gameInfo)=>{
          return(
            <div key={gameInfo.id}>
              <div className="w-full relative">
              <div>
                <video 
                  className="w-full h-[70vh] object-cover"
                  // controls 
                  autoPlay={true}
                  loop
                  playsInline
                  muted 
                  src={require('../../../public/teste.mp4')} 
                />
              </div>
              <section className="w-full absolute bottom-[-36px] flex px-6 pt-6 gap-6 bg-gradient-to-t from-second-black-300 from-20%">
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
                    <li className="border border-[#8b8b8b] rounded p-2 flex justify-center items-center gap-2">Xbox <FaXbox /></li>
                    <li className="border border-[#8b8b8b] rounded p-2 flex justify-center items-center gap-2">PS5 <FaPlaystation /></li>
                    <li className="border border-[#8b8b8b] rounded p-2 flex justify-center items-center gap-2">PC <FaWindows /></li>
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
              <div>
              <Carousel className="mt-32">
                <div>
                <Image 
                  alt=""
                  src={gameInfo.urlCardBgImage}
                  width={400}
                  height={400}
                  style={{height:"250px", width:"200px", objectFit:"cover", borderRadius:"4%"}}
                />
                </div>
                <div>
                <Image 
                  alt=""
                  src={gameInfo.urlCardBgImage}
                  width={400}
                  height={400}
                  style={{height:"250px", width:"200px", objectFit:"cover", borderRadius:"4%"}}
                />
                </div>
                <div>
                <Image 
                  alt=""
                  src={gameInfo.urlCardBgImage}
                  width={400}
                  height={400}
                  style={{height:"250px", width:"200px", objectFit:"cover", borderRadius:"4%"}}
                />
                </div>
            </Carousel>
              </div>
            </div>
          )
        })} 
      </div>
    </div>
  )
}