const BookNow = () => {
  return (
    <div className=" sticky bottom-0 relative text-white bg-primary min-w-full text-center text-2xl p-2 ">
      <button>BOOK NOW </button>
      <div className="absolute bg-black opacity-85 flex justify-center items-center p-2 h-14 w-14 rounded-full bottom-4 right-3 ">
        <img src="/images/icons/call-icon-01.svg" />
      </div>
    </div>
  );
};

export default BookNow;
