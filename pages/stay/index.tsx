import ImageSlider from "../../components/ImageSlider";
import IconsPack from "../../public/images/IconsPack";

const Stay = () => {
  const image1 = "/images/homepage/homeCoverImage01.jpg";
  const image2 = "/images/staypage/twin-room-inside.jpg";

  return (
    <div>
      <ImageSlider autoPlayTime={10000} images={[image1, image2]}>
        <div className="flex flex-col h-full">
          <div className=" absolute p-4 w-screen flex flex-col  ">
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
            <div className="text-lg font-mark tracking-wide mt-3 w-1/3 text-secondary ">
              Sophistic and splendid style
              <p className=" tracking-wide font-brandon">
                Al Safir Hotel offers a classic stay. With 126 stylishly
                appointed rooms and suites that cleverly combine charm with
                discreet modern amenities.
              </p>
              <p className=" tracking-wide font-brandon pt-4">
                It offers an elegant combination of classic luxury and
                contemporary style and creates a diverse experience with
                proficiently designed hotel rooms. All room accommodations allow
                for intuitive facility and replenished spirits to offer a
                soothing respite from the buzz and verve of the city.
              </p>
              <p className=" tracking-wide font-brandon pt-4">
                Every detail of your stay with us is intended to cherish and
                celebrate your personal desires. Every step of the way, our
                expertise are dedicated to offer a considerate, custom-made
                service to make it an exceptional stay.
              </p>
            </div>
          </div>
        </div>
      </ImageSlider>
      <div>
        <h2 className="uppercase text-3xl font-mark tracking-widest text-primary mt-6 ">
          Deluxe King Rooms
        </h2>
        <div className="text-lg font-mark tracking-wide mt-3 w-1/3 text-secondary ">
          <p className=" tracking-wide font-brandon pt-4">
            Step inside the classy spacious 29sqm, guest bedrooms and experience
            extravagance at its best. All rooms have king-sized bed, ample
            closet space and a bathroom with daily replenish of amenities. The
            room is also equipped with a work desk and has startling city view.
          </p>
        </div>
      </div>
      <div>
        <h2 className="uppercase text-3xl font-mark tracking-widest text-primary mt-6 ">
          Deluxe Single Rooms
        </h2>
        <div className="text-lg font-mark tracking-wide mt-3 w-1/3 text-secondary ">
          <p className=" tracking-wide font-brandon pt-4">
            Treat yourself to a 5-star standard of living experience at one of
            the city's most distinguished addresses, Al Safir in Manama. Enjoy
            our elegant hotel suites and luxury amenities. Each deluxe single
            rooms have vibrant decoration and combines luxurious furnishings
            with innovative technology to radiate a contemporary elegance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Stay;
