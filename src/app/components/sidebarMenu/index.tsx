'use client'
import { RiHome6Fill, RiGamepadFill } from "react-icons/ri";
import { BiSolidCategory} from "react-icons/bi";
import CardFastLaunch from "./cardGameFastLaunch";
import GameInProgress from "./gameInProgress";
import { useEffect, useState } from "react";
import { api } from "../../lib";
import SidebarIcons from "./sidebarIcones";
import Link from "next/link";


type listFatsLaunchTypes = {
  id: number
  name: string
  cardBgImage: string
}

export default function SidebarMenu(){

  const [listFastLaunch, setListFastLaunch] = useState<listFatsLaunchTypes[]>([])
  const [listProgress, setListProgress] = useState<listFatsLaunchTypes[]>([])

  async function fetchFastLaunch(){
    const response = await api.get('/userLibrary')
    setListFastLaunch(response.data)
  }
  
  async function fetchProgress(){
    const response = await api.get('/progress')
    setListProgress(response.data)
  }

  useEffect(()=>{
    fetchFastLaunch();
    fetchProgress();
  },[])


  return(
    <aside className="h-screen sticky top-0 w-[20vw] flex flex-col justify-between bg-[#1d1d1d] p-4 gap-8">
      <span className="flex justify-start items-center gap-2">
        <RiGamepadFill size={50}/>
        <Link 
          href="/"
          className="flex flex-col justify-start items-start font-bold"
        >
          <p className="text-lg"><span className="text-[#8a5dd2]">JM</span>Play</p>
          <p className="text-base">GAME<span className="text-[#8a5dd2]">STORE</span></p>
        </Link>
      </span>
      <nav>
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
              icon={RiGamepadFill}
              name="Minha Biblioteca"
              linkToPage="/biblioteca"
              />
          </li>
        </ul>
      </nav>
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
      {listProgress.map((gameInfo)=>{
            return(
              <GameInProgress key={gameInfo.id} nameGame={gameInfo.name} progress="40%" cardBgImage={gameInfo.cardBgImage}/>
            )
          })}
    </aside>
  )
}