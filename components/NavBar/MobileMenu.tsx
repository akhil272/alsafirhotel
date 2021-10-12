import IconsPack from "../../public/images/IconsPack";
import MobileMenuItem from "./MobileMenuItem";

const MobileMenu = ({ showMobileMenu, setShowMobileMenu }) => {
  return (
    <div>
      {showMobileMenu ? (
        <div className="fixed top-0 left-0 h-screen w-screen flex items-end bg-black">
          <div className="h-screen w-screen flex flex-col  p-4">
            <div className="flex p-2 ">
              <div
                onClick={() => setShowMobileMenu((prev: any) => !prev)}
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
            <MobileMenuItem
              id="offers"
              iconName="offers"
              menuTitle="Offers"
              menuDescription="Get exclusive"
            />
            <MobileMenuItem
              id="stay"
              iconName="stay"
              menuTitle="Stay"
              menuDescription="Get exclusive"
            />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default MobileMenu;
