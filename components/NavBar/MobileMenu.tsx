import IconsPack from "../../public/images/IconsPack";
import MobileMenuItem from "./MobileMenuItem";

const MobileMenu = () => {
  return (
    <div className="lg:grid lg:grid-cols-2 lg:absolute lg:bottom-40 lg:p-10 pt-20">
      <MobileMenuItem
        id="offers"
        iconName={IconsPack.offerIcon}
        menuTitle="Offers"
        menuDescription="Get exclusive offers"
      />
      <MobileMenuItem
        id="stay"
        iconName={IconsPack.stayIcon}
        menuTitle="Stay"
        menuDescription="Ease and relax"
      />
      <MobileMenuItem
        id="dine"
        iconName={IconsPack.dineIcon}
        menuTitle="Dine"
        menuDescription="Dive into diversity"
      />
      <MobileMenuItem
        id="entertainment"
        iconName={IconsPack.entertainmentIcon}
        menuTitle="entertainment"
        menuDescription="Music never stops"
      />
      <MobileMenuItem
        id="meet"
        iconName={IconsPack.meetnEventIcon}
        menuTitle="Meet & Event"
        menuDescription="Conference"
      />
      <MobileMenuItem
        id="health"
        iconName={IconsPack.healthnWellnessIcon}
        menuTitle="Health & wellness"
        menuDescription="Revive"
      />
      <MobileMenuItem
        id="photoGallery"
        iconName={IconsPack.photoGallery}
        menuTitle="Photo Gallery"
        menuDescription="Experience"
      />
      <MobileMenuItem
        id="blog"
        iconName={IconsPack.blogIcon}
        menuTitle="Blog"
        menuDescription="Reading never stops"
      />
      <MobileMenuItem
        id="brandstory"
        iconName={IconsPack.brandStoryIcon}
        menuTitle="Brand Story"
        menuDescription="Its story time"
      />
    </div>
  );
};

export default MobileMenu;
