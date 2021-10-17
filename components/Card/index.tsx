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
        image="/images/homepage/StayCover.jpg"
      />
      <CardDetail
        id="dine"
        icon={IconsPack.dineIcon}
        title="DINE IN"
        image="/images/homepage/DineInCover.jpg"
      />
      <CardDetail
        id="entertainment"
        icon={IconsPack.entertainmentIcon}
        title="Entertainment"
        image="/images/homepage/NightClubCover.jpg"
      />
      <CardDetail
        id="meet"
        icon={IconsPack.meetnEventIcon}
        title="Meet & Event"
        image="/images/homepage/meetcover.jpg"
      />
      <CardDetail
        id="health"
        icon={IconsPack.healthnWellnessIcon}
        title="Health & Wellness"
        image="/images/homepage/healthcover.jpg"
      />
      <CardDetail
        id="photogallery"
        icon={IconsPack.photoGallery}
        title="Photo Gallery"
        image="/images/homepage/homeCover2.jpg"
      />
    </div>
  );
};

export default Card;
