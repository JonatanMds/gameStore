import Image from "next/image";

export default function NewsCard(){
  return(
    <div className="w-56 bg-background-400 text-xs rounded">
      <Image 
        alt=""
        src={'https://assets.xboxservices.com/assets/13/cf/13cf037e-0e97-4812-90d9-b18791367f09.jpg?n=Hogwarts-Legacy_GLP-Page-Hero-1084_Redesign_1920x1080_01.jpg'}
        style={{width:"100%"}}
        width={224}
        height={224}
      />
      <div className="p-2">
        <p>noticia</p>
        <p>portal da noticia</p>
      </div>
      <p className="p-2">texto resumido</p>
    </div>
  )
}