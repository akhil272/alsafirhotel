import Link from "next/link";
import IconsPack from "../../public/images/IconsPack";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import MobileMenu from "../NavBar/MobileMenu";
import Contact from "../NavBar/Contact";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <header className=" hover:bg-black w-screen fixed p-4 z-10 flex h-20">
        <Link href="/">
          <a>{IconsPack.alsfairLogo}</a>
        </Link>
        <div className="flex text-primary justify-center items-center ml-auto pr-4 space-x-4">
          <button>EN</button>
          <div className="flex items-center ml-2 uppercase space-x-2">
            <label>Menu</label>
            <div>
              {!open ? (
                <svg
                  onClick={handleClick}
                  width="18"
                  height="12"
                  viewBox="0 0 18 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 0H17.4545V2H0V0ZM0 5H17.4545V7H0V5ZM0 10H17.4545V12H0V10Z"
                    fill="#BEA782"
                  />
                </svg>
              ) : (
                <svg
                  onClick={handleClick}
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
              )}
            </div>
          </div>
        </div>
      </header>
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
            <div className="fixed inset-y-0 right-0  w-screen flex">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <div className="relative w-screen">
                  <div className="h-full w-screen flex flex-col py-6 bg-black shadow-xl overflow-y-scroll lg:overflow-hidden">
                    <div
                      onClick={handleClick}
                      className=" relative right-0 mt-10 w-screen h-screen rounded-md shadow-lg py-1 bg-black"
                    >
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
    </>
  );
};

export default NavBar;
