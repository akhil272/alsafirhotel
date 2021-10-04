import CardDetail from "./CardDetail";

const Card = () => {
  return (
    <div className="mx-auto flex flex-col space-y-5">
      <CardDetail
        icon={
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
        }
        title="OFFERS"
        image="/images/homepage/OffersCover.jpg"
      />
      <CardDetail
        icon={
          <svg
            width="28"
            height="19"
            viewBox="0 0 28 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M27.3 5.50002C27 5.50002 26.8 5.70002 26.8 6.00002V7.90002H7.6C7.9 7.60002 8 7.20002 8 6.80002C8 5.60002 6.6 4.70003 4.9 4.70003C3.1 4.70003 1.8 5.60002 1.8 6.80002C1.8 7.20002 2 7.50002 2.2 7.90002H1V1.40002C1 1.10002 0.8 0.900024 0.5 0.900024C0.2 0.900024 0 1.10002 0 1.40002V8.50002V9.70003V10.7V12.8V18.2C0 18.5 0.2 18.7 0.5 18.7C0.8 18.7 1 18.5 1 18.2V13.4H26.7V18.2C26.7 18.5 26.9 18.7 27.2 18.7C27.5 18.7 27.7 18.5 27.7 18.2V12.8V8.50002V6.00002C27.8 5.70002 27.6 5.50002 27.3 5.50002ZM2.8 6.90002C2.8 6.40002 3.7 5.80002 4.9 5.80002C6.1 5.80002 7 6.40002 7 6.90002C7 7.40002 6.1 8.00002 4.9 8.00002C3.7 7.90002 2.8 7.40002 2.8 6.90002ZM1 12.2V10.6V9.60003V9.00002H26.7V12.2H1Z"
              fill="#BEA782"
            />
          </svg>
        }
        title="STAY"
        image="/images/homepage/StayCover.jpg"
      />
      <CardDetail
        icon={
          <svg
            width="29"
            height="20"
            viewBox="0 0 29 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.5 3C10.2 3 6.70001 6.5 6.70001 10.8C6.70001 15.1 10.2 18.6 14.5 18.6C18.8 18.6 22.3 15.1 22.3 10.8C22.3 6.5 18.8 3 14.5 3ZM14.5 17.7C10.7 17.7 7.60001 14.6 7.60001 10.8C7.60001 7 10.7 3.9 14.5 3.9C18.3 3.9 21.4 7 21.4 10.8C21.3 14.6 18.3 17.7 14.5 17.7Z"
              fill="#BEA782"
            />
            <path
              d="M28 0.100024C27.9 2.44156e-05 27.7 2.44156e-05 27.5 0.100024C27.4 0.200024 24.1 2.30002 24.1 9.50002C24.1 9.80002 24.3 10 24.6 10H27.3V18.6C27.3 18.9 27.5 19.1 27.8 19.1C28.1 19.1 28.3 18.9 28.3 18.6V9.50002V8.90002V0.500024C28.2 0.300024 28.2 0.200024 28 0.100024ZM25.1 9.10002C25.2 5.90002 25.9 3.90002 26.6 2.70002C26.9 2.20002 27.1 1.90002 27.4 1.60002V8.90002V9.10002H25.1Z"
              fill="#BEA782"
            />
            <path
              d="M5.30001 0C5.00001 0 4.80001 0.2 4.80001 0.5V6.2C4.80001 6.3 4.70001 6.4 4.60001 6.4H3.50001V0.5C3.50001 0.2 3.30001 0 3.00001 0C2.70001 0 2.50001 0.2 2.50001 0.5V6.4H1.40001C1.30001 6.4 1.20001 6.3 1.20001 6.2V0.5C1.20001 0.2 1.00001 0 0.700012 0C0.400012 0 0.200012 0.2 0.200012 0.5V6.2C0.200012 6.8 0.700013 7.3 1.30001 7.3H2.40001V18.6C2.40001 18.9 2.60001 19.1 2.90001 19.1C3.20001 19.1 3.40001 18.9 3.40001 18.6V7.3H4.50001C5.10001 7.3 5.60001 6.8 5.60001 6.2V0.5C5.70001 0.2 5.50001 0 5.30001 0Z"
              fill="#BEA782"
            />
          </svg>
        }
        title="DINE IN"
        image="/images/homepage/StayCover.jpg"
      />
    </div>
  );
};

export default Card;
