import ListBoxCounter from "./ListBoxCounter";
import { useState } from "react";
import { Calendar } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

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
    <div className="flex w-full h-full justify-center items-center relative ">
      <h5 onClick={() => setOpenStartDateModal(!openStartDateModal)}>
        {formattedStartDate()}--
      </h5>
      {!openStartDateModal && (
        <div className="absolute bottom-12">
          <Calendar
            minDate={new Date()}
            onChange={handleStartDate}
            showMonthAndYearPickers={false}
          />
        </div>
      )}
      <h5 onClick={() => setOpenEndDateModal(!openEndDateModal)}>
        --{formattedEndDate()}
      </h5>

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
    <div className="flex w-full space-x-16 items-center pl-4 ">
      <label className="text-xl w-1/2">Book Your Room</label>
      {DatePicker()}
      <ListBoxCounter title="Rooms" counter={roomTypes} />
      <ListBoxCounter title="Dance" counter={counter} />
      <ListBoxCounter title="Rooms" counter={counter} />
      <ListBoxCounter title="Adults" counter={counter} />
      <ListBoxCounter title="Children" counter={counter} />
      <div className="transition duration-1000 hover:bg-black hover:text-primary text-white bg-black h-full w-full flex justify-center items-center">
        <button className=" text-center text-xl">BOOK NOW</button>
        <div className="absolute bg-black  flex justify-center items-center overflow-hidden h-14 w-14 rounded-full bottom-4 right-0 ">
          <img src="/images/icons/call-icon-01.svg" />
        </div>
      </div>
    </div>
  );
};

export default ScrollBookNow;
