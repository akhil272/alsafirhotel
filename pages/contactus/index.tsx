import Head from "next/head";
import ContactForm from "../../components/Forms/ContactForm";
import IconsPack from "../../public/images/IconsPack";

const ContactUs = () => {
  return (
    <div className=" font-mark mt-20 px-4 md:px-96">
      <Head>
        <title>Contact Us | Al Safir Experience</title>
        <meta name="description" content="Contact Alsafir team." />
      </Head>
      <div>
        <h1 className="text-primary uppercase text-4xl">Contact Us</h1>
      </div>
      <div className="my-5 space-y-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14317.4985489431!2d50.6046653!3d26.217014!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4ade8d7b2b9b5c61!2sAl%20Safir%20Hotel!5e0!3m2!1sen!2sin!4v1639377414372!5m2!1sen!2sin"
          className="w-full h-96 my-4 rounded"
          loading="lazy"
        ></iframe>
        <h4 className="text-primary uppercase text-2xl py-4">
          IF YOU HAVE ANY QUESTIONS, PLEASE FEEL FREE TO CONTACT US USING THE
          FORM BELOW.
        </h4>
        <p>
          Al Safir Hotel & Tower en suites 193 stylishly designed deluxe rooms,
          suites, apartments, a cosmopolitan selection of restaurants,
          entertainment center and lounges as well as completely furnished
          business facilities complimented with hospitable services. From the
          very beginning, the hotel welcomes guests for business and leisure
          purposes. Located in the heart of Bahrain’s vibrant entertainment
          district, Juffair. The hotel combines its heritage with all the
          amenities of the present day to ensure that your stay is peaceful,
          relaxed & memorable, thereby surpassing its deluxe four star status.
        </p>
        <p>
          Located in the heart of Bahrain’s vibrant entertainment district,
          Juffair. The hotel combines its heritage with all the amenities of the
          present day to ensure that your stay is peaceful, relaxed & memorable,
          thereby surpassing its deluxe four star status.
        </p>
      </div>
      <div className="md:grid md:grid-cols-2 gap-4 space-y-4 ">
        <div className="flex items-center">
          <div className="h-10 w-10">{IconsPack.callIcon}</div>
          <label className="px-2">+973 17827999</label>
        </div>
        <div className="flex items-center">
          <div className="h-10 w-10">{IconsPack.faxIcon}</div>
          <label className="px-2">+973 17827999</label>
        </div>
        <div className="flex items-center">
          <div className="h-10 w-10">{IconsPack.whatsappIcon}</div>
          <label className="px-2">+97333644411</label>
        </div>
        <div className="flex items-center">
          <div className="h-10 w-10">{IconsPack.mailIcon}</div>
          <label className="px-2">reservation@alsafirhotel.com</label>
        </div>
        <div className="col-span-2 flex items-center">
          <div className="h-10 md:w-10 w-20">{IconsPack.addressIcon}</div>
          <label className="px-2">
            Building 670, Road 2411, Block 324 ,PO BOX: 55222, Manama, Kingdom
            of Bahrain
          </label>
        </div>
      </div>
      <ContactForm />
    </div>
  );
};

export default ContactUs;
