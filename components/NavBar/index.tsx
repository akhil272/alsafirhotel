import Link from "next/link";
import IconsPack from "../../public/images/IconsPack";
import { Fragment, useState, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import MobileMenu from "../NavBar/MobileMenu";
import Contact from "../NavBar/Contact";
import { useRouter } from "next/router";

const NavBar = () => {
  const router = useRouter();
  const { locale } = router;
  const completeButtonRef = useRef(null);
  const [openMenu, setOpenMenu] = useState(false);
  const handleClick = () => {
    setOpenMenu(!openMenu);
  };

  const handleClose = () => {
    setOpenMenu(true);
  };

  const changeLanguage = (e: { target: { value: string } }) => {
    const locale = e.target.value;
    const { pathname } = router;
    router.push({ pathname }, { pathname }, { locale });
  };

  const genericHamburgerLine = `h-1 w-10 my-1 bg-primary transition ease transform duration-300 `;
  return (
    <>
      <header className="fixed w-full bg-black pl-4 z-10 flex justify-center items-center h-20">
        <Link href="/">
          <a>{IconsPack.alsfairLogo}</a>
        </Link>
        <div className="flex text-primary justify-center items-center ml-auto pr-4 space-x-4">
          {/* <select
            className="bg-black outline-none "
            onChange={changeLanguage}
            defaultValue={locale}
          >
            <option value="en">EN</option>
            <option value="ar">AR</option>
          </select> */}
          <div
            onClick={handleClick}
            className="flex items-center ml-2 uppercase space-x-2"
          >
            <label>Menu</label>
            <div onClick={handleClick} className="scale-50">
              <button className="flex flex-col h-12 w-12  rounded justify-center items-center ">
                <div
                  className={`${genericHamburgerLine} ${
                    openMenu
                      ? "rotate-45 translate-y-3 opacity-100"
                      : "opacity-100"
                  }`}
                />
                <div
                  className={`${genericHamburgerLine} ${
                    openMenu ? "opacity-0" : "opacity-100"
                  }`}
                />
                <div
                  className={`${genericHamburgerLine} ${
                    openMenu ? "-rotate-45 -translate-y-3 " : "opacity-100"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
        <Transition.Root show={openMenu} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 overflow-hidden"
            onClose={handleClose}
            initialFocus={completeButtonRef}
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
                  <div className="flex flex-col h-auto bg-black shadow-xl overflow-y-scroll ">
                    <div
                      ref={completeButtonRef}
                      onClick={handleClick}
                      className="pr-12 py-4 md:w-full w-screen h-screen rounded-md shadow-lg "
                    >
                      <MobileMenu />
                      <div className="w-full capitalize h-12 border-b-2 border-primary text-white flex text-2xl justify-start pl-6 items-center">
                        <p> Contact Us </p>
                      </div>
                      <div className="w-full  text-white flex text-2xl ">
                        <Contact />
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
