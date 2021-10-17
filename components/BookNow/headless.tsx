/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import MobileMenu from "../NavBar/MobileMenu";
import Contact from "../NavBar/Contact";

export default function SideOpener() {
  const [open, setOpen] = useState(true);

  return (
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
          <div className="fixed inset-y-0 right-0 pl-10 w-screen flex">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
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
                  <div className="absolute top-0 left-0 -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4">
                    <button
                      type="button"
                      className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                      onClick={() => setOpen(false)}
                    >
                      <span className="sr-only">Close panel</span>
                      <div className="h-6 w-6" aria-hidden="true">
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
                    </button>
                  </div>
                </Transition.Child>
                <div className="h-full w-screen flex flex-col py-6 bg-black shadow-xl overflow-y-scroll lg:overflow-hidden">
                  <div className=" relative right-0 mt-10 w-screen h-screen rounded-md shadow-lg py-1 bg-black">
                    <MobileMenu />
                    <div className="w-full uppercase h-12 bg-primary text-white lg:absolute lg:bottom-36 flex text-2xl justify-start lg:pl-14 pl-6 items-center">
                      <p> Contact Us </p>
                    </div>
                    <div className="w-full  text-white absolute lg:bottom-14 flex text-2xl ">
                      <Contact />
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
