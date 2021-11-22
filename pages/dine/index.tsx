import ImageSlider from "../../components/ImageSlider";

import IconsPack from "../../public/images/IconsPack";
const coverImage01 = "/images/dineinpage/dinepagecover.jpg";
const DineIn = () => {
  return (
    <div>
      <ImageSlider images={[coverImage01]}>
        <div className="flex flex-col h-full mt-24  px-2 md:p-0">
          <div className="md:p-14 p-0 flex flex-col">
            <div className="flex p-6">
              <div className=" flex justify-center scale-150 items-center ">
                {IconsPack.dineIcon}
                <div className="absolute ">{IconsPack.alsafirRings}</div>
              </div>
            </div>
            <div className="uppercase text-3xl font-mark tracking-widest text-primary mt-6 ">
              Dine In
            </div>
            <div className="md:text-lg text-sm font-mark tracking-wide mt-2 md:w-1/3 text-white bg-black backdrop-blur-sm bg-opacity-10 rounded-xl p-2 ">
              <p className=" tracking-wide font-mark ">
                Discover some of Manama's finest cuisine from the city's top
                culinary masters as they craft dishes in open kitchens or stop
                in for your favorite drink at a popular pub.
              </p>
              <p className=" tracking-wide font-mark pt-4">
                Al Safir Hotel delicacy brings some of the city's top-rated food
                experiences to you. Explore the wealth of experiences from our
                collection, from afternoon tea to exclusive chef’s table dinners
                to brunches and beyond.
              </p>
            </div>
          </div>
        </div>
      </ImageSlider>
      <div className="flex flex-col w-full h-full ">
        <div className="h-96 w-96 bg-red-300">SAVOY </div>
        <div className="h-96 w-96 bg-yellow-300">KOFFIE AND KUKKIE</div>
      </div>
    </div>
  );
};

export default DineIn;
