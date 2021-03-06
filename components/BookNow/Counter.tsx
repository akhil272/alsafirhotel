const plus = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    className="h-5 w-5"
    viewBox="0 0 20 20"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
      clipRule="evenodd"
    ></path>
  </svg>
);

const minus = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    className="h-5 w-5"
    viewBox="0 0 20 20"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
      clipRule="evenodd"
    ></path>
  </svg>
);

interface counterData {
  categories: string;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

const Counter = ({ categories, count, setCount }: counterData) => {
  const handleChange = (type: string) => {
    if (type === "dec") {
      count > 0 && setCount(count - 1);
    } else {
      count < 10 && setCount(count + 1);
    }
  };

  return (
    <div className="bg-opacity-40 bg-primary w-full  rounded-sm ">
      <div className="flex flex-col items-center justify-center -space-y-3 w-full">
        <div className=" divide-x divide-gray-400 h-14 w-full grid grid-cols-3 content-center  rtl:divide-x-0">
          <button
            className=" text-primary flex items-center justify-center"
            onClick={() => handleChange("dec")}
          >
            {minus}
          </button>
          <div className="  flex items-center text-2xl justify-center">
            {count}
          </div>
          <button
            className=" text-primary flex items-center justify-center"
            onClick={() => handleChange("inc")}
          >
            {plus}
          </button>
        </div>
        <div className="font-mark font-light">{categories}</div>
      </div>
    </div>
  );
};

export default Counter;
