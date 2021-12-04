import IconsPack from "../../public/images/IconsPack";
import CardDetail from "./CardDetail";
import useTranslation from "../../hooks/useTranslatiion";
import en from "../../locales/navbar/en";
import ar from "../../locales/navbar/ar";
const Card = () => {
  const locale = useTranslation();
  const t = locale === "en" ? en : ar;
  return (
    <div>
      <CardDetail
        id="offers"
        icon={IconsPack.offerIcon}
        title={t.offers}
        image="/images/homepage/OffersCover.jpg"
      />

      <CardDetail
        id="stay"
        icon={IconsPack.stayIcon}
        title={t.stay}
        image="/images/homepage/StayCover.jpg"
      />
      <CardDetail
        id="dine"
        icon={IconsPack.dineIcon}
        title={t.dine}
        image="/images/homepage/DineInCover.jpg"
      />
      <CardDetail
        id="entertainment"
        icon={IconsPack.entertainmentIcon}
        title={t.entertainment}
        image="/images/homepage/entertainment-cover.jpg"
      />
      <CardDetail
        id="meet"
        icon={IconsPack.meetnEventIcon}
        title={t.meet}
        image="/images/homepage/meet-cover.jpg"
      />
      <CardDetail
        id="health"
        icon={IconsPack.healthnWellnessIcon}
        title={t.health}
        image="/images/homepage/health-cover.jpg"
      />
      <CardDetail
        id="photogallery"
        icon={IconsPack.photoGallery}
        title={t.photogallery}
        image="/images/homepage/homeCover2.jpg"
      />
    </div>
  );
};

export default Card;
