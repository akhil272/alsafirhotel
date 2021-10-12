import IconsPack from "../../public/images/IconsPack";
import DateData from "./Date";

const Calendar = () => {
  return (
    <div className="flex  items-start  text-lg font-mark font-light mt-4 border-b-2 border-b-primary  p-0.5 rounded-sm ">
      <div className="flex flex-col w-1/2">
        <div className="text-xs ">Start Date</div>
        <div>
          <DateData />
        </div>
      </div>
      <div className="flex flex-col ">
        <div className="text-xs">End Date</div>
        <div className="flex items-center ">
          <DateData />
          <span className="absolute right-4 ">{IconsPack.downIcon}</span>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
