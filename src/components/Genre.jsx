import React, { useEffect, useState } from "react";
import ApiMovie from "../api/Api";

function Genre() {
  //to display the genre list to the UI we need to store in variable
  const [genre, setGenre] = useState([])
  // to set background active when selecting each genre..to store active index
  //for example, if select on genre a, the hover background should stay
  const [activeIndex,setActiveIndex]=useState(0)

  //fetch genre data from the API
  useEffect(() => {
    getGenre();
  }, [])
  const getGenre = () => {
    ApiMovie.getGenre.then((res) => {
      console.log(res.data.results);
      setGenre(res.data.results); //to store the result to display to UI.
      //.results as it contains info of genre list, we don't want header or other info
    })
  }

  return (
    <div>
        <h2 className="text-base md:text-xl font-bold">Genre</h2>
        {/* iterate the list of genre */}
        {/**the onclick function is to change the hover not to stay with the first clicked genre when changing to click other genre */}
        {genre.map((item,index)=>(
            <div onClick={()=>setActiveIndex(index)}
            className={`flex gap-2 items-center
            hover:bg-slate-100 p-2 group 
            ${activeIndex==index?'bg-gray-200':null}`}>
                
                <img src={item.image_background} 
                className="w-[40px] h-[40px] object-cover rounded-lg"/>
                <h3>{item.name}</h3>
                
            </div>
        ))}
    </div>
  )
}

export default Genre
