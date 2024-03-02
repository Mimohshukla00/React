// import { useState } from "react";
import Testimonial from "./Testimonial";
 import reviews from "./data";

function App() {
  // const [count, setCount] = useState(0);
  // console.log(reviews)

  return (
    <div>
      <div>
        <h1>Our Testimonials</h1>

        <Testimonial reviews={reviews}></Testimonial>
      </div>
    </div>
  );
}

export default App;
