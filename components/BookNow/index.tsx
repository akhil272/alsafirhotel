import Modal from "./Modal";
import { useState } from "react";
import RoomsCount from "./RoomsCount";
import Calendar from "./Calendar";
import PeopleCounter from "./PeopleCounter";
import RoomSelector from "./RoomSelector";

const BookNow = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <div className="block xl:hidden">
        <div className="transition duration-1000 hover:bg-black hover:text-primary fixed bottom-0 text-white bg-primary min-w-full text-center text-2xl p-2">
          <button onClick={openModal}>BOOK NOW</button>
          <div className="absolute bg-black opacity-85 flex justify-center items-center p-2 h-14 w-14 rounded-full bottom-4 right-3 ">
            <img src="/images/icons/call-icon-01.svg" />
          </div>
        </div>
        <Modal showModal={showModal} setShowModal={setShowModal} />
      </div>
      <div className="hidden xl:block">
        <div className="fixed right-0 max-w-lg h-3/6 duration-1000 transition-all bottom-1/4 scale-100 ">
          <div className="absolute duration-1000 transition-all  h-full w-full opacity-75 rounded-l-lg bg-black"></div>
          <div className="relative top-6 flex flex-col space-y-6 p-4 ">
            <h3 className="uppercase font-mark text-2xl"> Book Your Room</h3>
            <RoomSelector />
            <Calendar />
            <RoomsCount />
            <div className="flex gap-2 justify-center gap ">
              <PeopleCounter categories="Adults" />
              <PeopleCounter categories="Children" />
            </div>
            <div className=" rounded-l-md  duration-1000 transition-all hover:bg-black  hover:text-primary  text-white bg-primary min-w-full text-center text-2xl p-2">
              <button>BOOK NOW</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookNow;
