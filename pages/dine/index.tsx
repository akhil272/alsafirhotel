import ImageSlider from "../../components/ImageSlider";
import { motion } from "framer-motion";
import IconsPack from "../../public/images/IconsPack";
import { slideInRight } from "../../variants";
import ListingCard from "../../components/Card/ListingCard";

const coverImage01 = "/images/dineinpage/dinepagecover.jpg";

const DineIn = () => {
  return (
    <>
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={slideInRight}
      >
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
                  Al Safir Hotel delicacy brings some of the city's top-rated
                  food experiences to you. Explore the wealth of experiences
                  from our collection, from afternoon tea to exclusive chef’s
                  table dinners to brunches and beyond.
                </p>
              </div>
            </div>
          </div>
        </ImageSlider>
      </motion.div>
      <motion.div className="lg:grid lg:grid-cols-2 lg:gap-8 mt-5 lg:px-40 mb-5">
        <ListingCard
          title="SAVOY"
          learnMoreUrl="/dine/savoy"
          description="Get ready for the very best of Mediterranean Indian, Arabic and Asian cuisines and home style international buffet breakfast."
          src="dineinpage/savoycover.jpg"
          enableLearnMoreButton={true}
        />
        <ListingCard
          title="KOFFIE AND KUKKIE"
          learnMoreUrl="/dine/koffie"
          description="Koffie and Kukkie is a trendy coffee kiosk outlets located at the Alsafir hotel lobby, operating from 6.30am until 12 midnight."
          src="dineinpage/koffiecover.jpg"
          enableLearnMoreButton={true}
        />
        <ListingCard
          title="Cucina"
          learnMoreUrl="/dine/cucina"
          description="Cucina Italian is the place where Italian Food is served with style and passion."
          src="dineinpage/cucinacover.jpg"
          enableLearnMoreButton={true}
        />
        <ListingCard
          title="Benngian's"
          learnMoreUrl="/dine/bennigans"
          description="More than 30 years ago, Bennigan's first opened it’s doors as a great place to relax "
          src="dineinpage/benngianscover.jpg"
          enableLearnMoreButton={true}
        />
      </motion.div>
    </>
  );
};

export default DineIn;
