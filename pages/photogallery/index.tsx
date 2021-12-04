import { motion } from "framer-motion";
import { ImageData } from "../../components/PhotoGallery/ImageData";
import Link from "next/link";
import { fadeInUp, stagger } from "../../variants";
const PhotoGallery = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      className="mt-20 mb-20 flex flex-col md:space-y-10 space-y-4"
    >
      <div>
        <h1 className="text-3xl lg:text-6xl p-4 uppercase font-markbook tracking-wide text-center text-primary ">
          Gallery
        </h1>
      </div>
      <motion.div
        variants={stagger}
        className="lg:grid lg:grid-cols-3 lg:gap-8 lg:px-40"
      >
        {ImageData.map((item) => {
          return (
            <motion.div
              className="flex w-auto h-auto justify-center items-center py-4 px-1 "
              key={item.id}
              variants={fadeInUp}
            >
              <Link href={`/photogallery/${encodeURIComponent(item.id)}`}>
                <a>
                  <img
                    className="h-96 object-cover rounded-xl border-b-4 border-primary"
                    src={item.image}
                  />
                </a>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default PhotoGallery;
