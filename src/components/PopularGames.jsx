import React, { useEffect } from 'react'

function PopularGames({allGames}) {

useEffect(()=>{
console.log("allGame", allGames)
},[])    

  return (
    <div>
        {allGames.map((item)=>(
            <div>
                <img src={item.background_image}/>
                <h2>{item.name}</h2>
            </div>
        ))}
    </div>
  )
}

export default PopularGames