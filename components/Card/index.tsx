const Card = () => {
  return (
    <div className="xs:h-200">
      <img src="/images/homepage" />
      <div className="flex p-2">
        <div className="relative flex justify-center items-center">
          <svg
            width="27"
            height="27"
            viewBox="0 0 27 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.8 0.699982L14.9 1.79998L1 15.7L11 25.7L24.9 11.8L26 2.89998L23.8 0.699982Z"
              stroke="#BEA782"
              stroke-miterlimit="10"
            />
            <path
              d="M20.4 7.79999C21.2285 7.79999 21.9 7.12841 21.9 6.29999C21.9 5.47156 21.2285 4.79999 20.4 4.79999C19.5716 4.79999 18.9 5.47156 18.9 6.29999C18.9 7.12841 19.5716 7.79999 20.4 7.79999Z"
              stroke="#BEA782"
              stroke-miterlimit="10"
            />
          </svg>
          <div className="absolute justify-center h-50 w-50">
            <svg
              width="51"
              height="51"
              viewBox="0 0 51 51"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M35.7 44.4C32.6 46 29.1 47 25.4 47C13.5 47 3.90002 37.3 3.90002 25.4C3.90002 13.5 13.5 3.90002 25.4 3.90002C37.3 3.90002 47 13.5 47 25.4C47 29.9 45.6 34.1 43.3 37.5C42.8 38.3 42.2 39 41.6 39.7"
                stroke="#9E8E71"
                stroke-width="0.7245"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="bevel"
              />
              <path
                d="M13.5 3.40002C17 1.50002 21.1 0.400024 25.4 0.400024C39.2 0.400024 50.4 11.6 50.4 25.4C50.4 39.2 39.2 50.4 25.4 50.4C11.6 50.4 0.400024 39.2 0.400024 25.4C0.400024 20.2 2.00002 15.4 4.70002 11.4C5.30002 10.5 6.00002 9.60002 6.70002 8.80002"
                stroke="#9E8E71"
                stroke-width="0.8403"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="bevel"
              />
            </svg>
          </div>
        </div>
        <div className="ml-8">
          <svg
            width="30"
            height="51"
            viewBox="0 0 30 51"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0)">
              <path
                d="M0.428833 0.490997L29.0036 25.2638L0.428833 50.0353"
                stroke="#CAB493"
                stroke-miterlimit="10"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="30" height="50.5263" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
      <h3 className="mt-2 text-primary  tracking-widest text-3xl"> OFFERS</h3>
    </div>
  );
};

export default Card;
