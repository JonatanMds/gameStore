// components/Carousel.js
import { useState } from 'react';
import Button from '../button';

type HighlightedListType = {
  id: string,
  name: string,
  urlCardBgImage: string,
  wishlist: boolean,
  highlighted: boolean,
  value: string,
  description: string
}

type array = {
  images: HighlightedListType[]
}

export default function Carousel({images}:array){
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="h-[60vh] w-full relative flex flex-col justify-between rounded">
      <button
        onClick={prevImage}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full z-10"
      >
        Prev
      </button>
      <button
        onClick={nextImage}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full z-10"
      >
        Next
      </button>
      <div className="overflow-hidden rounded-lg">
        <img
          src={images[currentIndex].urlCardBgImage}
          alt={`Image ${currentIndex + 1}`}
          className="w-full h-auto"
        />
        {/* <h1>{images[currentIndex]}</h1> */}
      </div>
      <div className="absolute bottom-20 right-20 mt-4 flex justify-center space-x-2">
        {images?.map((gameInfo, index) => (
          <div className='relative' key={index}>
          <img
            
            src={gameInfo.urlCardBgImage}
            alt={`Image ${index + 1}`}
            className={`w-20 h-auto rounded-lg cursor-pointer ${
              index === currentIndex ? 'border-2 border-blue-500' : ''
            }`}
            onClick={() => setCurrentIndex(index)}
          />
          <div className="absolute bottom-0 left-0 flex justify-start items-center gap-2 bg-gradient-to-r from-[#000000] p-4">
              <div className="flex flex-col gap-2">
                <h1>{gameInfo.name}</h1>
                <p className="w-[50%] text-xs line-clamp-3">{gameInfo.description}</p>
                <span>{gameInfo.value}</span>
                  <Button label="COMPRAR" linkToPage="/gamePage" idGame={gameInfo.id}/>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};