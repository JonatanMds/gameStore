import Image from "next/image"

export default function FreeGames(){
  return(
    <div className="flex flex-col gap-4 bg-background-400 p-6 rounded">
      <div className="flex justify-between">
        <h1>Jogos gratis</h1>
        <p>Ver mais</p>
      </div>
      <ul className="flex justify-between">
        <li>
          <Image 
            alt=""
            src={'https://store-images.s-microsoft.com/image/apps.54355.14047496556148589.c22f253d-c9b9-4f11-aee9-75e0ca6ecf73.b40d5201-dd16-4abb-bc50-bd538df83c03'}
            width={340}
            height={390}
          />
          <h1>name</h1>
          <p>Gratis - 04 de abr. ás 12:00</p>
        </li>
        <li>
        <Image 
            alt=""
            src={'https://store-images.s-microsoft.com/image/apps.54355.14047496556148589.c22f253d-c9b9-4f11-aee9-75e0ca6ecf73.b40d5201-dd16-4abb-bc50-bd538df83c03'}
            width={340}
            height={390}
          />
          <h1>name</h1>
          <p>Gratis - 04 de abr. ás 12:00</p>
        </li>
        <li>
        <Image 
            alt=""
            src={'https://store-images.s-microsoft.com/image/apps.54355.14047496556148589.c22f253d-c9b9-4f11-aee9-75e0ca6ecf73.b40d5201-dd16-4abb-bc50-bd538df83c03'}
            width={340}
            height={390}
          />
          <h1>name</h1>
          <p>Gratis - 04 de abr. ás 12:00</p>
        </li>
      </ul>
    </div>
  )
}