import { useState } from 'react'

// import './App.css'
import Item from './Item'
import Itemprice from './Itemprice'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <div>mimohshukla</div> */}
    <Item></Item>
    <Itemprice name="Nirma" day="20" month="June" year="1998"></Itemprice>
    <Itemprice name="Maggi" day="30" month="july" year="2007"></Itemprice>
    <Itemprice name="harpic" day="10" month="august" year="2010"></Itemprice>

    </>
  )
}

export default App
