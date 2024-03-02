// import React from 'react'
import {FaQuoteLeft,FaQuoteRight} from "react-icons/fa"

function Card(props) {
  // console.log(props);
  const reviews = props.reviews;
  // console.log(reviews[0]);
  return (
    <div className="flex flex-col md:relative">
      <div className="absolute top-[-7rem] z-10 mx-auto ">
        <img  className="aspect-square rounded-full w-[140px] h-[140px] z-25"
        
        src={reviews.image}></img>
        <div className="w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-6px] z-[-10] left-[10px]"></div>
      </div>
      <div className="text-center mt-7">
        <p className="font-bold text-2xl capitalize">{reviews.name}</p>
      </div>
      <div className="text-center mt-7">
        <p className="text-violet-300">{reviews.job}</p>
      </div>
      <div className="text-violet-400 mx-auto mt-5">
        <FaQuoteLeft></FaQuoteLeft>
      </div>
      <div className="text-center mt-4 text-slate-500">{reviews.text}</div>

      <div>
        <FaQuoteRight className="text-violet-400 mx-auto mt-5"></FaQuoteRight>
      </div>
      
    </div>
  );
}

export default Card;
