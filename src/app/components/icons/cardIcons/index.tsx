"use client"
import { ElementType } from "react"

export interface IconProps{
  icon: ElementType;
  iconColor: string;
  iconSize?: number;
  onClick: ()=>void;
}

export default function CardIcons({icon: Icon, iconColor, iconSize, onClick}:IconProps){
  return(
    <span
      onClick={onClick} 
      className="p-1 rounded bg-[#fff] cursor-pointer">
      <Icon 
        className="drop-shadow-xl"
        color={iconColor} 
        size={iconSize}
      />
    </span>
  )
}