const ImageSlider = () => {
  const image = "/images/homepage/homeCoverImage01.jpg";
  return (
    <div
      className="bg-cover bg-center h-full min-w-full "
      style={{ backgroundImage: `url(${image})` }}
    ></div>
  );
};
export default ImageSlider;
