import OfferCard from "../../components/Card/OfferCard";

function Offers() {
  return (
    <div className="mt-20 mx-4 flex flex-col space-y-10">
      <h1 className="text-3xl lg:text-6xl p-4 uppercase font-markbook tracking-wide text-center text-primary ">
        Exciting Offers at Al Safir Hotel
      </h1>

      <p className="text-lg font-mark text-center p-2">
        Enjoy your travel and treat yourself with one of our enticing packages
        below at Al Safir Hotel.
      </p>
      <div className="space-y-10" id="offerscards">
        <div className="flex">
          <ul className="flex w-full uppercase font-markbook text-2xl justify-evenly">
            <li>All</li>
            <li>Stay</li>
            <li>Dine</li>
          </ul>
        </div>
        <div className="lg:grid lg:grid-cols-3 lg:gap-8 lg:px-40">
          <div className="space-y-2">
            <div className="h-72 w-full bg-red-300"></div>
            <h3 className="font-markbook text-lg uppercase">
              ADVANCE PURCHASE
            </h3>
            <p className="text-base font-mark">
              Enjoy savings of up to 10% off our best available rates by booking
              7 days in advance.
            </p>
          </div>
          <div className="space-y-2">
            <div className="h-72 w-full bg-red-300"></div>
            <h3 className="font-markbook text-lg uppercase">ONE FREE NIGHT</h3>
            <p className="text-base font-mark">
              Book 3 nights and get one complimentary night.
            </p>
          </div>
          <OfferCard
            title="ONE FREE NIGHT"
            content="Book 3 nights and get one complimentary night."
          />
        </div>
      </div>
    </div>
  );
}

export default Offers;
