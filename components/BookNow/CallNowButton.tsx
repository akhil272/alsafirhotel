import { Dialog, Transition } from "@headlessui/react";
import { useState, Fragment } from "react";

const CallNowButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleCallNow = () => {
    setIsOpen(!isOpen);
  };
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <div
        onClick={handleCallNow}
        className="absolute bg-black flex ring-2 ring-primary justify-center bg-opacity-80 hover:bg-opacity-100 items-center h-14 w-14 rounded-full bottom-4 right-4"
      >
        <img
          className="object-contain h-10 w-10  "
          src="/images/icons/call-icon-01.svg"
        />
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
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-black bg-opacity-90 shadow-xl rounded-2xl">
                <div className="flex flex-col justify-center items-start">
                  <label className="uppercase font-markbook text-2xl">
                    Contact Us
                  </label>
                  <div className="pt-4 w-full hover:text-primary hover:pl-2 transition-all duration-1000 flex flex-col">
                    <label className="text-xs">TOLL FREE NUMBER</label>
                    <a className="text-xl" href="tel:+97317827999">
                      +973 1782 7999
                    </a>
                  </div>
                  <div className="pt-4 w-full hover:text-primary hover:pl-2 transition-all duration-1000 flex flex-col">
                    <label className="text-xs">EMAIL</label>
                    <a className="text-xl" href="mailto:hello@alsafirhotel.com">
                      hello@alsafirhotel.com
                    </a>
                  </div>
                  <div className="pt-4 w-full hover:text-primary hover:pl-2 transition-all duration-1000 flex flex-col">
                    <label className="text-xs">WHATSAPP</label>
                    <a
                      className="text-xl"
                      href="https://wa.me/+97317827999?text=I%20like%20to%20book%20rooms%20in%20AlSafir%20Hotel"
                    >
                      +973 1782 7999
                    </a>
                  </div>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex hover:bg-opacity-80 transition duration-1000 justify-center px-4 py-2 text-xl uppercase font-mark tracking-widest text-white bg-primary border border-transparent rounded-md w-full"
                    onClick={closeModal}
                  >
                    Close
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

export default CallNowButton;
