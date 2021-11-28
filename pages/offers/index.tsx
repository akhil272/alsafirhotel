import { useState } from "react";
import OfferCard from "../../components/Card/OfferCard";
import OfferListings from "../../components/Card/OffersData";
import { motion } from "framer-motion";
import { slideInRight, stagger } from "../../variants";

function Offers() {
  const [offers, setOffers] = useState(OfferListings);
  const [select, setSelected] = useState("all");
  const filterOffers = (tag: string) => {
    setSelected(tag);
    if (tag === "all") {
      return setOffers(OfferListings);
    }
    const updateOffers = OfferListings.filter((offer) => offer.tag === tag);
    setOffers(updateOffers);
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={slideInRight}
      className="mt-20 mb-20 flex flex-col md:space-y-10 space-y-4"
    >
      <h1 className="text-3xl lg:text-6xl p-4 uppercase font-markbook tracking-wide text-center text-primary ">
        Exciting Offers at Al Safir Hotel
      </h1>
      <p className="text-lg font-mark text-center">
        Enjoy your travel and treat yourself with one of our enticing packages
        below at Al Safir Hotel.
      </p>
      <div>
        <div className="flex justify-center text-2xl gap-10 font-markbook">
          <button
            className={`uppercase ${select === "all" ? "text-primary" : ""}`}
            onClick={() => filterOffers("all")}
          >
            All
          </button>
          <button
            className={`uppercase ${select === "stay" ? "text-primary" : ""}`}
            onClick={() => filterOffers("stay")}
          >
            Stay
          </button>
          <button
            className={`uppercase ${select === "dine" ? "text-primary" : ""}`}
            onClick={() => filterOffers("dine")}
          >
            Dine
          </button>
        </div>
        <motion.div
          variants={stagger}
          className="lg:grid lg:grid-cols-3 lg:gap-8 lg:px-40"
        >
          {offers.map((offer) => (
            <OfferCard
              key={offer.id}
              title={offer.title}
              description={offer.description}
              src={offer.coverImage}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Offers;
