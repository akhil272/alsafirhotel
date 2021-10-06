import ImageSlider from "../../components/ImageSlider";
import IconsPack from "../../public/images/IconsPack";
const Stay = () => {
  const image1 = "/images/homepage/homeCoverImage01.jpg";
  const image2 = "/images/homepage/homeCover2.jpg";

  return (
    <ImageSlider images={[image1, image2]}>
      <div className="flex flex-col  h-full">
        <div className=" absolute p-4 w-screen top-24 flex flex-col  ">
          <div className="flex p-6">
            <div className=" flex justify-center scale-150 items-center ">
              {IconsPack.stayIcon}
              <div className="absolute transform transition duration-1000  hover:rotate-45 hover:scale-110  ">
                {IconsPack.alsafirRings}
              </div>
            </div>
          </div>
          <div className="uppercase text-3xl font-mark tracking-widest text-primary mt-6 ">
            Stay
          </div>
          <div className="font-light text-lg font-mark tracking-wide mt-3 ">
            Sophistic and splendid style
            <p className=" tracking-wide font-brandon text-primary mt-2">
              Al Safir Hotel offers a classic stay. With 126 stylishly appointed
              rooms and suites that cleverly combine charm with discreet modern
              amenities. It offers an elegant combination of classic luxury and
              contemporary style and creates a diverse experience with
              proficiently designed hotel rooms. All room accommodations allow
              for intuitive facility and replenished spirits to offer a soothing
              respite from the buzz and verve of the city. Every detail of your
              stay with us is intended to cherish and celebrate your personal
              desires. Every step of the way, our expertise are dedicated to
              offer a considerate, custom-made service to make it an exceptional
              stay.
            </p>
          </div>
        </div>
      </div>
    </ImageSlider>
  );
};

export default Stay;
