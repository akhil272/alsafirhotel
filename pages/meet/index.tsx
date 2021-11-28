import { motion } from "framer-motion";
import ImageSlider from "../../components/ImageSlider";
import IconsPack from "../../public/images/IconsPack";
import { slideInRight } from "../../variants";

const Meet = () => {
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
              Meet & Event
            </div>
            <div className="md:text-lg text-sm font-mark tracking-wide mt-2 md:w-1/3 text-white bg-black backdrop-blur-sm bg-opacity-10 rounded-xl p-2 ">
              Personalized, memorable occasions.
              <p className=" tracking-wide font-mark ">
                Anniversaries, birthdays, engagements, weddings; every
                auspicious occasion from the small and intimate to the large and
                corporate. It has to be Al Safir Hotel.
              </p>
              <p className=" tracking-wide font-mark pt-4">
                Host any event at Al Safir Hotel. Whatever your special occasion
                is, our crew is keen to the thoughtful details that will bring
                your event to life.
              </p>
              <p className=" tracking-wide font-mark pt-4">
                From shows to award ceremonies and high profile meetings, we
                have the experience staff in managing corporate events of world
                class standards. Our business centre offers a four star business
                hotel with spacious and refurbished guest rooms offering n-room
                amnesties like internet access, coffee tea maker, water bottles,
                iron and iron boards, gym, indoor swimming pool, restaurants,
                bars and night clubs for every taste are just some of the
                additional amenities to make your stay exceptional. Adding on,
                you have 24 hours business centre, business service café, dry
                cleaning facilities, laundry services, free parking, room
                food,wifi,gym,fitness room, indoor pool luggage storage,
                on-smoking rooms non-smoking floors, on site-car parking , bell
                service restaurants, room service, 24 hours room service, valet
                parking, wake up calls, wheelchair access, wheelchair accessible
                Wi-Fi access.
              </p>
            </div>
          </div>
        </div>
      </ImageSlider>
    </motion.div>
  );
};

export default Meet;
