import ImageSlider from "../ImageSlider";
const image1 = "/images/homepage/homeCoverImage01.jpg";
const image2 = "/images/homepage/homeCover2.jpg";

const Modal = ({ showModal, setShowModal }) => {
  return (
    <div>
      {showModal ? (
        <div className="fixed top-0 h-screen w-screen flex items-end">
          <div className="absolute h-full w-full">
            <ImageSlider images={[image1]} autoplay={false} />
          </div>
          <div className="h-2/5 w-full bg-black flex flex-col opacity-75 p-4">
            <div className="flex p-2  ">
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
            <div className="flex justify-center mt-4 border-2 p-.5 items-center rounded-sm ">
              <h5 className="bg-primary font-mark w-full p-1 rounded-sm ">
                Delux Twin
              </h5>
              <h5 className="bg-primary opacity-25 font-mark w-full p-1 rounded-sm  ">
                Delux Twin
              </h5>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Modal;
