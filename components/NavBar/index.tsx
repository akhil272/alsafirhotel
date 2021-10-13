import Link from "next/link";
import { useState, Fragment } from "react";
import IconsPack from "../../public/images/IconsPack";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import MobileMenu from "./MobileMenu";
const NavBar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const navigation = [
    { name: "Dashboard", href: "#", current: true },
    { name: "Team", href: "#", current: false },
    { name: "Projects", href: "#", current: false },
    { name: "Calendar", href: "#", current: false },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const openMenu = () => {
    setShowMobileMenu((prev) => !prev);
  };
  return (
    // <header className="transition duration-1000 hover:bg-black fixed  w-screen p-4 flex items-center h-20">
    //   <Link href="/">
    //     <a>{IconsPack.alsfairLogo}</a>
    //   </Link>

    //   <div className=" flex  justify-center items-center ml-auto pr-4 space-x-4 ">
    //     <button>EN</button>
    //     <label>Menu</label>
    //     <button onClick={openMenu}>
    //       <svg
    //         width="18"
    //         height="12"
    //         viewBox="0 0 18 12"
    //         fill="none"
    //         xmlns="http://www.w3.org/2000/svg"
    //       >
    //         <path
    //           d="M0 0H17.4545V2H0V0ZM0 5H17.4545V7H0V5ZM0 10H17.4545V12H0V10Z"
    //           fill="#BEA782"
    //         />
    //       </svg>
    //     </button>
    //     <MobileMenu
    //       showMobileMenu={showMobileMenu}
    //       setShowMobileMenu={setShowMobileMenu}
    //     />
    //   </div>
    // </header>
    <Disclosure as="nav">
      <>
        <header className=" hover:bg-black w-screen fixed p-4 z-10 flex h-20">
          <Link href="/">
            <a>{IconsPack.alsfairLogo}</a>
          </Link>

          <div className=" flex  justify-center items-center ml-auto pr-4 space-x-4 ">
            <div>
              {/* Mobile menu button*/}
              <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="sr-only">Open main menu</span>
              </Disclosure.Button>
            </div>
            <div>
              {/* Profile dropdown */}
              <Menu as="div" className="ml-1">
                <div>
                  <Menu.Button>
                    <svg
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
                  </Menu.Button>
                  <Menu.Button>
                    <button>EN</button>
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="origin-top-right  absolute right-0 mt-2 w-screen h-screen rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm text-gray-700"
                          )}
                        >
                          Your Profile
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm text-gray-700"
                          )}
                        >
                          Settings
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm text-gray-700"
                          )}
                        >
                          Sign out
                        </a>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </header>
      </>
    </Disclosure>
  );
};

export default NavBar;
