import IconsPack from "../../public/images/IconsPack";
import MobileMenuItem from "./MobileMenuItem";
import en from "../../locales/navbar/en";
import ar from "../../locales/navbar/ar";
import useTranslation from "../../hooks/useTranslatiion";

const MobileMenu = () => {
  const t = useTranslation(en, ar);

  return (
    <div className="lg:grid lg:grid-cols-2 lg:absolute lg:bottom-40 lg:p-10 pt-20">
      <MobileMenuItem
        id="offers"
        iconName={IconsPack.offerIcon}
        menuTitle={t.offers}
        menuDescription="Get exclusive offers"
      />
      <MobileMenuItem
        id="stay"
        iconName={IconsPack.stayIcon}
        menuTitle={t.stay}
        menuDescription="Ease and relax"
      />
      <MobileMenuItem
        id="dine"
        iconName={IconsPack.dineIcon}
        menuTitle={t.dine}
        menuDescription="Dive into diversity"
      />
      <MobileMenuItem
        id="entertainment"
        iconName={IconsPack.entertainmentIcon}
        menuTitle={t.entertainment}
        menuDescription="Music never stops"
      />
      <MobileMenuItem
        id="meet"
        iconName={IconsPack.meetnEventIcon}
        menuTitle={t.meet}
        menuDescription="Conference"
      />
      <MobileMenuItem
        id="health"
        iconName={IconsPack.healthnWellnessIcon}
        menuTitle={t.health}
        menuDescription="Revive"
      />
      <MobileMenuItem
        id="photogallery"
        iconName={IconsPack.photoGallery}
        menuTitle={t.photogallery}
        menuDescription="Experience"
      />
      <MobileMenuItem
        id="blog"
        iconName={IconsPack.blogIcon}
        menuTitle={t.blog}
        menuDescription="Reading never stops"
      />
      <MobileMenuItem
        id="brandstory"
        iconName={IconsPack.brandStoryIcon}
        menuTitle={t.brandstory}
        menuDescription="Its story time"
      />
    </div>
  );
};

export default MobileMenu;
