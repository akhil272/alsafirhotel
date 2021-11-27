import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { useState } from "react";
import { ImageData } from "../../components/PhotoGallery/ImageData";
import ImageViewer from "./[id]";
import Link from "next/link";

const PhotoGallery = () => {
  return (
    <motion.div className="mt-20 mb-20 flex flex-col md:space-y-10 space-y-4">
      <div>
        <motion.h1 className="text-3xl lg:text-6xl p-4 uppercase font-markbook tracking-wide text-center text-primary ">
          Gallery
        </motion.h1>
      </div>
      <div className="lg:grid lg:grid-cols-3 lg:gap-8 lg:px-40">
        {ImageData.map((item) => {
          return (
            <div
              className="flex w-auto h-auto justify-center items-center py-4 px-1 "
              key={item.id}
            >
              <Link href={`/photogallery/${encodeURIComponent(item.id)}`}>
                <a>
                  <motion.img
                    className="h-96 object-cover rounded-xl border-b-4 border-primary"
                    layoutId={String(item.id)}
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
