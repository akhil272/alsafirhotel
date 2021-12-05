import React, { useEffect, useState } from "react";

export default function ScrollToTop() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="cursor-pointer">
      <div
        onClick={scrollToTop}
        className=" text-white flex items-center space-x-2 "
      >
        <p>TOP</p>
        <svg
          width="15"
          height="10"
          viewBox="0 0 15 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.0463 9.63257L7.5 4.08632L1.95375 9.63257L0.25 7.91673L7.5 0.666734L14.75 7.91673L13.0463 9.63257Z"
            fill="#BEA782"
          />
        </svg>
      </div>
    </div>
  );
}
