import { useState } from "react";

const RoomSelector = ({ selectedRoom, setSelectedRoom }) => {
  const defaultClass =
    "bg-primary uppercase w-full p-1 rounded-sm flex items-center justify-center";
  const userSelectedClass =
    "bg-primary uppercase bg-opacity-40 font-mark w-full p-1 rounded-sm flex items-center justify-center";

  const roomTypes = [
    { id: 1, title: "Deluxe Single" },
    { id: 2, title: "Deluxe Twin" },
  ];
  const handleSelection = (roomType: { id: number; title?: string }) => {
    setSelectedRoom(roomType.id);
  };

  return (
    <div className="flex justify-center items-center text-md font-mark font-light mt-4 border-2 border-primary p-0.5 rounded-sm ">
      {roomTypes.map((roomType) => (
        <div
          key={roomType.id}
          className={`${
            roomType.id === selectedRoom ? defaultClass : userSelectedClass
          }`}
        >
          <button
            name={roomType.title}
            onClick={() => handleSelection(roomType)}
          >
            {roomType.title}
          </button>
        </div>
      ))}
    </div>
  );
};

export default RoomSelector;
