import { slideInRight } from "../../variants";
import { motion } from "framer-motion";
import Image from "next/image";

const Dune = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={slideInRight}
    >
      <div className="flex flex-col h-full mt-24  px-2 md:px-40">
        <div className="md:p-14 p-0 flex flex-col">
          <div className="uppercase text-3xl font-mark tracking-widest text-primary mt-6 ">
            Dune
          </div>
          <div className="h-96 w-auto relative ">
            <Image
              layout="fill"
              objectFit="cover"
              src="/images/dineinpage/dunecover.jpg"
            />
          </div>
          <div className="md:text-lg text-sm font-mark tracking-wide mt-2  text-white  p-2 ">
            <p className=" tracking-wide font-mark ">
              Get ready for the very best of Mediterranean Indian, Arabic and
              Asian cuisines and home style international buffet breakfast.
            </p>
            <p className=" tracking-wide font-mark pt-4">
              The all-day dining is located on the ground floor of the hotel,
              serving a la carte menu including fresh fish, char-grills and a
              wide range of your favourite Middle Eastern foods.
            </p>
            <p className=" tracking-wide font-mark pt-4">
              The restaurant has been designed to give you a warm and
              contemporary feel, carefully designed to enable spaces yet
              intimacy. We make sure our guests enjoy an array of traditional
              meats, vegetarian meals, fresh salads and tasty desserts. All our
              ingredients are sourced locally, cooked and prepared fresh daily
            </p>
            <p className=" tracking-wide font-mark pt-4">
              Make sure you try our Signature Dune burger or traditional club
              sandwiches as recommended by our head chef.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Dune;
