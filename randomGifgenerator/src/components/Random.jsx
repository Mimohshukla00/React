// import React from 'react'
import { useEffect, useState } from "react"

// import axios from  'axios';
const API_KEY='dGrYzO6z47DjnM6DNy9OLT0Q8WOhoMxW'
// REACT_APP_GIPHY_API_KEY='dGrYzO6z47DjnM6DNy9OLT0Q8WOhoMxW'

function Random() {
  const [gif,setgif]=useState("")
  
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    // const dataapi=fetch(url)
    // .then((response) => {
    //     return response.json()
    // })
    // .then((data) => {
    //     console.log(data);
    // })
    // .catch((error) => console.log(error))
    function clickhandler() {
      // console.log(p);
      // fetchData()
      
    }

    async function apiData() {
      try {
        let res = await fetch(url)
        let {data}=await res.json();
        console.log(data)
        const imageSource=data.images.downsized_large.url;
        console.log(imageSource)
        setgif(imageSource)
      } catch (error) {
        console.log(error);
      }
      
    }
    useEffect(() => {
      apiData();
    }, []);




    
  
  return (
    <div className="w-1/2 h-[450px] bg-green-500 mx-auto rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className="text-3xl uppercase underline font-bold">Random Gif</h1>
      <img src={gif} width="450"/>
      <button onClick={clickhandler} className="w-10/12 bg-white text-xl py-2 rounded-lg font-bold">Generate</button>

    </div>
  )
}

export default Random