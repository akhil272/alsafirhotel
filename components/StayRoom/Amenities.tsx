import {
  deskIcon,
  lockerIcon,
  minibarIcon,
  sittingAreaIcon,
  wakeupServiceIcon,
  teleIcon,
  acIcon,
  ironIcon,
  channelsIcon,
  tvIcon,
  kettleIcon,
  closetIcon,
  HairdryerIcon,
  bathrobeIcon,
  slippersIcon,
  bidetIcon,
  bathtubeIcon,
  toiletriesIcon,
  wifiIcon,
  parkingIcon,
  elevatorIcon,
  wheelchairIcon,
  interconnectingroomsIcon,
} from "../../public/images/RoomIconsPack";
import IconsPack from "../../public/images/IconsPack";

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
              <div className="md:w-14 md:h-14 w-8 h-8">{sittingAreaIcon}</div>
              <p>Sitting area</p>
            </div>
            <div className="flex md:text-lg text-sm capitalize items-center md:gap-4 gap-1">
              <div className="md:w-14 md:h-14 w-8 h-8">{wakeupServiceIcon}</div>
              <p>Wake-up service</p>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="flex md:text-lg text-sm capitalize items-center md:gap-4 gap-1">
              <div className="md:w-14 md:h-14 w-8 h-8">{teleIcon}</div>
              <p>Telephone</p>
            </div>
            <div className="flex md:text-lg text-sm capitalize items-center md:gap-4 gap-1">
              <div className="md:w-14 md:h-14 w-8 h-8">{acIcon}</div>
              <p>Air conditioning</p>
            </div>
            <div className="flex md:text-lg text-sm capitalize items-center md:gap-4 gap-1">
              <div className="md:w-14 md:h-14 w-8 h-8">{ironIcon}</div>
              <p>Ironing facilities</p>
            </div>
            <div className="flex md:text-lg text-sm capitalize items-center md:gap-4 gap-1">
              <div className="md:w-14 md:h-14 w-8 h-8">{channelsIcon}</div>
              <p>Satellite Channels</p>
            </div>
          </div>
          <div className="flex flex-col mt-4 md:mt-0 space-y-4">
            <div className="flex md:text-lg text-sm capitalize items-center md:gap-4 gap-1">
              <div className="md:w-14 md:h-14 w-8 h-8">{tvIcon}</div>
              <p>Flat-screen TV</p>
            </div>
            <div className="flex md:text-lg text-sm capitalize items-center md:gap-4 gap-1">
              <div className="md:w-14 md:h-14 w-8 h-8">{kettleIcon}</div>
              <p>Electric kettle</p>
            </div>
            <div className="flex md:text-lg text-sm capitalize items-center md:gap-4 gap-1">
              <div className="md:w-14 md:h-14 w-8 h-8">{lockerIcon}</div>
              <p>Towels/Sheets</p>
            </div>
            <div className="flex md:text-lg text-sm capitalize items-center md:gap-4 gap-1">
              <div className="md:w-14 md:h-14 w-8 h-8">{closetIcon}</div>
              <p>Wardrobe or closet</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <h4 className="text-2xl uppercase py-4">Hotel Facilities</h4>
        <div className="md:flex md:space-x-4">
          <div className="flex flex-col space-y-4">
            <div className="flex md:text-lg text-sm capitalize items-center md:gap-4 gap-1">
              <div className="md:w-14 md:h-14 w-8 h-8">{wifiIcon}</div>
              <p>Free Wifi</p>
            </div>
            <div className="flex md:text-lg text-sm capitalize items-center md:gap-4 gap-1">
              <div className="md:w-14 md:h-14 w-8 h-8">{parkingIcon}</div>
              <p>Free Parking</p>
            </div>

            <div className="flex md:text-lg text-sm capitalize items-center md:gap-4 gap-1">
              <div className="md:w-14 md:h-14 w-8 h-8">{elevatorIcon}</div>
              <p>Upper floors accessible by elevator</p>
            </div>
            <div className="flex md:text-lg text-sm capitalize items-center md:gap-4 gap-1">
              <div className="md:w-14 md:h-14 w-8 h-8">{wheelchairIcon}</div>
              <p>Entire unit wheelchair accessible</p>
            </div>
            <div className="flex md:text-lg text-sm capitalize items-center md:gap-4 gap-1">
              <div className="md:w-14 md:h-14 w-8 h-8">
                {interconnectingroomsIcon}
              </div>
              <p>Interconnecting room (s) available</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <h4 className="text-2xl uppercase py-4">Private Bathroom</h4>
        <div className="md:flex md:space-x-4 grid grid-cols-2">
          <div className="flex flex-col space-y-4">
            <div className="flex md:text-lg text-sm capitalize items-center md:gap-4 gap-1">
              <div className="md:w-14 md:h-14 w-8 h-8">{HairdryerIcon}</div>
              <p>Hairdryer</p>
            </div>
            <div className="flex md:text-lg text-sm capitalize items-center md:gap-4 gap-1">
              <div className="md:w-14 md:h-14 w-8 h-8">{bathrobeIcon}</div>
              <p>Bathrobe</p>
            </div>
            <div className="flex md:text-lg text-sm capitalize items-center md:gap-4 gap-1">
              <div className="md:w-14 md:h-14 w-8 h-8">{toiletriesIcon}</div>
              <p>Free toiletries</p>
            </div>
            <div className="flex md:text-lg text-sm capitalize items-center md:gap-4 gap-1">
              <div className="md:w-14 md:h-14 w-8 h-8">{slippersIcon}</div>
              <p>Slippers</p>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="flex md:text-lg text-sm capitalize items-center md:gap-4 gap-1">
              <div className="md:w-14 md:h-14 w-8 h-8">{bidetIcon}</div>
              <p>Bidet</p>
            </div>
            <div className="flex md:text-lg text-sm capitalize items-center md:gap-4 gap-1">
              <div className="md:w-14 md:h-14 w-8 h-8">{closetIcon}</div>
              <p>Towels</p>
            </div>
            <div className="flex md:text-lg text-sm capitalize items-center md:gap-4 gap-1">
              <div className="md:w-14 md:h-14 w-8 h-8">{bathtubeIcon}</div>
              <p>Bathtub or shower</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Amenities;
