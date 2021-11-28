import { motion } from "framer-motion";
import ImageSlider from "../../components/ImageSlider";
import IconsPack from "../../public/images/IconsPack";
import { slideInRight } from "../../variants";
import DineInCard from "../../components/DineIn/DineInCard";

const Entertainment = () => {
  const coverImage01 = "/images/staypage/twin-room-inside.jpg";
  const coverImage02 = "/images/staypage/stay-cover.jpg";

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={slideInRight}
    >
      <ImageSlider autoPlayTime={10000} images={[coverImage02, coverImage01]}>
        <div className="flex flex-col h-full mt-24  px-2 md:p-0">
          <div className="md:p-14 p-0 flex flex-col">
            <div className="flex p-6">
              <div className=" flex justify-center scale-150 items-center ">
                {IconsPack.meetnEventIcon}
                <div className="absolute ">{IconsPack.alsafirRings}</div>
              </div>
            </div>
            <div className="uppercase text-3xl font-mark tracking-widest text-primary mt-6 ">
              Entertainment
            </div>
            <div className="md:text-lg text-sm font-mark tracking-wide mt-2 md:w-1/3 text-white bg-black backdrop-blur-sm bg-opacity-10 rounded-xl p-2 ">
              Alsafir hotel offers an array of activities and adventures.
            </div>
          </div>
        </div>
      </ImageSlider>
      <motion.div className="lg:grid lg:grid-cols-3 lg:gap-8 mt-5 lg:px-40 mb-5">
        <DineInCard
          title="APPOLO CLUB LOUNGE"
          url="savoy"
          description="Get ready for the very best of Mediterranean Indian, Arabic and Asian cuisines and home style international buffet breakfast."
          src="savoy-offer-cover.jpg"
        />
        <DineInCard
          title="RICH ARABIC CLUB"
          url="koffie"
          description="Koffie and Kukkie is a trendy coffee kiosk outlets located at the Alsafir hotel lobby, operating from 6.30am until 12 midnight."
          src="dine-offer-cover.jpg"
        />
        <DineInCard
          title="THE HAPPY GOAT"
          url="koffie"
          description="Koffie and Kukkie is a trendy coffee kiosk outlets located at the Alsafir hotel lobby, operating from 6.30am until 12 midnight."
          src="dine-offer-cover.jpg"
        />
      </motion.div>
    </motion.div>
  );
};

export default Entertainment;
