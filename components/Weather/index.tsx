import IconsPack from "../../public/images/IconsPack";
import { useState } from "react";

const WeatherPack = () => {
  const [currentWeather, setCurrentWeather] = useState("opacity-50");

  return (
    <div className="flex space-x-4">
      <div
        className={`flex relative justify-center items-center ${currentWeather}`}
      >
        <div className="flex w-10 h-10 items-center justify-center">
          {IconsPack.blogIcon}
        </div>
      </div>
      <div
        className={`flex relative justify-center items-center ${currentWeather}`}
      >
        <div className="flex w-10 h-10 items-center justify-center">
          {IconsPack.blogIcon}
        </div>
      </div>
      <div
        className={`flex relative justify-center items-center ${currentWeather}`}
      >
        <div className="flex w-10 h-10 items-center justify-center">
          {IconsPack.blogIcon}
        </div>
      </div>
      <div className="flex relative justify-center items-center">
        <div className=" flex absolute items-center justify-center transition-all duration-500 group-hover:rotate-90 ">
          {IconsPack.alsafirRings}
        </div>
        <div className="flex w-10 h-10 items-center justify-center">
          {IconsPack.blogIcon}
        </div>
      </div>
      <div
        className={`flex relative justify-center items-center ${currentWeather}`}
      >
        <div className="flex w-10  h-10 items-center justify-center">
          {IconsPack.blogIcon}
        </div>
      </div>
    </div>
  );
};

export default WeatherPack;
