import { useEffect, useState } from "react";

const API_KEY = 'dGrYzO6z47DjnM6DNy9OLT0Q8WOhoMxW';

function Random() {
  const [gif, setGif] = useState("");

  useEffect(() => {
    apiData();
  }, []);

  const apiData = async () => {
    try {
      const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
      const res = await fetch(url);
      const { data } = await res.json();
      const imageSource = data.images.downsized_large.url;
      setGif(imageSource);
    } catch (error) {
      console.log(error);
    }
  };

  const clickHandler = () => {
    apiData();
  };

  return (
    <div className="w-1/2 h-[450px] bg-green-500 mx-auto rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className="text-3xl uppercase underline font-bold">Random Gif</h1>
      <img src={gif} alt="Random GIF" width="450" />
      <button onClick={clickHandler} className="w-10/12 bg-white text-xl py-2 rounded-lg font-bold">Generate</button>
    </div>
  );
}

export default Random;




