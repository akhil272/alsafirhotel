import IconsPack from "../../public/images/IconsPack";
import { useRouter } from "next/router";

type MenuData = {
  menuTitle: string;
  menuDescription: string;
  iconName: string;
  id: string;
};
const MobileMenuItem = (props: MenuData) => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/" + props.id);
  };
  const icon = IconsPack.offerIcon;
  return (
    <div onClick={handleClick} className="flex p-3 ml-4  ">
      <div className="flex  justify-center items-center  ">
        <div className=" flex absolute items-center justify-center ">
          {IconsPack.alsafirRings}{" "}
        </div>
        {icon}
      </div>
      <div className="flex flex-col  ml-8  ">
        <h5 className="text-2xl">{props.menuTitle}</h5>
        <p className="text-sm">{props.menuDescription}</p>
      </div>
    </div>
  );
};

export default MobileMenuItem;
