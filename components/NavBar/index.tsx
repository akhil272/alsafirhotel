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

  const genericHamburgerLine = `h-1 w-10 my-1 bg-primary transition ease transform duration-300 `;
  return (
    <>
      <header className="sticky pl-4 z-10 flex justify-center items-center h-20">
        <Link href="/">
          <a>{IconsPack.alsfairLogo}</a>
        </Link>
        <div className="flex text-primary justify-center items-center ml-auto pr-4 space-x-4">
          <button>EN</button>
          <div className="flex items-center ml-2 uppercase space-x-2">
            <label>Menu</label>
            <div className="scale-50">
              <button
                className="flex flex-col h-12 w-12 rounded justify-center items-center "
                onClick={() => setOpen(!open)}
              >
                <div
                  className={`${genericHamburgerLine} ${
                    open ? "rotate-45 translate-y-3 opacity-100" : "opacity-100"
                  }`}
                />
                <div
                  className={`${genericHamburgerLine} ${
                    open ? "opacity-0" : "opacity-100"
                  }`}
                />
                <div
                  className={`${genericHamburgerLine} ${
                    open ? "-rotate-45 -translate-y-3 " : "opacity-100"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
        <Transition.Root show={open} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 overflow-hidden"
            onClose={handleClick}
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
              <div className="fixed right-0 flex">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <div className="w-screen">
                    <div className="w-screen flex flex-col  bg-black shadow-xl overflow-y-scroll lg:overflow-hidden">
                      <div
                        onClick={handleClick}
                        className="relative right-0 py-4 w-screen h-screen rounded-md shadow-lg "
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
      </header>
    </>
  );
};

export default NavBar;
