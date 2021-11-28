import { useState } from "react";
import OfferListings from "../../components/Card/OffersData";
import DineInCard from "../../components/DineIn/DineInCard";
import { motion } from "framer-motion";
const DineIn = () => {
  const [offers, setOffers] = useState(OfferListings);
  const glowVariants = {
    initial: {
      opacity: 0,
    },
    hover: {
      opacity: 1,
    },
  };
  return (
    <div className="lg:grid mt-30 lg:grid-cols-3 lg:gap-8 lg:px-40">
      {/* {offers.map((offer) => (
        <DineInCard
          key={offer.id}
          title={offer.title}
          description={offer.description}
          src={offer.coverImage}
        />
      ))} */}
      <motion.div initial="initial" whileHover="hover">
        <motion.div variants={glowVariants}>
          {offers.map((offer) => (
            <DineInCard
              key={offer.id}
              title={offer.title}
              description={offer.description}
              src={offer.coverImage}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DineIn;
