import Card from "../components/Card";
import ImageSlider from "../components/ImageSlider";

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
      <div className="h-screen w-full">
        <ImageSlider images={[image1, image2]}>
          <div
            className=" flex flex-wrap content-end py-40
     min-h-screen px-4"
          >
            <h1 className="text-primary font-brandon  tracking-widest text-6xl ">
              ALSAFIR HOTEL
            </h1>
            <div className=" py-2 min-w-full font-mark font-light">
              <h5>Towers residence fitness</h5>
            </div>
            <div className="text-primary font-mark font-light">
              <p>Bahrain</p>
              <p>
                {CurrentDate()} <span>27 C</span>
              </p>
            </div>
          </div>
        </ImageSlider>
      </div>

      <Card />
    </div>
  );
}

export default Homepage;
