import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import PeopleCounter from "./PeopleCounter";

const roomCounts = [
  { id: 1, title: "1" },
  { id: 2, title: "2" },
  { id: 3, title: "3" },
];

const RoomsCount = () => {
  const [selected, setSelected] = useState(2);

  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  const defaultClass =
    "flex flex-col h-14 w-full bg-primary items-center justify-center bg-opacity-30 rounded-md ";
  const userSelectedClass =
    "flex flex-col h-14 w-full bg-primary items-center justify-center  rounded-md";

  const handleSelection = (roomCount: { id: number; title?: string }) => {
    setSelected(roomCount.id);
  };

  const handleAddMoreRooms = () => {
    setIsOpen(!isOpen);
    setSelected(4);
  };

  return (
    <div id="roomCount" className="flex justify-between gap-2 relative  ">
      {roomCounts.map((roomCount) => (
        <div
          style={{
            borderWidth: "1px",
            borderColor: "#C3A47D",
          }}
          key={roomCount.id}
          className={`${
            roomCount.id === selected ? userSelectedClass : defaultClass
          }`}
        >
          <button
            name={roomCount.title}
            onClick={() => handleSelection(roomCount)}
            className="text-2xl"
          >
            {roomCount.title}
          </button>
          <label>Room</label>
        </div>
      ))}

      <div
        style={{
          borderWidth: "1px",
          borderColor: "#C3A47D",
        }}
        onClick={handleAddMoreRooms}
        className={`${selected === 4 ? userSelectedClass : defaultClass}`}
      >
        <button className="text-2xl" type="button">
          +
        </button>
        <label>Room</label>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-black shadow-xl rounded-2xl">
                <div className="mt-2">
                  <PeopleCounter categories="Rooms" />
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-primary border border-transparent rounded-md w-full"
                    onClick={closeModal}
                  >
                    Update Rooms Count
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default RoomsCount;
