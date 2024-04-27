'use client'
import { RiHome6Fill } from "react-icons/ri";
import { BiSolidCategory } from "react-icons/bi";
import { FaGamepad } from "react-icons/fa";
import CardFastLaunch from "./cardGameFastLaunch";
import GameInProgress from "./gameInProgress";
import { useEffect, useState } from "react";
import { api } from "../lib";
import SidebarIcons from "./sidebarIcones";


interface listFatsLaunchTypes{
  id: number
  name: string
  cardBgImage: string
}

export default function SidebarMenu(){

  const [listFastLaunch, setListFastLaunch] = useState<listFatsLaunchTypes[]>([])
  const [listProgress, setListProgress] = useState<listFatsLaunchTypes[]>([])

  async function fetchRecommend(){
    const response = await api.get('/userLibrary')
    setListFastLaunch(response.data)
  }
  
  async function fetchProgress(){
    const response = await api.get('/progress')
    setListProgress(response.data)
  }

  useEffect(()=>{
    fetchRecommend();
    fetchProgress();
  },[])

  return(
    <aside className="h-screen sticky top-0 w-[20vw] flex flex-col justify-between bg-[#1d1d1d] p-4 gap-8">
      <div className="flex justify-start items-center gap-2">
        <FaGamepad size={50}/>
        <div className="flex flex-col justify-start items-start font-bold">
          <p className="text-lg"><span className="text-[#8a5dd2]">JM</span>Play</p>
          <p className="text-base">GAME<span className="text-[#8a5dd2]">STORE</span></p>
        </div>
      </div>
      <ul className="flex flex-col justify-start gap-2 text-xs text-white">
        <li>
          <SidebarIcons
            icon={RiHome6Fill}
            name="Home"
            linkToPage="/"
            />
        </li>
        <li>
          <SidebarIcons
            icon={BiSolidCategory}
            name="Categorias"
            linkToPage="/categorias"
            />
        </li>
        <li>
          <SidebarIcons
             icon={FaGamepad}
             name="Minha Biblioteca"
             linkToPage="/biblioteca"
             />
        </li>
      </ul>
      <div>
        <h1 className="text-sm pb-4">FAST LAUNCH</h1>
        <ul className="flex flex-col gap-4">
          {listFastLaunch.map((prop)=>{
            return(
              <li key={prop.id}>
                <CardFastLaunch name={prop.name} cardBgImage={prop.cardBgImage}/>
              </li>
            )
          })}
        </ul>
      </div>
      {listProgress.map((prop)=>{
            return(
              <GameInProgress key={1} nameGame={prop.name} progress="40%" cardBgImage={prop.cardBgImage}/>
            )
          })}
    </aside>
  )
}