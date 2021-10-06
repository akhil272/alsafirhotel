import ImageSlider from "../../components/ImageSlider";
import IconsPack from "../../public/images/IconsPack";
const Stay = () => {
  const image1 = "/images/homepage/homeCoverImage01.jpg";
  const image2 = "/images/homepage/homeCover2.jpg";

  return (
    <div className="h-screen bg-red-500">
      <div className="absolute h-screen w-screen">
        <ImageSlider images={[image1, image2]} />
      </div>
      <div className="relative p-1 ">
        <div className="h-20 flex-shrink-0 flex p-6 mt-4">
          <div className="flex flex-col">
            <div className="flex ">
              <div className=" ml-4 flex justify-center scale-125 items-center ">
                {IconsPack.stayIcon}
                <div className="absolute transform transition duration-1000  hover:rotate-45 hover:scale-110  ">
                  {IconsPack.alsafirRings}
                </div>
              </div>
            </div>
            <h3 className=" mt-7 uppercase text-primary font-mark font-book tracking-widest text-3xl">
              Stay
            </h3>
          </div>
        </div>
        <div className="text-primary font-brandon p-6 mt-2">
          <h3 className=" text-2xl mt-2">Sophistic and splendid style</h3>

          <p>
            Al Safir Hotel offers a classic stay. With 126 stylishly appointed
            rooms and suites that cleverly combine charm with discreet modern
            amenities. It offers an elegant combination of classic luxury and
            contemporary style and creates a diverse experience with
            proficiently designed hotel rooms. All room accommodations allow for
            intuitive facility and replenished spirits to offer a soothing
            respite from the buzz and verve of the city. Every detail of your
            stay with us is intended to cherish and celebrate your personal
            desires. Every step of the way, our expertise are dedicated to offer
            a considerate, custom-made service to make it an exceptional stay.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Stay;
