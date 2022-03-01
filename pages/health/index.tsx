import { motion } from "framer-motion";
import IconsPack from "../../public/images/IconsPack";
import { slideInRight } from "../../variants";
import Image from "next/image";
import ListingCard from "../../components/Card/ListingCard";

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
        <motion.div className="lg:grid lg:grid-cols-3 lg:gap-8 mt-5 lg:px-40 mb-5">
          <ListingCard
            title="Ann's Spa"
            learnMoreUrl="/meet/alseef"
            description="Relax at Al Safir Hotel & Tower. Welcome to one of Bahrain’s most relaxing massage and Spa"
            src="health/annscover.jpg"
          />
          <ListingCard
            title="Indoor Pool"
            learnMoreUrl="/meet/alzallaq"
            description="Our Health Club has got an heated indoor swimming pool and adjacent to the Al Safir Hotel."
            src="health/indoorpool.jpg"
          />
          <ListingCard
            title="Health Club"
            learnMoreUrl="/meet/almuharraq"
            description="Al Safir Hotel & Tower is luxury personified. The Sports Recreation Centre spans two floors and offers an indoor swimming pool and fully-equipped fitness tower with hi-tech machines, Jacuzzi, steam room, dry and wet sauna, personal sports advisor & lots more."
            src="health/healthclub.jpg"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Health;
