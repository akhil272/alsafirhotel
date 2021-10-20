import { useState } from "react";

const roomCounts = [
  { id: 1, title: "1" },
  { id: 2, title: "2" },
  { id: 3, title: "3" },
  { id: 4, title: "+" },
];

const RoomsCount = () => {
  const [selected, setSelected] = useState(1);
  const [openModal, setOpenModal] = useState(false);

  const defaultClass =
    "flex text-2xl h-14 w-full  bg-primary items-center justify-center opacity-50 rounded-md";
  const userSelectedClass =
    "flex text-2xl h-14 w-full  bg-primary items-center justify-center rounded-md";

  const handleSelection = (roomCount: { id: number; title?: string }) => {
    setSelected(roomCount.id);
    if (roomCount.id > 3) {
      setOpenModal(!openModal);
    }
  };

  return (
    <div id="roomCount" className="flex justify-between gap-2  ">
      {roomCounts.map((roomCount) => (
        <button
          key={roomCount.id}
          name={roomCount.title}
          onClick={() => handleSelection(roomCount)}
          className={`${
            roomCount.id === selected ? userSelectedClass : defaultClass
          }`}
        >
          {roomCount.title}
        </button>
      ))}
    </div>
  );
};

export default RoomsCount;
