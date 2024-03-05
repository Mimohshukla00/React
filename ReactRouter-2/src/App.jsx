// import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Labs from "./components/Labs";
import Support from "./components/Support";
import NotFound from "./components/NotFound";

import "./App.css";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/support" element={<Support />} />
        <Route path="/about" element={<About />} />
        <Route path="/labs" element={<Labs />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<MainHeader />}/> */}

        <Route index element={<Home />} />
        <Route path="/support" element={<Support />} />
        <Route path="/about" element={<About />} />
        <Route path="/labs" element={<Labs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
