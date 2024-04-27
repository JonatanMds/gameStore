"use client"
import { ElementType } from "react"

export interface IconProps{
  icon: ElementType;
  iconColor: string;
  iconSize?: number;
  onClick?: ()=>void;
}
export default function IconsGameShop({icon: Icon, iconColor, iconSize, onClick}:IconProps){
  
  return(
    <span
      onClick={onClick} 
      className="p-2 rounded cursor-pointer hover:border-b-4 border-[#8a5dd2]">
      <Icon 
        className="drop-shadow-xl"
        color={iconColor} 
        size={iconSize}
      />
    </span>
  )
}