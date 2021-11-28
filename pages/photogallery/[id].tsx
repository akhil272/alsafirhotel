import { ImageData } from "../../components/PhotoGallery/ImageData";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { fadeInUp, stagger } from "../../variants";

const ImageViewer = () => {
  const router = useRouter();
  const params = router.query;
  const linkId = Number(params.id);
  const selectedImage = ImageData.find((item) => item.id === linkId);
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial="initial"
      animate="animate"
      className="w-screen h-screen"
    >
      <motion.div
        whileTap={{ scale: 0.9 }}
        className="flex w-full justify-center items-center h-[80vh] mb-2 "
      >
        <Link href="/photogallery">
          <a className="h-full ">
            <motion.img
              initial={{ y: "20vh", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeOut", duration: 1, delay: 0.2 }}
              className="h-full object-cover overflow-hidden "
              src={selectedImage?.image}
            />
          </a>
        </Link>
      </motion.div>
      <motion.div variants={stagger} className="flex overflow-x-scroll   ">
        {ImageData.map((item) => {
          return (
            <motion.div
              className="flex-shrink-0 md:h-48 h-24 md:px-10 px-2 "
              key={item.id}
              variants={fadeInUp}
              whileTap={{ scale: 0.9 }}
            >
              <Link href={`/photogallery/${encodeURIComponent(item.id)}`}>
                <a className="flex h-full w-full">
                  <motion.img
                    variants={fadeInUp}
                    className="md:w-48 w-24 object-cover rounded-xl border-b-2 border-t-2"
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

export default ImageViewer;
