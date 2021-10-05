import Link from "next/link";
import { useRouter } from "next/router";

type CardData = {
  title: string;
  image: string;
  icon: any;
  id: string;
};
const bgIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="51"
    height="51"
    fill="none"
    viewBox="0 0 51 51"
  >
    <path
      stroke="#9E8E71"
      strokeLinecap="round"
      strokeLinejoin="bevel"
      strokeMiterlimit="10"
      strokeWidth="0.725"
      d="M35.7 44.4C32.6 46 29.1 47 25.4 47 13.5 47 3.9 37.3 3.9 25.4c0-11.9 9.6-21.5 21.5-21.5S47 13.5 47 25.4c0 4.5-1.4 8.7-3.7 12.1-.5.8-1.1 1.5-1.7 2.2"
    ></path>
    <path
      stroke="#9E8E71"
      strokeLinecap="round"
      strokeLinejoin="bevel"
      strokeMiterlimit="10"
      strokeWidth="0.84"
      d="M13.5 3.4c3.5-1.9 7.6-3 11.9-3 13.8 0 25 11.2 25 25s-11.2 25-25 25-25-11.2-25-25c0-5.2 1.6-10 4.3-14 .6-.9 1.3-1.8 2-2.6"
    ></path>
  </svg>
);

const arrowIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="51"
    fill="none"
    viewBox="0 0 30 51"
  >
    <g clipPath="url(#clip0)">
      <path
        stroke="#CAB493"
        strokeMiterlimit="10"
        d="M.429.491l28.575 24.773L.429 50.035"
      ></path>
    </g>
    <defs>
      <clipPath id="clip0">
        <path fill="#fff" d="M0 0H30V50.526H0z"></path>
      </clipPath>
    </defs>
  </svg>
);

const CardDetail = (props: CardData) => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/" + props.id);
  };
  return (
    <div
      onClick={handleClick}
      className="bg-red-300 w-full lg:h-[365px] h-[200px] flex-shrink-0 bg-center bg-cover flex p-10 items-center"
      style={{ backgroundImage: `url(${props.image})` }}
    >
      <div className="flex flex-col">
        <div className="flex flex-row justify-start items-center">
          <div className=" ml-3 flex justify-center items-center ">
            {props.icon}
            <div className="absolute h-50 w-50 transform transition duration-1000  hover:rotate-45 hover:scale-110  ">
              {bgIcon}
            </div>
          </div>
          <div className="ml-6">{arrowIcon}</div>
        </div>
        <h3 className="mt-2 text-primary font-mark font-book tracking-widest text-3xl">
          {props.title}
        </h3>
      </div>
    </div>
  );
};

export default CardDetail;
