import React, { useEffect, useState } from "react";
import Genre from "../components/Genre";
import Api from "../api/Api";
import Hero from "../components/Hero";
import TrendingGames from "../components/TrendingGames";
import PopularGames from "../components/PopularGames";

function LandingPage() {
    //to store games list in a variable
    const [gameList,setGameList]=useState();
    const[popularGameByGenre,setPopularGameByGenre]=useState();
//need to call the gelAllGames function here
useEffect(()=>{
    getAllGames();
},[])

//to define a common function here to call game list so that we can pass it to any components. we don't need to call the game endpoint everytime.
const getAllGames = ()=>{
    Api.getGames.then((res)=>{
//console.log(res.data.results),
setGameList(res.data.results) //now the game list has games data
    })
}
//fetch based on genreID
const getPopularGamesByGenreID=(id)=>{
  Api.getGamesByGenreID(4).then((res)=>{
    //console.log(res.data.results),
    setPopularGameByGenre(res.data.results)
  }

  )
}

  return (
    <div className="flex flex-col md:flex-row gap-2 ">
      <div className="bg-red-300 h-full w-full lg:w-1/4 ">
      <Genre/>
      </div>
      <div className="w-full  lg:w-3/4">
      {/**pass the first element ([0]) of the gameList to Hero section. Prop name can be anything, here we name it as firstGame and the value to pass here is gameList
       * Then go to Hero.jsx to accept the prop firstGame.
       */}
       {/**add condiiton if gameList has data, show the Hero section. Otherwise, don't show anytihing */}
      {gameList?.length>0?
      <div className="flex flex-col gap-4">
      <Hero firstGame={gameList[0]}/>
      <TrendingGames allGames={gameList}/>
      {/* <PopularGames allGames={popularGameByGenre} /> */}
      </div>
      :null}
      
      </div>
    </div>
  );
}

export default LandingPage;
