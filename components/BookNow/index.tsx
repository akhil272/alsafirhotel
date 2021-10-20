import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import ImageSlider from "../ImageSlider";
import RoomsCount from "./RoomsCount";
import PeopleCounter from "./PeopleCounter";
import RoomSelector from "./RoomSelector";
const image1 = "/images/homepage/homeCoverImage01.jpg";

const BookNow = () => {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen((prev) => !prev);
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
                        <RoomSelector />
                        <RoomsCount />
                        <div className="flex gap-2 justify-center gap ">
                          <PeopleCounter categories="Adults" />
                          <PeopleCounter categories="Children" />
                        </div>
                      </div>
                      <div className="duration-1000 transition-all hover:bg-black hover:p-4  hover:text-primary fixed bottom-0 text-white bg-primary min-w-full text-center text-2xl p-2">
                        <button>BOOK NOW</button>
                      </div>
                    </div>
                  </div>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      </div>
      <div className="hidden xl:block">
        <div className="fixed right-0 max-w-lg h-3/6 duration-1000 transition-all bottom-1/4 scale-100 ">
          <div className="absolute duration-1000 transition-all  h-full w-full opacity-75 rounded-l-lg bg-black"></div>
          <div className="relative top-6 flex flex-col space-y-6 p-4 ">
            <h3 className="uppercase font-mark text-2xl"> Book Your Room</h3>
            <RoomSelector />
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
