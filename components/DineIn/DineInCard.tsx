import { motion } from "framer-motion";
import Image from "next/image";
interface DineInCardData {
  title: string;
  description: string;
  src: string;
  tag?: string;
}

const DineInCard = ({ title, description, src }: DineInCardData) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeOut", duration: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-2 scale-95 hover:scale-100 transition-all duration-1000 border-b-2 p-2 border-primary "
    >
      <div className="h-96 w-auto relative">
        <Image
          className="rounded"
          layout="fill"
          objectFit="cover"
          src={`/images/offerpage/${src}`}
        />
        <div className="absolute bottom-5 w-full flex justify-center items-center space-x-4 ">
          <button className="uppercase font-mark text-black text-center py-2 px-4 rounded bg-white hover:bg-gray-300">
            Learn More
          </button>
          <button className="uppercase font-mark text-white text-center py-2 px-4 rounded bg-primary hover:bg-secondary">
            Book Now
          </button>
        </div>
      </div>
      <h3 className="font-markbook text-lg uppercase text-primary">{title}</h3>
      <p className="text-base font-mark">{description}</p>
    </motion.div>
  );
};

export default DineInCard;
