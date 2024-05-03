'use client'
import Image from "next/image";

type GameInProgressTypes = {
  nameGame: string;
  progress: string;
  cardBgImage: string;
}




export default function GameInProgress({cardBgImage, nameGame, progress}:GameInProgressTypes){

  return(
    <div className="w-full flex justify-start text-xs bg-[#38393b] rounded p-2 gap-2 shadow-md">
        <div className="flex w-[60px]">
          <Image 
            alt=""
            src={cardBgImage}
            width={1200}
            height={1200}
            quality={80}
            style={{objectFit:'cover', borderRadius:'12%'}}
          />
        </div>
        <div className="w-full flex flex-col justify-start gap-1">
          <span>{nameGame}</span>
          <div className="w-full bg-[gray-200] rounded-full h-1 dark:bg-[#593c86]">
            <div className="bg-[#8a5dd2] h-1 rounded-full dark:bg-[#8a5dd2]" style={{width:progress}}></div>
          </div>
        <div className="w-full flex justify-between">
          <span>downloading</span>
          <span>{progress}</span>
        </div>
      </div>
    </div>
  )
}