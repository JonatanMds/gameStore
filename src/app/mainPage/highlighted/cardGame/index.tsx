import Image from "next/image";
import Link from "next/link";
import { ElementType } from "react";
import { FaShoppingCart } from "react-icons/fa";

type InfoGameProp = {
  name: string,
  id: string,
  urlCardBgImage: string,
  value: string,
  icon: ElementType;
  iconColor: string;
  iconSize?: number;
  onClick: ()=>void;
}

export default function CardGame({name,urlCardBgImage,value, icon: Icon, iconColor, iconSize, onClick, id}:InfoGameProp){

  return(
    <div className="relative hover:shadow-xl hover:shadow-[#8a5dd2] p-1 bg-[#1d1d1d] rounded">
      <Link
      href={
          {
            pathname:'/gamePage',
            query:`idGame=${id}`
          }
        } 
        className="relative h-full w-[260px] flex flex-col gap-2">
        <div>
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

        </div>
        <div className="w-full flex flex-col gap-2 p-2 pt-0">
          <p className="line-clamp-1 mb-2">{name}</p>
          <div className="flex justify-end items-center gap-4">
            <p className="text-[10px] line-through">{value}</p>
            <p className="bg-[#ffff] text-xs rounded p-1 text-background-500">-75%</p>
          </div>
        </div>
      </Link>
      <div 
          className="flex absolute p-1 top-1 right-1 cursor-pointer bg-[#fff] rounded"
          onClick={onClick}  
        >
          <Icon 
            color={iconColor} 
            size={iconSize}
          />
        </div>
        <Link 
          href={
            {
              pathname:'/gamePage',
              query:`idGame=${id}`
            }
          } 
        >
          <button className="flex absolute bottom-2 left-3 bg-[#8a5dd2] p-2 gap-2 rounded">
            <FaShoppingCart />
            <p className="text-sm">{value}</p>
          </button>
        </Link>
    </div>
  )
}