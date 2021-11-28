import { useState } from "react";
import OfferListings from "../../components/Card/OffersData";
import DineInCard from "../../components/DineIn/DineInCard";

const DineIn = () => {
  const [offers, setOffers] = useState(OfferListings);

  return (
    <div className="lg:grid lg:grid-cols-3 lg:gap-8 lg:px-40">
      {offers.map((offer) => (
        <DineInCard
          key={offer.id}
          title={offer.title}
          description={offer.description}
          src={offer.coverImage}
        />
      ))}
    </div>
  );
};

export default DineIn;
