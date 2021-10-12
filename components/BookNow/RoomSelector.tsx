import { useState } from "react";

const RoomSelector = () => {
  const defaultClass =
    "bg-primary uppercase w-full p-1 rounded-sm flex items-center justify-center";
  const userSelectedClass =
    "bg-primary uppercase bg-opacity-40 font-mark w-full p-1 rounded-sm flex items-center justify-center";
  const [deluxSingle, setDeluxSingle] = useState(true);
  const [deluxTwin, setDeluxTwin] = useState(false);
  const handleRoomSelection = (type: string) => {
    if (type === "deluxSingle") {
      setDeluxSingle(true);
      setDeluxTwin(false);
    } else {
      setDeluxTwin(true);
      setDeluxSingle(false);
    }
  };

  return (
    <div className="flex justify-center items-center text-md font-mark font-light mt-4 border-2 border-primary p-0.5 rounded-sm ">
      <button
        onClick={() => handleRoomSelection("deluxSingle")}
        className={deluxSingle ? defaultClass : userSelectedClass}
      >
        Delux Single
      </button>
      <button
        onClick={() => handleRoomSelection("deluxTwin")}
        className={deluxTwin ? defaultClass : userSelectedClass}
      >
        Delux Twin
      </button>
    </div>
  );
};

export default RoomSelector;
