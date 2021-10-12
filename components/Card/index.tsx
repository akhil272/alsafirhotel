import IconsPack from "../../public/images/IconsPack";
import CardDetail from "./CardDetail";

const Card = () => {
  return (
    <div>
      <CardDetail
        id="offers"
        icon={IconsPack.offerIcon}
        title="OFFERS"
        image="/images/homepage/OffersCover.jpg"
      />

      <CardDetail
        id="stay"
        icon={IconsPack.stayIcon}
        title="STAY"
        image="/images/homepage/DineInCover.jpg"
      />
      <CardDetail
        id="dine"
        icon={IconsPack.dineIcon}
        title="DINE IN"
        image="/images/homepage/StayCover.jpg"
      />
      <CardDetail
        id="entertainment"
        icon={IconsPack.entertainmentIcon}
        title="HEALTH & WELLNESS"
        image="/images/homepage/NightClubCover.jpg"
      />
    </div>
  );
};

export default Card;
