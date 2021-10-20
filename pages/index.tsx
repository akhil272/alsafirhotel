import Card from "../components/Card";
import ImageSlider from "../components/ImageSlider";
import Head from "next/head";

function Homepage() {
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
          content="At the AL SAFIR HOTEL AND TOWER we strive to make your stay even more
          attractive"
          key="title"
        />
      </Head>
      <div className="h-screen w-full z-10">
        <ImageSlider images={[image1, image2]}>
          <div
            className=" flex flex-wrap content-end py-40
     min-h-screen px-4"
          >
            <h1 className="text-primary font-brandon  tracking-widest text-6xl lg:text-8xl ">
              ALSAFIR HOTEL
            </h1>
            <div className=" py-2 min-w-full font-mark font-light lg:text-3xl">
              <h5>Towers residence fitness</h5>
            </div>
            <div className="text-primary font-mark font-light lg:text-3xl">
              <p>Bahrain</p>
              <p>
                {CurrentDate()} <span>33°C</span>
              </p>
            </div>
          </div>
        </ImageSlider>
      </div>

      <Card />
      <div className="p-10 space-y-4">
        <img src="/images/AlsafirLogo.svg" />
        <p>
          At the AL SAFIR HOTEL AND TOWER we strive to make your stay even more
          attractive; we have now introduced a wide range of exclusive add-on
          packages only available to those who book directly with us. Why not
          grab this great opportunity today and receive the best possible value
          for your money.
        </p>
      </div>
    </div>
  );
}

export default Homepage;
