import { MouseEventHandler } from "react";

const BookingTab = (props: {
  handleBooking: MouseEventHandler<HTMLButtonElement> | undefined;
}) => {
  return <button onClick={props.handleBooking}>Book Now</button>;
};

export default BookingTab;
