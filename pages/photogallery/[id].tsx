import { ImageData } from "../../components/PhotoGallery/ImageData";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";

const ImageViewer = () => {
  const router = useRouter();
  const params = router.query;
  const linkId = Number(params.id);
  const selectedImage = ImageData.find((item) => item.id === linkId);
  return (
    <motion.div className="w-screen h-screen ">
      <div className="flex w-full justify-center items-center h-[80vh] ">
        <Link href="/photogallery">
          <a className="h-full ">
            <AnimatePresence>
              <motion.img
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeOut", duration: 1 }}
                exit={{ opacity: 0 }}
                className="h-full object-cover overflow-hidden "
                src={selectedImage?.image}
              />
            </AnimatePresence>
          </a>
        </Link>
      </div>
      <div className="hs">
        {ImageData.map((item) => {
          return (
            <div className="h-full" key={item.id}>
              <Link href={`/photogallery/${encodeURIComponent(item.id)}`}>
                <a>
                  <motion.img
                    layoutId={String(item.id)}
                    className=" mt-2 h-2/3 object-cover rounded-xl border-b-2"
                    src={item.image}
                  />
                </a>
              </Link>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default ImageViewer;
