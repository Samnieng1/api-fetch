import React, { useEffect } from 'react'

function TrendingGames({allGames}) {
useEffect(()=>{
  console.log(allGames)
},[])

  return (
    <div>
      <h2 className="text-xs lg:text-3xl font-bold">Trending Games</h2>
    <div className='flex flex-col md:flex-row gap-4 mt-4'>
      {/**show only 3 games */}
      {allGames.map((item,index)=>index<3&&(
        <div className='p-2 rounded-lg bg-blue-300 group
        hover:scale-110 transition-all duration-300 ease-in-out'>
          <img src={item.background_image}
          className='h-[270px] rounded-t-lg object-cover '/>
          <h2 className='text-xs lg:text-lg font-bold  '>{item.name}</h2>
        </div>
      ))}
    </div>
    </div>
  )
}

export default TrendingGames