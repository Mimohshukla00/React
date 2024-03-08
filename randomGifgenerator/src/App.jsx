// import { useState } from 'react'
import Random from "./components/Random"
import Tag from "./components/Tag"


function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="w-full h-screen flex flex-col background relative items-center">
      <h1 className="bg-white  font-bold mx-auto w-11/12 text-center mt-[40px] ml-[25px] text-3xl  rounded-sm absolute">RANDOM GIFS</h1>
      <div className="flex flex-col"></div>
      <Random></Random>
      <Tag></Tag>
    </div>

  )
}

export default App
