import IconsPack from "../../public/images/IconsPack";
import { useRouter } from "next/router";

type MenuData = {
  menuTitle: string;
  menuDescription: string;
  iconName: {};
  id: string;
};
const MobileMenuItem = (props: MenuData) => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/" + props.id);
  };

  return (
    <div
      onClick={handleClick}
      className="flex p-3 ml-4 group transform transition-all duration-1000 hover:scale-95 "
    >
      <div className="flex justify-center items-center  ">
        <div className=" flex absolute items-center justify-center transition-all duration-1000 group-hover:rotate-90 ">
          {IconsPack.alsafirRings}
        </div>
        <div className="flex w-10 h-10 items-center justify-center">
          {props.iconName}
        </div>
      </div>
      <div className="flex flex-col items-start pl-6  ">
        <h5 className="text-2xl capitalize text-primary font-markbook tracking-wider">
          {props.menuTitle}
        </h5>
        <p className="text-sm text-white font-mark">{props.menuDescription}</p>
      </div>
    </div>
  );
};

export default MobileMenuItem;
