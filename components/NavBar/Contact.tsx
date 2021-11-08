import Link from "next/link";
const Contact = () => {
  return (
    <div className="uppercase flex p-2 lg:pl-4 pl-6 w-full justify-start">
      <div className="lg:w-1/2 lg:grid items-center lg:grid-cols-3 lg:divide-x-2 divide-primary">
        <div className="lg:px-10 py-2">
          <p className="text-sm">reservation number</p>
          <p>
            <a href="tel:+97317827999">+973 1782 7999</a>
          </p>
        </div>
        <div className="lg:px-10 py-2">
          <p className="text-sm">whatsapp</p>
          <p>
            <a href="https://wa.me/+97317827999?text=I%20like%20to%20book%20rooms%20in%20AlSafir%20Hotel">
              +973 1782 7999
            </a>
          </p>
        </div>
        <div className="lg:px-10 py-2">
          <p className="text-sm">email</p>
          <p>
            <a href="mailto:hello@alsafirhotel.com">hello@alsafirhotel.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
