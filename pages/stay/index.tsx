import { motion } from "framer-motion";
import ImageSlider from "../../components/ImageSlider";
import Amenities from "../../components/StayRoom/Amenities";
import RoomType from "../../components/StayRoom/RoomType";
import IconsPack from "../../public/images/IconsPack";

const Stay = () => {
  const coverImage01 = "/images/staypage/twin-room-inside.jpg";
  const coverImage02 = "/images/staypage/stay-cover.jpg";
  const image1 = "/images/offerpage/one-free-night-cover.jpg";
  const image2 = "/images/staypage/twin-room-day.jpg";
  const image3 = "/images/staypage/single-room-alsafir-front-view.jpg";
  const image4 = "/images/staypage/single-room-alsafir-hotel.jpg";

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ ease: "easeOut", duration: 1 }}
      exit={{ opacity: 0 }}
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
              Stay
            </div>
            <div className="md:text-lg text-sm font-mark tracking-wide mt-2 md:w-1/3 text-white bg-black backdrop-blur-sm bg-opacity-10 rounded-xl p-2 ">
              Sophistic and splendid style
              <p className=" tracking-wide font-mark ">
                Al Safir Hotel offers a classic stay. With 126 stylishly
                appointed rooms and suites that cleverly combine charm with
                discreet modern amenities.
              </p>
              <p className=" tracking-wide font-mark pt-4">
                It offers an elegant combination of classic luxury and
                contemporary style and creates a diverse experience with
                proficiently designed hotel rooms. All room accommodations allow
                for intuitive facility and replenished spirits to offer a
                soothing respite from the buzz and verve of the city.
              </p>
              <p className=" tracking-wide font-mark pt-4">
                Every detail of your stay with us is intended to cherish and
                celebrate your personal desires. Every step of the way, our
                expertise are dedicated to offer a considerate, custom-made
                service to make it an exceptional stay.
              </p>
            </div>
          </div>
        </div>
      </ImageSlider>
      <div>
        <RoomType
          title="Deluxe Single Rooms"
          roomSize="29m2"
          guests="max 2 guests"
          bedSize="1500mm wide"
          images={[image3, image4]}
          desc="  Step inside the classy spacious 29sqm, guest bedrooms and
              experience extravagance at its best. All rooms have king-sized
              bed, ample closet space and a bathroom with daily replenish of
              amenities. The room is also equipped with a work desk and has
              startling city view."
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
