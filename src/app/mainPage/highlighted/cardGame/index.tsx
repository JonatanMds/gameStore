import { ICardGameProp } from "@/shared/interfaces";
import Image from "next/image";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

export default function CardGame({name,urlCardBgImage,value, icon: Icon, iconColor, iconSize, onClick, id}:ICardGameProp){

  return(
    <div className="relative hover:shadow-md hover:shadow-[#8a5dd2] p-1 bg-[#1d1d1d] mx-auto md:mx-2">
      <Link
      href={
          {
            pathname:'/gamePage',
            query:`idGame=${id}`
          }
        } 
        className="relative h-full w-[full] flex flex-col gap-2">
        <div>
          <Image
            alt=""
            src={urlCardBgImage}
            width={400}
            height={400}
            style={{
              width: '100%',
              objectFit:'cover',
              borderRadius: '4px'
            }}
            className="h-[160px]"
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
            <p className="text-xs md-text-sm">{value}</p>
          </button>
        </Link>
    </div>
  )
}