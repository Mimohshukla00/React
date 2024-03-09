// import React from 'react'

import { useState } from "react"

function Random() {
  const [gif,setgif]=useState("")

  function clickhandler(p) {
    console.log(p);
    
  }
  return (
    <div className="w-1/2 h-[450px] bg-green-500 mx-auto rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className="text-3xl uppercase underline font-bold">Random Gif</h1>
      <img src={gif} width="450"/>
      <button onClick={clickhandler}>Generate</button>

    </div>
  )
}

export default Random