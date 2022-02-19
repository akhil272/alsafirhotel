import { slideInRight } from "../../variants";
import { motion } from "framer-motion";
import Image from "next/image";

const Bennigans = () => {
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
            Bennigan's
          </div>
          <div className="h-96 w-auto relative ">
            <Image
              layout="fill"
              objectFit="cover"
              src="/images/dineinpage/benngianscover.jpg"
            />
          </div>
          <div className="md:text-lg text-sm font-mark tracking-wide mt-2  text-white  p-2 ">
            <p className=" tracking-wide font-mark ">
              More than 30 years ago, Bennigan's first opened it’s doors as a
              great place to relax and have a cold one - an unassuming
              neighbourhood tavern where patrons can enjoy tasty food and
              spirited conversation.
            </p>
            <p className=" tracking-wide font-mark pt-4">
              Timings: from 9.00AM to 12:00 Midnight
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Bennigans;
