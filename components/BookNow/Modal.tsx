const Modal = () => {
  return (
    <div className="absolute h-full w-full bg-red-300 flex items-end">
      <div className="h-2/5 w-full bg-black flex flex-col opacity-75 p-4">
        <div className="flex p-2  ">
          <h3 className="uppercase font-mark text-2xl"> Book Your Room</h3>
          <div className="flex justify-center items-center ml-auto   ">
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
        <div className="flex justify-center mt-4 bg-yellow-900 border-2 p-2 items-center">
          <h5 className="bg-red-300">Delux Twin</h5>
          <h5>Delux Double</h5>
        </div>
      </div>
    </div>
  );
};

export default Modal;
