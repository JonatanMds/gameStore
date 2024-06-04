import Image from "next/image"

export default function FreeGames(){
  return(
    <div className="flex flex-col gap-4 bg-[#1d1d1d] p-6 rounded">
      <div className="flex justify-between items-center">
        <h1 className="text-base md:text-2xl">Destaques da semana</h1>
        <p className="text-xs md:text-sm">Ver mais</p>
      </div>
      <ul className="flex flex-col md:flex-row justify-between gap-4">
        <li>
          <Image
            className="rounded" 
            alt=""
            src={'https://store-images.s-microsoft.com/image/apps.54355.14047496556148589.c22f253d-c9b9-4f11-aee9-75e0ca6ecf73.b40d5201-dd16-4abb-bc50-bd538df83c03'}
            width={340}
            height={390}
          />
          <div className="flex flex-col items-center md:items-start justify-between">
            <h1>name</h1>
            <p className="text-xs md:text-base">Gratis - 04 de abr. ás 12:00</p>
          </div>
        </li>
        <li>
        <Image 
            alt=""
            src={'https://store-images.s-microsoft.com/image/apps.54355.14047496556148589.c22f253d-c9b9-4f11-aee9-75e0ca6ecf73.b40d5201-dd16-4abb-bc50-bd538df83c03'}
            width={340}
            height={390}
          />
           <div className="flex flex-col items-center md:items-start justify-between">
            <h1>name</h1>
            <p className="text-xs md:text-base">Gratis - 04 de abr. ás 12:00</p>
          </div>
        </li>
        <li>
        <Image 
            alt=""
            src={'https://store-images.s-microsoft.com/image/apps.54355.14047496556148589.c22f253d-c9b9-4f11-aee9-75e0ca6ecf73.b40d5201-dd16-4abb-bc50-bd538df83c03'}
            width={340}
            height={390}
          />
           <div className="flex flex-col items-center md:items-start justify-between">
            <h1>name</h1>
            <p className="text-xs md:text-base">Gratis - 04 de abr. ás 12:00</p>
          </div>
        </li>
      </ul>
    </div>
  )
}