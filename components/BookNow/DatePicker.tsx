import { useState } from "react";
import { Calendar } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import IconsPack from "../../public/images/IconsPack";

const DatePicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [openStartDateModal, setOpenStartDateModal] = useState(true);
  const [openEndDateModal, setOpenEndDateModal] = useState(true);

  function formattedStartDate(d = startDate) {
    return [d.getDate(), d.getMonth() + 1, d.getFullYear()]
      .map((n) => (n < 10 ? `0${n}` : `${n}`))
      .join("/");
  }
  function formattedEndDate(d = endDate) {
    return [d.getDate(), d.getMonth() + 1, d.getFullYear()]
      .map((n) => (n < 10 ? `0${n}` : `${n}`))
      .join("/");
  }

  const handleStartDate = (date: Date) => {
    setStartDate(date);
    setOpenStartDateModal(!openStartDateModal);
  };
  const handleEndDate = (date: Date) => {
    setEndDate(date);
    setOpenEndDateModal(!openEndDateModal);
  };
  return (
    <div className="flex items-start  text-lg font-mark font-light mt-4 border-b-2 border-b-primary  p-0.5 rounded-sm ">
      <div className="flex flex-col w-1/2">
        <div className="text-xs ">Start Date</div>
        <h5 onClick={() => setOpenStartDateModal(!openStartDateModal)}>
          {formattedStartDate()}
        </h5>
        {!openStartDateModal && (
          <div className="absolute top-0 z-10">
            <Calendar
              minDate={new Date()}
              onChange={handleStartDate}
              color="#C3A47D"
              showMonthAndYearPickers={false}
              rangeColors={["#C3A47D"]}
            />
          </div>
        )}
      </div>
      <div className="flex flex-col ">
        <div className="text-xs">End Date</div>
        <h5 onClick={() => setOpenEndDateModal(!openEndDateModal)}>
          {formattedEndDate()}
          <span className="absolute right-4">{IconsPack.downIcon}</span>
        </h5>

        {!openEndDateModal && (
          <div className="absolute left-6 top-0 z-10">
            <Calendar
              minDate={startDate}
              onChange={handleEndDate}
              color="#C3A47D"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default DatePicker;
