const PrivacyPolicy = () => {
  return (
    <div className=" font-mark mt-20 px-4 md:px-96">
      <div>
        <h1 className="text-primary uppercase text-4xl">Privacy Policy</h1>
      </div>
      <div className="my-5">
        <h4 className="uppercase text-2xl text-primary">General</h4>
        <p>
          Al Safir Hotel respects the right to privacy of every individual who
          visits our site or mobile site. This privacy policy explains how we
          use any personal information we collect about you, and your rights to
          access and correct the personal information we hold about you.
        </p>
      </div>
      <div className="my-5">
        <h4 className="uppercase text-2xl text-primary">
          What personal information do we collect and how we will use it?
        </h4>
        <p>
          We may collect the following information about you:
          <ul style={{ listStyleType: "circle", lineHeight: "180%" }}>
            <li>
              Contact details including title, name, postal and email addresses,
              postcode, contact telephone numbers;
            </li>
            <li>Business information, such as employer details;</li>
            <li>
              Transaction information, including payment and reservation and
              booking details;
            </li>
            <li>
              Purchase history, including previous and future stays information;
            </li>
            <li>Demographic information;</li>
            <li>Expressed preferences;</li>
            <li>Customer communication preferences;</li>
            <li>Customer feedback;</li>
          </ul>
          <p className="py-4">
            We may supplement the information that you provide to us with
            information from trusted third parties (including travel agencies,
            distributors and list rental companies) for the purposes outlined in
            this privacy policy.
          </p>
          <p className="py-4">
            Where you book accommodation for other people, we may ask you to
            provide the above information about them (e.g. we will usually ask
            for the title, first name and surname, e-mail address and
            nationality of a person for each room that you book for
            identification purposes). You should only provide us with
            information about other people if you have their permission to do
            so.
          </p>
          <p>We may use your information for the following purposes:</p>
          <ul style={{ listStyleType: "circle", lineHeight: "180%" }}>
            <li>Administration and management of room; taxi bookings</li>
            <li>Processing transactions;</li>
            <li>
              Sending you communications about our products and services that we
              think may be of interest to you. We may also send you service
              information communications (e.g. reservation/booking
              confirmation). With your permission, we will keep you informed of
              news and offers from the Regency House Hotel;
            </li>
            <li>Business, website and consumer analysis and reporting;</li>
            <li>
              Correspondence between us, including where you use our 'Contact
              us' form.
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
