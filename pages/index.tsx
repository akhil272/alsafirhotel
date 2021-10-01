import Card from "../components/Card";

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
  return (
    <div
      className="flex flex-wrap content-end py-40
     min-h-screen bg-black px-4"
    >
      <h1 className="text-primary font-light tracking-widest text-6xl ">
        ALSAFIR HOTEL
      </h1>
      <div className="py-2 min-w-full">
        <h5>Towers residence fitness</h5>
      </div>
      <div className="text-primary font-sans">
        <p>Bahrain</p>
        <p>
          {CurrentDate()} <span>27 C</span>
        </p>
      </div>
      <div className="h-200 min-w-full ">ICON ARROW OFFERS</div>

      <Card />
    </div>
  );
}

export default Homepage;
