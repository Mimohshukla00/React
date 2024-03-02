// import { useState } from 'react'
import Cards from './components/Cards'
import Filter from './components/Filter'
import Navbar from './components/Navbar'
// import './App.css'
import { apiUrl,filterData } from './Data'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Navbar></Navbar>
    </div>
    <div>
      <Filter filterData={filterData}></Filter>
    </div>
    <div>
      <Cards></Cards>
    </div>

    </>
  )
}

export default App
