import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { useState } from "react";
import { ImageData } from "../../components/PhotoGallery/ImageData";
import ImageViewer from "./[id]";
import Link from "next/link";

const PhotoGallery = () => {
  return (
    <motion.div
      layout
      className="mt-20 mb-20 flex flex-col md:space-y-10 space-y-4"
    >
      <div>
        <motion.h1 className="text-3xl lg:text-6xl p-4 uppercase font-markbook tracking-wide text-center text-primary ">
          Gallery
        </motion.h1>
      </div>
      <div className="grid grid-cols-2 px-4 md:px-20">
        {ImageData.map((item) => {
          return (
            <div className="grid rounded-xl" key={item.id}>
              <Link href={`/photogallery/${encodeURIComponent(item.id)}`}>
                <a>
                  <motion.img
                    layoutId="image"
                    className="rounded-xl "
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

export default PhotoGallery;
