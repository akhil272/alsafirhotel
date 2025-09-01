const Contact = () => {
  return (
    <div className="capitalize flex p-2  pl-6 w-full justify-start">
      <div className=" items-center ">
        <div className=" py-2">
          <p className="text-sm">reservation number</p>
          <p className="text-primary">
            <a href="tel:+97317827999">+973 1782 7999</a>
          </p>
        </div>
        <div className=" py-2">
          <p className="text-sm">whatsapp</p>
          <p className="text-primary">
            <a href="https://wa.me/+97333644411?text=I%20like%20to%20book%20rooms%20in%20AlSafir%20Hotel">
              +973 33644411
            </a>
          </p>
        </div>
        <div className=" py-2">
          <p className="text-sm">email</p>
          <p className="text-primary lowercase">
            <a href="mailto:reservation@alsafirhotel.com">
              reservation@alsafirhotel.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
