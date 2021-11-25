import { ImageData } from "../../components/PhotoGallery/ImageData";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";

const ImageViewer = () => {
  const router = useRouter();
  const params = router.query;
  const linkId = Number(params.id);
  const selectedImage = ImageData.find((item) => item.id === linkId);
  return (
    <motion.div className="w-[80vw] h-screen flex justify-center items-center ">
      <Link href="/photogallery">
        <a>
          <motion.img layoutId="image" src={selectedImage?.image} />
        </a>
      </Link>
    </motion.div>
  );
};

export default ImageViewer;
