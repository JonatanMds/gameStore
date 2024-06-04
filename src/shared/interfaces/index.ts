import { ElementType } from "react";

export interface IGameInfos {
  id: string,
  name: string,
  urlCardBgImage: string,
  wishlist: boolean,
  highlighted: boolean,
  value: string,
  description: string,
  urlGameImages: string[]
}

export interface IWishListInfos {
  name: string,
  urlCardBgImage: string,
  id: string,
}

export interface ICardGameProp {
  name: string,
  id: string,
  urlCardBgImage: string,
  value: string,
  icon: ElementType;
  iconColor: string;
  iconSize?: number;
  onClick: ()=>void;
}

type ICardsInfo = {
  id?: string,
  name?: string,
  urlCardBgImage: string,
}

export interface ICarouselInfoProps {
  cardBgImage: ICardsInfo[],
  indexOfListUsedInCarrosel: (indice: number)=>void
  updatedIndex: number
}