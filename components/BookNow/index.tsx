import Modal from "./Modal";
import { useState } from "react";

const BookNow = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <div className="transition duration-1000 hover:bg-black fixed bottom-0 text-white bg-primary min-w-full text-center text-2xl p-2">
        <button onClick={openModal}>BOOK NOW</button>
        <div className="absolute bg-black opacity-85 flex justify-center items-center p-2 h-14 w-14 rounded-full bottom-4 right-3 ">
          <img src="/images/icons/call-icon-01.svg" />
        </div>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default BookNow;
