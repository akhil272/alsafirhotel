import Link from "next/link";
const Contact = () => {
  return (
    <div className="uppercase flex p-2 lg:pl-4 pl-6 w-full justify-start">
      <div className="lg:w-1/2 lg:grid items-center lg:grid-cols-3 lg:divide-x-2 divide-primary">
        <div className="lg:px-10 py-2">
          <p className="text-sm">reservation number</p>
          <p>00006468487</p>
        </div>
        <div className="lg:px-10 py-2">
          <p className="text-sm">whatsapp</p>
          <p>00006468487</p>
        </div>
        <div className="lg:px-10 py-2">
          <p className="text-sm">email</p>
          <p>hello@alsafirhotel.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
