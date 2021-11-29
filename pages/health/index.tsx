import { motion } from "framer-motion";
import IconsPack from "../../public/images/IconsPack";
import { slideInRight } from "../../variants";
import Image from "next/image";

const Health = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={slideInRight}
    >
      <div className="flex flex-col h-full mt-24  px-2 md:p-0">
        <div className="md:p-14 p-0 flex flex-col">
          <div className="flex p-6">
            <div className=" flex justify-center scale-150 items-center ">
              {IconsPack.healthnWellnessIcon}
              <div className="absolute ">{IconsPack.alsafirRings}</div>
            </div>
          </div>
          <div className="uppercase text-3xl font-mark tracking-widest text-primary mt-6 ">
            Health And Wellness
          </div>
          <div className="h-96 w-auto relative ">
            <Image
              layout="fill"
              objectFit="cover"
              src="/images/homepage/health-cover.jpg"
            />
          </div>
          <div className="md:text-lg text-sm font-mark tracking-wide mt-2  text-white  p-2 ">
            Have a relaxing experience at Al Safir Hotel and Tower.
            <p className=" tracking-wide font-mark ">
              Enjoy at one of the most relaxing massage and spa of Bahrain where
              Ann and her team offer professional treatment in a tranquil
              atmosphere.
            </p>
            <p className=" tracking-wide font-mark pt-4">
              We welcome you to come and calm your mind away from all the buss
              in your daily life to the soothing music and the perfect treatment
              provided by our therapists.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Health;
