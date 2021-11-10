import { useState } from "react";
import { Calendar } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import IconsPack from "../../public/images/IconsPack";
import CalenderTransition from "./CalenderTransition";

const DatePicker = ({
  startDate,
  setStartDate,
  handleStartDate,
  openDateModal,
  setOpenDateModal,
  handleEndDate,
  endDate,
  setEndDate,
  openEndDateModal,
  setOpenEndDateModal,
}) => {
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

  return (
    <div className="flex relative items-start text-lg font-mark font-light mt-4 border-b-2 border-b-primary  p-0.5 rounded-sm ">
      <div className="flex flex-col w-1/2">
        <div className="text-xs ">Start Date</div>
        <h5 onClick={() => setOpenDateModal(!openDateModal)}>
          {formattedStartDate()}
        </h5>
        <CalenderTransition
          handleChange={handleStartDate}
          openModal={openDateModal}
          setOpenModal={setOpenDateModal}
          minDate={new Date()}
        />
      </div>
      <div className="flex flex-col ">
        <div className="text-xs">End Date</div>
        <h5 onClick={() => setOpenEndDateModal(!openEndDateModal)}>
          {formattedEndDate()}
          <span className="absolute right-4">{IconsPack.downIcon}</span>
        </h5>
        <CalenderTransition
          handleChange={handleEndDate}
          openModal={openEndDateModal}
          setOpenModal={setOpenEndDateModal}
          minDate={startDate}
        />
      </div>
    </div>
  );
};

export default DatePicker;
