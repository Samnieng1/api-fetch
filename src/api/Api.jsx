import axios from "axios";

//define the api key
const key = "32ef01b1fc18445d91fed5fe34e432a7";
//create axios common
const axiosCreate = axios.create({
    baseURL:'https://api.rawg.io/api'
})
//endpoint of get genre
const getGenre = axiosCreate.get('/genres?key='+key)
//endpoint to to movie
const getGames = axiosCreate.get('/games?key='+key)
//endpoint to get popular games based on genre list
const getGamesByGenreID = (id)=> axiosCreate.get('/games?key='+key+'&genres='+id)
//to make this usable by other components
export default{
    getGenre,
    getGames,
    getGamesByGenreID
}