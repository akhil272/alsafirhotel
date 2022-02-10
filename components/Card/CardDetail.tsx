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
      className=" lg:h-[375px] h-[220px] flex-shrink-0 bg-center bg-cover flex group  p-6 items-center hover:ml-10  opacity-90 hover:opacity-100 hover:shadow-2xl transition-all duration-1000 ease-in-out delay-200"
      style={{ backgroundImage: `url(${props.image})` }}
    >
      <div
        id="main-container"
        className="flex flex-col items-start justify-start "
      >
        <div
          id="alsafir-icon-container"
          className="flex flex-row justify-start items-center "
        >
          <div
            id="alsafir-icon"
            className=" ml-3 flex justify-center items-center"
          >
            {props.icon}
            <div
              id="alsafir-rings"
              className="absolute h-50 w-50 transform transition-all duration-1000 group-hover:rotate-90 "
            >
              {IconsPack.alsafirRings}
            </div>
          </div>
          <div
            id="alsafir-arrow"
            className="ml-6 transform transition-all duration-1000 group-hover:scale-110 group-hover:ml-8 rtl:rotate-180 rtl:hover-rotate-90"
          >
            {IconsPack.arrowIcon}
          </div>
        </div>
        <div id="card title" className="mt-2 ">
          <h3 className="text-primary uppercase font-markbook tracking-widest text-2xl lg:text-3xl">
            {props.title}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
// hover:ml-10 hover:shadow-2xl transition-all duration-1000 ease-in-out delay-200
