import Image from "next/image";
import Link from "next/link";
import { ElementType } from "react";
import { FaShoppingCart } from "react-icons/fa";

type InfoGameProp = {
  name: string,
  urlCardBgImage: string,
  value: string,
  icon: ElementType;
  iconColor: string;
  iconSize?: number;
  onClick: ()=>void;
}

export default function CardGame({name,urlCardBgImage,value, icon: Icon, iconColor, iconSize, onClick}:InfoGameProp){

  return(
    <div className="relative h-full w-[260px] flex flex-col gap-2 bg-background-400 rounded p-1">
      <div 
        className="flex absolute p-2 top-0 right-0"
        onClick={onClick}  
      >
        <Icon 
          color={iconColor} 
          size={iconSize}
        />
      </div>
      <Image
        alt=""
        src={urlCardBgImage}
        width={400}
        height={400}
        style={{
          width: '100%',
          height: '260px',
          objectFit:'cover',
          borderRadius: '4px'
        }}
      />
      <div className="w-full flex flex-col gap-2 p-2">
        <p className="line-clamp-1">{name}</p>
        <div className="flex justify-start items-center gap-4">
          <Link href="/gamePage">
            <button className="flex bg-[#0057ff] p-2 gap-2 rounded">
              <FaShoppingCart />
              <p className="text-sm">{value}</p>
            </button>
          </Link>
          <p className="text-[10px] line-through">{value}</p>
          <p className="bg-[#ffff] text-xs rounded p-1 text-background-500">-75%</p>
        </div>
      </div>
    </div>
  )
}