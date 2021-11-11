import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import IconsPack from "../../public/images/IconsPack";
import CalenderTransition from "./CalenderTransition";
import { useState } from "react";

interface datePickerData {
  startDate: Date;
  endDate: Date;
  setStartDate: React.Dispatch<React.SetStateAction<Date>>;
  setEndDate: React.Dispatch<React.SetStateAction<Date>>;
}

const DatePicker = ({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}: datePickerData) => {
  const [openDateModal, setOpenDateModal] = useState<boolean>(false);
  const [openEndDateModal, setOpenEndDateModal] = useState<boolean>(false);
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
    setOpenDateModal(!openDateModal);
  };
  const handleEndDate = (date: Date) => {
    setEndDate(date);
    setOpenEndDateModal(!openEndDateModal);
  };

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
