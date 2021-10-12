import DatePicker from "react-datepicker";
import { SetStateAction, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

const DateData = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      className="bg-transparent  text-lg font-mark font-light"
      selected={startDate}
      onChange={(date: SetStateAction<Date>) => setStartDate(date)}
      withPortal
    />
  );
};

export default DateData;
