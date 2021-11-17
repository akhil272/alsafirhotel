import {
  deskIcon,
  lockerIcon,
  minibarIcon,
} from "../../public/images/RoomIconsPack";
const Amenities = () => {
  return (
    <div className="flex flex-col font-mark text-secondary w-full md:w-2/3 gap-y-4  mt-20 mb-10 md:px-10 px-4">
      <div className="flex flex-col">
        <h4 className="text-2xl uppercase py-4">Room Facilities</h4>
        <div className="md:flex md:space-x-4 grid grid-cols-2">
          <div className="flex flex-col space-y-4">
            <div className="flex md:text-lg text-sm capitalize items-center md:gap-4 gap-1">
              <div className="md:w-14 md:h-14 w-8 h-8">{deskIcon}</div>
              <p>Desk</p>
            </div>
            <div className="flex md:text-lg text-sm capitalize items-center md:gap-4 gap-1">
              <div className="md:w-14 md:h-14 w-8 h-8">{lockerIcon}</div>
              <p>Safe</p>
            </div>
            <div className="flex md:text-lg text-sm capitalize items-center md:gap-4 gap-1">
              <div className="md:w-14 md:h-14 w-8 h-8">{minibarIcon}</div>
              <p>Minibar</p>
            </div>

            <div className="flex md:text-lg text-sm capitalize items-center md:gap-4 gap-1">
              <div className="md:w-14 md:h-14 w-8 h-8">{lockerIcon}</div>
              <p>Sitting area</p>
            </div>
            <div className="flex md:text-lg text-sm capitalize items-center md:gap-4 gap-1">
              <div className="md:w-14 md:h-14 w-8 h-8">{lockerIcon}</div>
              <p>Wake-up service</p>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="flex md:text-lg text-sm capitalize items-center md:gap-4 gap-1">
              <div className="md:w-14 md:h-14 w-8 h-8">{lockerIcon}</div>
              <p>Telephone</p>
            </div>
            <div className="flex md:text-lg text-sm capitalize items-center md:gap-4 gap-1">
              <div className="md:w-14 md:h-14 w-8 h-8">{lockerIcon}</div>
              <p>Air conditioning</p>
            </div>
            <div className="flex md:text-lg text-sm capitalize items-center md:gap-4 gap-1">
              <div className="md:w-14 md:h-14 w-8 h-8">{lockerIcon}</div>
              <p>Ironing facilities</p>
            </div>
            <div className="flex md:text-lg text-sm capitalize items-center md:gap-4 gap-1">
              <div className="md:w-14 md:h-14 w-8 h-8">{lockerIcon}</div>
              <p>Satellite Channels</p>
            </div>
          </div>
          <div className="flex flex-col mt-4 md:mt-0 space-y-4">
            <div className="flex md:text-lg text-sm capitalize items-center md:gap-4 gap-1">
              <div className="md:w-14 md:h-14 w-8 h-8">{lockerIcon}</div>
              <p>Flat-screen TV</p>
            </div>
            <div className="flex md:text-lg text-sm capitalize items-center md:gap-4 gap-1">
              <div className="md:w-14 md:h-14 w-8 h-8">{lockerIcon}</div>
              <p>Electric kettle</p>
            </div>
            <div className="flex md:text-lg text-sm capitalize items-center md:gap-4 gap-1">
              <div className="md:w-14 md:h-14 w-8 h-8">{lockerIcon}</div>
              <p>Towels/Sheets</p>
            </div>
            <div className="flex md:text-lg text-sm capitalize items-center md:gap-4 gap-1">
              <div className="md:w-14 md:h-14 w-8 h-8">{lockerIcon}</div>
              <p>Wardrobe or closet</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <h4 className="text-2xl uppercase py-4">Private Bathroom</h4>
        <div className="md:flex md:space-x-4 grid grid-cols-2">
          <div className="flex flex-col space-y-4">
            <div className="flex md:text-lg text-sm capitalize items-center md:gap-4 gap-1">
              <div className="md:w-14 md:h-14 w-8 h-8">{deskIcon}</div>
              <p>Hairdryer</p>
            </div>
            <div className="flex md:text-lg text-sm capitalize items-center md:gap-4 gap-1">
              <div className="md:w-14 md:h-14 w-8 h-8">{deskIcon}</div>
              <p>Bathrobe</p>
            </div>
            <div className="flex md:text-lg text-sm capitalize items-center md:gap-4 gap-1">
              <div className="md:w-14 md:h-14 w-8 h-8">{deskIcon}</div>
              <p>Free toiletries</p>
            </div>
            <div className="flex md:text-lg text-sm capitalize items-center md:gap-4 gap-1">
              <div className="md:w-14 md:h-14 w-8 h-8">{deskIcon}</div>
              <p>Slippers</p>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="flex md:text-lg text-sm capitalize items-center md:gap-4 gap-1">
              <div className="md:w-14 md:h-14 w-8 h-8">{deskIcon}</div>
              <p>Bidet</p>
            </div>
            <div className="flex md:text-lg text-sm capitalize items-center md:gap-4 gap-1">
              <div className="md:w-14 md:h-14 w-8 h-8">{deskIcon}</div>
              <p>Towels</p>
            </div>
            <div className="flex md:text-lg text-sm capitalize items-center md:gap-4 gap-1">
              <div className="md:w-14 md:h-14 w-8 h-8">{deskIcon}</div>
              <p>Bathtub or shower</p>
            </div>
            <div className="flex md:text-lg text-sm capitalize items-center md:gap-4 gap-1">
              <div className="md:w-14 md:h-14 w-8 h-8">{deskIcon}</div>
              <p>Slippers</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <h4 className="text-2xl uppercase py-4">Hotel Facilities</h4>
        <div className="md:flex md:space-x-4">
          <div className="flex flex-col space-y-4">
            <div className="flex md:text-lg text-sm capitalize items-center md:gap-4 gap-1">
              <div className="md:w-14 md:h-14 w-8 h-8">{deskIcon}</div>
              <p>Free Wifi</p>
            </div>
            <div className="flex md:text-lg text-sm capitalize items-center md:gap-4 gap-1">
              <div className="md:w-14 md:h-14 w-8 h-8">{deskIcon}</div>
              <p>Free Parking</p>
            </div>

            <div className="flex md:text-lg text-sm capitalize items-center md:gap-4 gap-1">
              <div className="md:w-14 md:h-14 w-8 h-8">{deskIcon}</div>
              <p>Upper floors accessible by elevator</p>
            </div>
            <div className="flex md:text-lg text-sm capitalize items-center md:gap-4 gap-1">
              <div className="md:w-14 md:h-14 w-8 h-8">{deskIcon}</div>
              <p>Entire unit wheelchair accessible</p>
            </div>
            <div className="flex md:text-lg text-sm capitalize items-center md:gap-4 gap-1">
              <div className="md:w-14 md:h-14 w-8 h-8">{deskIcon}</div>
              <p>Interconnecting room (s) available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Amenities;
