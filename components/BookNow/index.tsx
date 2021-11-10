import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useRouter } from "next/router";
import ImageSlider from "../ImageSlider";
import RoomsCount from "./RoomsCount";
import PeopleCounter from "./Counter";
import RoomSelector from "./RoomSelector";
import DatePicker from "./DatePicker";
import ScrollBookNow from "./ScrollBookNow";
import CallNowButton from "./CallNowButton";
const image1 = "/images/homepage/homeCoverImage01.jpg";

const BookNow = () => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);
  const router = useRouter();

  const controlBookNow = () => {
    if (window.scrollY > 200) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlBookNow);
    return () => {
      window.removeEventListener("scroll", controlBookNow);
    };
  }, []);

  const openModal = () => {
    setOpen((prev) => !prev);
  };

  //RoomSelector
  // Room types defined in room selector
  const [selectedRoom, setSelectedRoom] = useState(1);

  //Date
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [openDateModal, setOpenDateModal] = useState<boolean>(false);
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [openEndDateModal, setOpenEndDateModal] = useState<boolean>(false);

  const handleStartDate = (date: Date) => {
    setStartDate(date);
    setOpenDateModal(!openDateModal);
  };
  const handleEndDate = (date: Date) => {
    setEndDate(date);
    setOpenEndDateModal(!openEndDateModal);
  };

  //Counter
  const [countAdults, setCountAdults] = useState(2);
  const [countChildren, setCountChildren] = useState(1);
  const [countRooms, setCountRooms] = useState(1);

  const handleBookNow = () => {
    console.log("Adults" + countAdults);
    console.log("Children" + countChildren);
    console.log("RoomsCount" + countRooms);
    console.log("RoomSelected" + selectedRoom);
    console.log("StartDate" + startDate);
    console.log("EndDate" + endDate);
  };

  return (
    <>
      {/* Smartphone  */}
      <div className="block lg:hidden">
        <div className="transition duration-1000 hover:bg-black hover:text-primary fixed bottom-0 text-white bg-primary min-w-full text-center text-2xl p-2">
          <button onClick={openModal}>BOOK NOW</button>
          <CallNowButton />
        </div>
        <Transition.Root show={open} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 overflow-hidden"
            onClose={setOpen}
          >
            <div className="absolute inset-0 overflow-hidden">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-500"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-500"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
              </Transition.Child>
              <div className="fixed inset-y-0 right-0 w-screen flex">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-y-full"
                  enterTo="translate-y-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-y-0"
                  leaveTo="translate-y-full"
                >
                  <div className="relative w-screen max-w-md">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-in-out duration-500"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in-out duration-500"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="absolute "></div>
                    </Transition.Child>
                    <div className="fixed top-0 h-screen w-screen flex items-end">
                      <div className="absolute h-full w-full">
                        <ImageSlider images={[image1]} autoplay={false} />
                      </div>
                      <div className="h-3/5 w-full bg-black flex flex-col opacity-95 space-y-6 p-4">
                        <div className="flex p-2 mt-6">
                          <h3 className="uppercase font-mark text-2xl">
                            Book Your Room
                          </h3>
                          <div
                            onClick={openModal}
                            className="flex justify-center items-center ml-auto"
                          >
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 14 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.46 7L14 12.54V14H12.54L7 8.46L1.46 14H0V12.54L5.54 7L0 1.46V0H1.46L7 5.54L12.54 0H14V1.46L8.46 7Z"
                                fill="white"
                              />
                            </svg>
                          </div>
                        </div>
                        <RoomSelector
                          selectedRoom={selectedRoom}
                          setSelectedRoom={setSelectedRoom}
                        />
                        <DatePicker
                          startDate={startDate}
                          endDate={endDate}
                          openDateModal={openDateModal}
                          setOpenDateModal={setOpenDateModal}
                          handleStartDate={handleStartDate}
                          openEndDateModal={openEndDateModal}
                          setOpenEndDateModal={setOpenEndDateModal}
                          handleEndDate={handleEndDate}
                        />
                        <RoomsCount
                          count={countRooms}
                          setCount={setCountRooms}
                        />
                        <div className="flex gap-2 justify-center gap ">
                          <PeopleCounter
                            categories="Adults"
                            count={countAdults}
                            setCount={setCountAdults}
                          />
                          <PeopleCounter
                            categories="Children"
                            count={countChildren}
                            setCount={setCountChildren}
                          />
                        </div>
                      </div>
                      <div className="duration-1000 transition-all hover:bg-black hover:p-4  hover:text-primary fixed bottom-0 text-white bg-primary min-w-full text-center text-2xl p-2">
                        <button onClick={handleBookNow}>BOOK NOW</button>
                      </div>
                    </div>
                  </div>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      </div>

      {/* desktop */}
      {show && router.pathname === "/" && (
        <div className="hidden xl:block">
          <div className="fixed right-0 w-96 h-3/6 duration-1000 transition-all bottom-1/4 scale-100 ">
            <div className="relative bg-black top-6 flex flex-col rounded-l-lg space-y-6 p-4 bg-opacity-75 ">
              <h3 className="uppercase font-mark text-2xl"> Book Your Room</h3>
              <RoomSelector
                selectedRoom={selectedRoom}
                setSelectedRoom={setSelectedRoom}
              />
              <div>
                <DatePicker
                  startDate={startDate}
                  endDate={endDate}
                  openDateModal={openDateModal}
                  setOpenDateModal={setOpenDateModal}
                  handleStartDate={handleStartDate}
                  openEndDateModal={openEndDateModal}
                  setOpenEndDateModal={setOpenEndDateModal}
                  handleEndDate={handleEndDate}
                />
              </div>
              <RoomsCount count={countRooms} setCount={setCountRooms} />
              <div className="flex gap-2 justify-center gap ">
                <PeopleCounter
                  categories="Adults"
                  count={countAdults}
                  setCount={setCountAdults}
                />
                <PeopleCounter
                  categories="Children"
                  count={countChildren}
                  setCount={setCountChildren}
                />
              </div>
              <div className=" rounded-l-md text-white bg-primary min-w-full text-center text-2xl p-2">
                <button onClick={handleBookNow}>BOOK NOW</button>
              </div>
            </div>
          </div>
        </div>
      )}
      {!show && (
        <div className="lg:flex fixed bottom-0 min-w-full  bg-primary hidden ">
          <ScrollBookNow />
        </div>
      )}
    </>
  );
};

export default BookNow;
