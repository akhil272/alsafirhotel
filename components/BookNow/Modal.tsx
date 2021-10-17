import ImageSlider from "../ImageSlider";
import Calender from "./Calendar";
import RoomsCount from "./RoomsCount";
import PeopleCounter from "./PeopleCounter";
import RoomSelector from "./RoomSelector";
const image1 = "/images/homepage/homeCoverImage01.jpg";
type ModalData = {
  showModal: Boolean;
  setShowModal: any;
};

const Modal = ({ showModal, setShowModal }: ModalData) => {
  return (
    <div>
      {showModal ? (
        <div className="fixed top-0 h-screen w-screen flex items-end">
          <div className="absolute h-full w-full">
            <ImageSlider images={[image1]} autoplay={false} />
          </div>
          <div className="h-3/5 w-full bg-black flex flex-col opacity-95 space-y-6 p-4">
            <div className="flex p-2 mt-6">
              <h3 className="uppercase font-mark text-2xl"> Book Your Room</h3>
              <div
                onClick={() => setShowModal((prev: any) => !prev)}
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
            <Calender />
            <RoomsCount />
            <div className="flex gap-2 justify-center gap ">
              <PeopleCounter categories="Adults" />
              <PeopleCounter categories="Children" />
            </div>
          </div>
          <div className="  duration-1000 transition-all hover:bg-black hover:p-4  hover:text-primary fixed bottom-0 text-white bg-primary min-w-full text-center text-2xl p-2">
            <button>BOOK NOW</button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Modal;
