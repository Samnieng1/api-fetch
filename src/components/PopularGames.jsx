import React, { useEffect } from "react";
import { FcRating } from "react-icons/fc";
import { FaRegComment } from "react-icons/fa";
import { ImFire } from "react-icons/im";

function PopularGames({ allGames, selectedGenre }) {
  useEffect(() => {
    console.log("allGame", allGames);
  }, []);

  return (
    <div>
      <h2 className="text-xs lg:text-3xl font-bold">{selectedGenre} Popular Games</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 gap-4'>
        {allGames.map((item) => (
          <div className='p-2  rounded-lg bg-red-100 group
          hover:scale-110 transition-all duration-300 ease-in-out'>
            <img
              src={item.background_image}
              className="h-[270px] w-full rounded-t-lg object-cover "
            />
            <h2 className="text-xs lg:text-base font-bold text-left  ">{item.name}</h2>
            <div className="flex gap-4">
              <div className="flex gap-2 items-center">
                <FcRating />
                <h2>{item.rating}</h2>
              </div>
              <div className="flex gap-2 items-center">
                <FaRegComment />
                <h2>{item.reviews_count}</h2>
              </div>
              <div className="flex gap-2 items-center">
                <ImFire className="text-orange-400" />
                <h2>{item.suggestions_count}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopularGames;
