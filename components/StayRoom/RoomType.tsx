import ImageSlider from "../../components/ImageSlider";

import {
  bedIcon,
  tapeIcon,
  paxIcon,
  roomFigure,
} from "../../public/images/RoomIconsPack";

interface RoomTypeData {
  title: string;
  desc: string;
  roomSize: string;
  guests: string;
  bedSize: string;
  images: string[];
}

const RoomType = ({
  title,
  desc,
  roomSize,
  guests,
  bedSize,
  images,
}: RoomTypeData) => {
  return (
    <div>
      <ImageSlider autoPlayTime={10000} images={images}>
        <div className="mt-20 md:px-14 px-4">
          <h2 className="uppercase text-3xl font-mark tracking-widest text-primary  ">
            {title}
          </h2>
          <div className="mt-4 font-mark text-primary">
            <div className="flex items-center py-1 space-x-4">
              <p className="h-12 w-12">{tapeIcon}</p>
              <p>{roomSize}</p>
            </div>
            <div className="flex items-center py-1 space-x-4">
              <p className="h-12 w-12">{paxIcon}</p>
              <p>{guests}</p>
            </div>
            <div className="flex items-center py-1 space-x-4">
              <p className="h-12 w-12">{bedIcon}</p>
              <p>{bedSize}</p>
            </div>
            <div className="mt-4">{roomFigure}</div>
          </div>
          <div className=" text-sm md:text-lg font-mark tracking-wide pt-2 md:w-1/3 w-full text-secondary ">
            <p className=" tracking-wide font-mark ">{desc}</p>
          </div>
        </div>
      </ImageSlider>
    </div>
  );
};

export default RoomType;
