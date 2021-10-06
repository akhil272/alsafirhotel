import { useState, useEffect } from "react";
type SlideData = {
  images: string[];
  autoplay?: boolean;
  autoPlayTime?: number;
  children?: any;
};
const ImageSlider = ({
  images = [],
  autoplay = true,
  autoPlayTime = 5000,
  children,
  ...props
}: SlideData) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  function nextSlide(slideIndex = currentSlide + 1) {
    const newSlideIndex = slideIndex >= images.length ? 0 : slideIndex;
    setCurrentSlide(newSlideIndex);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, autoPlayTime);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <div id="Wrapper" className="h-screen flex flex-nowrap overflow-hidden ">
      {images.map((imageUrl, index) => (
        <div
          id="Slide"
          key={index}
          className="h-full w-full flex-shrink-0 bg-center bg-cover "
          style={{
            transition: "2000ms all ease-in-out",
            backgroundImage: `url(${imageUrl})`,
            marginLeft: index === 0 ? `-${currentSlide * 100}%` : undefined,
          }}
        ></div>
      ))}
      <div className="absolute">{children} </div>
    </div>
  );
};
export default ImageSlider;
