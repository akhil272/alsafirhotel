import { motion } from "framer-motion";
import ImageSlider from "../../components/ImageSlider";
import Amenities from "../../components/StayRoom/Amenities";
import RoomType from "../../components/StayRoom/RoomType";
import IconsPack from "../../public/images/IconsPack";
import { slideInRight } from "../../variants";
import en from "../../locales/stay/en";
import ar from "../../locales/stay/ar";
import useTranslation from "../../hooks/useTranslatiion";
import Head from "next/head";

const Stay = () => {
  const coverImage01 = "/images/staypage/twin-room-inside.jpg";
  const coverImage02 = "/images/staypage/stay-cover.jpg";
  const image1 = "/images/gallery/delux-twin.jpg";
  const image2 = "/images/staypage/delux-twin-room-01.jpg";
  const image3 = "/images/staypage/single-room-alsafir-front-view.jpg";
  const image4 = "/images/staypage/single-room-alsafir-hotel.jpg";
  const imperial_image01 = "/images/staypage/Imperial-Suite-image-1.jpg";
  const imperial_image02 = "/images/staypage/Imperial-Suite-image-2.jpg";
  const two_bedroom_suite_image01 =
    "/images/staypage/two-bedroom-suite-image01.jpg";
  const two_bedroom_suite_image02 =
    "/images/staypage/two-bedroom-suite-image02.jpg";
  const executive_single_room_image01 =
    "/images/staypage/executive-single-room-image01.jpg";
  const executive_single_room_image02 =
    "/images/staypage/executive-single-room-image02.jpg";
  const executive_double_image01 =
    "/images/staypage/executive_double_image01.jpg";
  const executive_double_image02 =
    "/images/staypage/executive_double_image02.jpg";
  const t = useTranslation(en, ar);

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={slideInRight}
    >
      <Head>
        <title>Stay | Al Safir Experience</title>
        <meta
          name="description"
          content="Sophistic and splendid style Al Safir Hotel offers a classic stay. With 126 stylishly appointed rooms and suites that cleverly combine charm with discreet modern amenities."
        />
      </Head>
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
          images={[image4, image3]}
          desc={t.room1description}
        />

        <RoomType
          title="Deluxe Twin"
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
        <RoomType
          title="Executive Single"
          roomSize="30m2"
          guests="max 3 guests"
          bedSize="1500mm wide"
          images={[
            executive_single_room_image01,
            executive_single_room_image02,
          ]}
          desc="Spacious 30 square meters Apartment with Queen Size bed, ample closet space, and bathroom with daily replenish of amenities. The room is also equipped with a work desk and has amazing city view.
          Each of these Executive King Apartment vibrant decor and combines luxurious furnishings with innovative technology to radiate a contemporary elegance."
        />
        <RoomType
          title="Executive Twin"
          roomSize="30m2"
          guests="max 3 guests"
          bedSize="1300mm wide"
          images={[executive_double_image01, executive_double_image02]}
          desc="Spacious 30 square meters Apartment with Twin bed, ample closet space, and bathroom with daily replenish of amenities. The room is also equipped with a work desk and has amazing city view.
          Each of these Executive Twin Apartment vibrant decor and combines luxurious furnishings with innovative technology to radiate a contemporary elegance."
        />
        <RoomType
          title="Two-Bedroom Suite"
          roomSize="90m2"
          guests="max 6 guests"
          bedSize="1800mm wide"
          images={[two_bedroom_suite_image01, two_bedroom_suite_image02]}
          desc="Spacious 90 square meter Two Bedroom Apartment with fully equipped kitchen. 1st bedroom with King Size bed, ample closet space, working desk, Bathroom en suite with Shower. 2nd bedroom with twin beds, ample closet space, bathroom en suite with shower.
          Each of the Tower wing Two Bedroom Apartment features vibrant decor, combining Executive leather furnishings with innovative technology to radiate a contemporary elegance and a separate Dining area."
        />
        <RoomType
          title="Imperial Suite"
          roomSize="90m2"
          guests="max 6 guests"
          bedSize="1800mm wide"
          images={[imperial_image01, imperial_image02]}
          desc="Spacious 175 square meter 2 Bedroom Imperial suite. 1st bedroom with King-size bed, ample closet space, working desk, Bathroom en suite with Shower. 2nd bedroom with two twin beds, ample closet space, bathroom en suite with shower. A separate spacious changing room with additional closet space.
          The luxurious spacious open kitchen has all the modern technology to create an imperial dinner.
          The indoor swimming pool with an amazing view over the City of Manama makes this Suite a perfect place to live the life as a king."
        />
      </div>
      <Amenities />
    </motion.div>
  );
};

export default Stay;
