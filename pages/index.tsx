import Card from "../components/Card";
import ImageSlider from "../components/ImageSlider";
import Head from "next/head";
import WeatherPack from "../components/Weather";

function Homepage({ weather }: { weather: any }) {
  const CurrentDate = () => {
    const d = new Date();
    const weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    const date = weekday[d.getDay()];
    return date;
  };
  const image1 = "/images/homepage/homeCoverImage01.jpg";
  const image2 = "/images/homepage/homeCover2.jpg";
  return (
    <div>
      <Head>
        <title>Alsafir Hotel</title>
        <meta
          property="og:title"
          content="Al Safir Hotel | Experience luxury above all"
          key="title"
        />
      </Head>
      <div className="h-screen w-full ">
        <ImageSlider images={[image1, image2]}>
          <div
            className=" flex flex-wrap content-end py-40
     min-h-screen px-4"
          >
            <h1 className="text-primary font-brandon sm:w-1/2 tracking-widest text-6xl lg:text-8xl ">
              AL SAFIR HOTEL
            </h1>
            <div className="min-w-full font-mark  lg:text-2xl">
              <h5>Towers Residence Fitness</h5>
            </div>
            <div className="text-secondary font-mark lg:text-lg">
              <p>
                Manama, Bahrain :
                <span>
                  {Math.floor(weather.main.temp)}°C
                  <img
                    className="inline-block"
                    src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
                  />
                </span>
              </p>
              <p className="flex">
                <WeatherPack />
              </p>
              <p className="font-mark capitalize text-lg pt-4">
                {weather.weather[0].description}
              </p>
            </div>
          </div>
        </ImageSlider>
      </div>

      <Card />
      <div className="p-10 space-y-4">
        <img src="/images/AlsafirLogo.svg" />
        <p>
          It is said that absolute luxury vests in minute particulars to give a
          heavenly experience. It involves competitive vision, ages preparing a
          craft and building reputation. Luxurious experience becomes a bequest.
          Al Safir, manifests a legacy in itself with the motive “service before
          self”. We take at most care and are upright for our customer service.
          This is the exact place where you experience paths of “Safirness”, a
          promise to make you lose your way and yet, find yourself to an
          unforgettable memory around the corner. The motivation for our
          customer service is our commitment to personal care and attention
          which you often find visiting friends and family. Relax your mind with
          stunning views, with the beauty of discovery, find the flow out of the
          beaches and fill your bags with luxury brand shopping.
        </p>
        <p>
          If you are looking for a royal stay then Al Safir Hotel is the place
          for you. The hotel assures you unbending comfort and convenience of a
          modern extravagant hotel without any compromise of its rare
          significant character. It is a gateway to a magnificent place located
          in right in Manama’s Juffair district, lllll. Adding to that, we offer
          exotic experience, soothing hospitality and a royal stay.
          <i>Don’t blink twice to book because you deserve the best!</i>
        </p>
      </div>
    </div>
  );
}

export default Homepage;

export const getStaticProps = async function () {
  const res = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=Bahrain&units=metric&appid=${process.env.API_KEY}`
  );
  const data = await res.json();
  return {
    props: {
      weather: data,
    },
  };
};
