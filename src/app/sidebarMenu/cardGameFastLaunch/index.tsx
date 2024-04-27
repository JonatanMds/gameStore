import Image from "next/image";

interface cardFastLaunchTypes {
  name: string;
  cardBgImage: string
}

export default function CardFastLaunch({name,cardBgImage}:cardFastLaunchTypes){
  return(
    <div className="flex justify-start items-center gap-4">
      <div className="flex h-[80px] w-[60px]">
        <Image
          src={cardBgImage}
          alt=""
          height={1200}
          width={1200}
          quality={80}
          style={{objectFit:'cover', objectPosition: 'center', borderRadius:'12%'}}
          />
      </div>
      <p className="w-[230px] text-sm truncate hover:text-ellipsis">{name}</p>
    </div>
  )
}