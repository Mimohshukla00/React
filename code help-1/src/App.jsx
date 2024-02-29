import { useState } from 'react'

import './App.css'
import Item from './Item'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <div>mimohshukla</div> */}
    <Item></Item>

    </>
  )
}

export default App
