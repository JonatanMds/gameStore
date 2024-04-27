"use client"
import Image from "next/image";
import { PiShoppingCart} from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import { MdPeopleAlt } from "react-icons/md";
import IconsGameShop from "../components/icons/iconsHeader";
import { useContext, useEffect, useMemo, useState } from "react";
import { api } from "../lib";
import { WishListContext } from "../components/main";
import { IoMdSearch } from "react-icons/io";
// import { WishListContext } from "../components/main";

interface HighlightedListProps {
  id: number,
  name: string,
  urlCardBgImage: string,
  wishlist: boolean,
  highlighted: boolean,
  value: string,
  description: string
}

interface WishListTypes {
  id: number,
  name: string,
  urlCardBgImage: string,
}

export default function Header(){

  const {wishListProp} = useContext(WishListContext)
  const [listHighlighted, setListHighlighted] = useState<HighlightedListProps[]>([])
  const [wishList, setWishList] = useState<WishListTypes[]>([])
  const [getValueFromInput, setGetValueFromInput] = useState('')
  const [saveInputValue, setSaveInputValue] = useState('')
  const urlImageAvatarIcon = "https://i.pinimg.com/originals/83/30/62/833062339386349698553fe1cd7cc2f5.jpg"

  async function fetchHighlightedList(){
    const response = await api.get('/gameShoppingGames')
    setListHighlighted(response.data)
  }

  async function fetchWishList(){
    const response = await api.get('/wishlist')
    setWishList(response.data)
  }

  useEffect(()=>{
    fetchHighlightedList();
    fetchWishList()
  },[])
  
  function currentInputValue(e: React.ChangeEvent<HTMLInputElement>){
    e.preventDefault()
    setGetValueFromInput(e.target.value)
  }

  const filterSearchByName = useMemo(()=>{
    const lowerBusca = getValueFromInput.toLowerCase();
    const buscandoGame = listHighlighted.filter((game) => (game.name.toLowerCase().includes(lowerBusca)))
    return buscandoGame
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[getValueFromInput])

  function getGameNameOfFieldSearch(e: string){
    setSaveInputValue(e)
  }

  return(
    <header className="flex justify-between items-start mt-6">
      <div className="relative">
        <label className="relative text-gray-400 focus-within:text-gray-600 block mb-2">
          <IoMdSearch className="pointer-events-none absolute top-1/2 transform -translate-y-1/2 left-3" color="#232426" size={22}/>
          <input type="text"
            placeholder="Search..."
            onChange={currentInputValue}
            value={getValueFromInput} 
            className="w-full form-input rounded py-2 px-3 bg-[#38393b] placeholder-gray-400 text-gray-500 appearance-none w-full block pl-14 focus:outline-none" />
        </label>
        <div className="w-[150%] absolute z-10 flex flex-col bg-[#38393b] rounded">{getValueFromInput.length > 0 && filterSearchByName.map((game)=>{
          return(
            <div 
            className="w-full flex justify-start items-center cursor-pointer p-1 hover:bg-[#fff] hover:text-[#000]"  
            key={game.id}
            onClick={()=>getGameNameOfFieldSearch(game.name)}
            >
              <Image 
                alt=""
                src={game.urlCardBgImage}
                width={900}
                height={900}
                style={{height:"70px", width:'40%', objectFit:'cover'}}
              />
              <div className="w-[60%] pl-2 truncate">
                <h1 className="font-semibold">{game.name}</h1>
                <p className="font-light">{game.value}</p>
              </div>
            </div>
          )
        })}</div>
      </div>
      <nav className="flex justify-between items-start gap-8">
        <div className="relative flex">
          <IconsGameShop
            icon={CiHeart} 
            iconColor="#ffff" 
            iconSize={28} 
          />
          {wishListProp?.length > 1 ? <p className="flex absolute top-0 right-0 text-xs bg-[#8a5dd2] px-2 rounded-full">{wishListProp?.length - 1}</p> : undefined}
        </div>
        <IconsGameShop icon={PiShoppingCart} iconColor="#ffff" iconSize={28} /> 
        <IconsGameShop icon={MdPeopleAlt} iconColor="#ffff" iconSize={28} /> 
        <div className="flex flex items-center gap-4">
          <div className="flex flex-col">
            <p>JONM</p>
            <p className="text-xs">#1568</p>
          </div>
          <Image 
            className="w-full rounded-full ring ring-[#38393b] ring-offset-4 ring-offset-[#232426]"
            alt="Avatar user"
            src={urlImageAvatarIcon}
            width={35}
            height={35}
            quality={80}
          />
        </div>
      </nav>
    </header>  
  )
}