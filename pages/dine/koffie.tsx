import { slideInRight } from "../../variants";
import { motion } from "framer-motion";
import Image from "next/image";

const Koffie = () => {
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
            KOFFIE AND KUKKIE
          </div>
          <div className="h-96 w-auto relative ">
            <Image
              layout="fill"
              objectFit="cover"
              src="/images/dineinpage/koffiecover.jpg"
            />
          </div>
          <div className="md:text-lg text-sm font-mark tracking-wide mt-2  text-white  p-2 ">
            <p className=" tracking-wide font-mark ">
              We are proud to offer brilliant range of fine high tea in London
              style or simply a freshly ground coffee and croissant in comfort –
              we offer ambience, atmosphere and expertly composed menus to
              delight every appetite.
            </p>
            <p className=" tracking-wide font-mark pt-4">
              Koffie and Kukkie is a trendy coffee kiosk outlets located at the
              Alsafir hotel lobby, operating from 6.30am until 12 midnight.
            </p>
            <p className=" tracking-wide font-mark pt-4">
              We serve the perfect cup of coffee whether it is a hot cup of
              espresso or an ice blend coffee. The barista handcrafts each cup
              of your favourite beverage and gives you personalized service. The
              menu also has a variety of cookies to accompany your favourite
              beverage.
            </p>
            <p className=" tracking-wide font-mark pt-4">
              The hungry can chose from an assortment of sandwiches. The chef
              masters in the finest art of baking and Patisserie and his fresh
              creations are on display in the menu.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Koffie;
