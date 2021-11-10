import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Calendar } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

interface calenderData {
  openModal: boolean;
  minDate: Date;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  handleChange: (date: Date) => void;
}

const CalenderTransition = ({
  openModal,
  setOpenModal,
  handleChange,
  minDate,
}: calenderData) => {
  return (
    <Transition appear show={openModal} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={() => setOpenModal(!openModal)}
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
            <div className="inline-block max-w-md align-middle transition-all transform  shadow-xl ">
              <Calendar
                minDate={minDate}
                onChange={handleChange}
                showMonthAndYearPickers={false}
                rangeColors={["#C3A47D"]}
              />
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default CalenderTransition;
