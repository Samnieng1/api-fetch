import React, { useEffect } from "react";
//this section is to display only the first game list
//accept the prop from LandingPage.jsx
function Hero({ firstGame }) {
  //to check if it passed or not, use useEffect
  useEffect(() => {
    console.log("firstGame", firstGame);
  }, []);
  return (
    <div>
      
    <div className="relative">
      <div className="absolute bottom-0 p-0 lg:p-5 ">
        <h2 className="text-xs text-wrap lg:text-3xl font-bold text-red-500 bg-yellow-50 p-1 mb-2">{firstGame.name}</h2>
        <button className="text-xs lg:text-2xl font-bold bg-yellow-50 px-3 p-1 rounded-xl">Get Now</button>
      </div>
      <img
        src={firstGame.background_image}
        className="md:h-[320px] w-full object-cover rounded-xl "
      />
    </div>
    </div>
  );
}

export default Hero;
