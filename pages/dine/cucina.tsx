import { slideInRight } from "../../variants";
import { motion } from "framer-motion";
import Image from "next/image";

const Cucina = () => {
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
            Cucina's
          </div>
          <div className="h-96 w-auto relative ">
            <Image
              layout="fill"
              objectFit="cover"
              src="/images/dineinpage/cucinacover.jpg"
            />
          </div>
          <div className="md:text-lg text-sm font-mark tracking-wide mt-2  text-white  p-2 ">
            <p className=" tracking-wide font-mark ">
              Cucina Italian is the place where Italian Food is served with
              style and passion. Cucina Italian is always vibrant and buzzing
              from sunup ‘til sundown every day of the week. The setting is
              warm, rustic, and informal, fast-paced and unpretentious.
              Buonappetito!
            </p>
            <p className=" tracking-wide font-mark pt-4">
              Timings: from 12.00 NOON to 11:00PM
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Cucina;
