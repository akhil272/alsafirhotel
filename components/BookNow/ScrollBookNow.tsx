import ListBoxCounter from "./ListBoxCounter";
import { useState } from "react";
import { Calendar } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import CallNowButton from "./CallNowButton";

const counter = [
  { content: "1" },
  { content: "2" },
  { content: "3" },
  { content: "4" },
  { content: "5" },
  { content: "6" },
  { content: "7" },
  { content: "8" },
  { content: "9" },
  { content: "10" },
];

const roomTypes = [{ content: "Deluxe Twin" }, { content: "Deluxe Double" }];

const DatePicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [openStartDateModal, setOpenStartDateModal] = useState(true);
  const [openEndDateModal, setOpenEndDateModal] = useState(true);

  function formattedStartDate(d = startDate) {
    let { day, month, year } = new Intl.DateTimeFormat("en", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })
      .formatToParts(d)
      .reduce((acc, part) => {
        if (part.type != "literal") {
          acc[part.type] = part.value;
        }
        return acc;
      }, Object.create(null));
    return `${day}-${month}-${year}`;
  }
  function formattedEndDate(d = endDate) {
    let { day, month, year } = new Intl.DateTimeFormat("en", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })
      .formatToParts(d)
      .reduce((acc, part) => {
        if (part.type != "literal") {
          acc[part.type] = part.value;
        }
        return acc;
      }, Object.create(null));
    return `${day}-${month}-${year}`;
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
    <div className="flex h-full justify-center items-center relative ">
      <label
        className="transition duration-1000 hover:bg-gray-900 w-full h-full text-center flex items-center "
        onClick={() => setOpenStartDateModal(!openStartDateModal)}
      >
        {formattedStartDate()}--
      </label>
      {!openStartDateModal && (
        <div className="absolute bottom-12 ">
          <Calendar
            minDate={new Date()}
            onChange={handleStartDate}
            showMonthAndYearPickers={false}
          />
        </div>
      )}
      <label
        className="transition duration-1000 hover:bg-gray-900 w-full h-full text-center flex items-center "
        onClick={() => setOpenEndDateModal(!openEndDateModal)}
      >
        --{formattedEndDate()}
      </label>

      {!openEndDateModal && (
        <div className="absolute bottom-10">
          <Calendar
            minDate={startDate}
            onChange={handleEndDate}
            showMonthAndYearPickers={false}
          />
        </div>
      )}
    </div>
  );
};

const ScrollBookNow = () => {
  return (
    <div className="flex w-screen justify-between items-center pl-20">
      {DatePicker()}
      <ListBoxCounter title="Rooms" counter={roomTypes} />
      <ListBoxCounter title="Rooms" counter={counter} />
      <ListBoxCounter title="Adults" counter={counter} />
      <ListBoxCounter title="Children" counter={counter} />
      <div className="transition duration-1000 hover:bg-black hover:text-primary text-white bg-black h-full  pl-20 pr-20 flex justify-center items-center">
        <button
          onClick={() => alert("Thank you for choosing Al Safir Hotel")}
          className=" text-xl"
        >
          BOOK NOW
        </button>
        <CallNowButton />
      </div>
    </div>
  );
};

export default ScrollBookNow;
