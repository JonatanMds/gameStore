import Link from "next/link";
import { ElementType } from "react";

type iconProps = {
  name: string,
  icon: ElementType;
  linkToPage: string
}

export default function SidebarIcons({icon: Icon, name, linkToPage}: iconProps){
  return(
    <Link href={linkToPage} className="flex justify-start items-center gap-2 p-2 rounded hover:bg-[#8a5dd2] hover:text-[#ffff] hover:cursor-pointer">
      <Icon 
        className="drop-shadow-xl"
        size={28}
      />
      <p className="text-sm">{name}</p>
    </Link>
  )
}