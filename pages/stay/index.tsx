import { motion } from "framer-motion";
import ImageSlider from "../../components/ImageSlider";
import Amenities from "../../components/StayRoom/Amenities";
import RoomType from "../../components/StayRoom/RoomType";
import IconsPack from "../../public/images/IconsPack";
import { slideInRight } from "../../variants";
import en from "../../locales/stay/en";
import ar from "../../locales/stay/ar";
import useTranslation from "../../hooks/useTranslatiion";

const Stay = () => {
  const coverImage01 = "/images/staypage/twin-room-inside.jpg";
  const coverImage02 = "/images/staypage/stay-cover.jpg";
  const image1 = "/images/gallery/delux-twin.jpg";
  const image2 = "/images/staypage/twin-room-day.jpg";
  const image3 = "/images/staypage/single-room-alsafir-front-view.jpg";
  const image4 = "/images/staypage/single-room-alsafir-hotel.jpg";
  const t = useTranslation(en, ar);

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
                {IconsPack.stayIcon}
                <div className="absolute ">{IconsPack.alsafirRings}</div>
              </div>
            </div>
            <div className="uppercase text-3xl font-mark tracking-widest text-primary mt-6 ">
              {t.title}
            </div>
            <div className="md:text-lg text-sm font-mark tracking-wide mt-2 md:w-2/3 text-white bg-black backdrop-blur-sm bg-opacity-10 rounded-xl p-2 ">
              {t.subtitle}
              <p className=" tracking-wide font-mark ">{t.p1}</p>
              <p className=" tracking-wide font-mark pt-4">{t.p2}</p>
              <p className=" tracking-wide font-mark pt-4">{t.p3}</p>
            </div>
          </div>
        </div>
      </ImageSlider>
      <div>
        <RoomType
          title={t.room1}
          roomSize="29m2"
          guests="max 2 guests"
          bedSize="1500mm wide"
          images={[image3, image4]}
          desc={t.room1description}
        />

        <RoomType
          title="Deluxe Twin Rooms"
          roomSize="29m2"
          guests="max 3 guests"
          bedSize="2400mm wide"
          images={[image1, image2]}
          desc=" Treat yourself to a 5-star standard of living experience at one of
            the city's most distinguished addresses, Al Safir in Manama. Enjoy
            our elegant hotel suites and luxury amenities. Each deluxe single
            rooms have vibrant decoration and combines luxurious furnishings
            with innovative technology to radiate a contemporary elegance."
        />
      </div>
      <Amenities />
    </motion.div>
  );
};

export default Stay;
