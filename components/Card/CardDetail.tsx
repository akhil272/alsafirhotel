import { useRouter } from "next/router";
import IconsPack from "../../public/images/IconsPack";

type CardData = {
  title: string;
  image: string;
  icon: any;
  id: string;
};

const CardDetail = (props: CardData) => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/" + props.id);
  };
  return (
    <div
      onClick={handleClick}
      className="w-full lg:h-[365px] h-[200px] flex-shrink-0 bg-center bg-cover flex p-10 items-center"
      style={{ backgroundImage: `url(${props.image})` }}
    >
      <div className="flex flex-col">
        <div className="flex flex-row justify-start items-center">
          <div className=" ml-3 flex justify-center items-center ">
            {props.icon}
            <div className="absolute h-50 w-50 transform transition duration-1000  hover:rotate-45 hover:scale-110  ">
              {IconsPack.alsafirRings}
            </div>
          </div>
          <div className="ml-6">{IconsPack.arrowIcon}</div>
        </div>
        <h3 className="mt-2 text-primary font-mark font-book tracking-widest text-3xl">
          {props.title}
        </h3>
      </div>
    </div>
  );
};

export default CardDetail;
