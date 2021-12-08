import Link from "next/link";
import ScrollToTop from "./ScrollToTop";
const Footer = () => {
  return (
    <div className="font-mark text-primary border-t-2 border-primary pt-2">
      <div className="px-4">
        <ScrollToTop />
      </div>
      <div className="uppercase flex justify-around">
        <Link href="/contactus">
          <a>Contact Us</a>
        </Link>
        <Link href="/faq">
          <a>FAQ</a>
        </Link>
        <Link href="/privacypolicy">
          <a>Privacy Policy</a>
        </Link>
      </div>
      <div className="my-4 uppercase flex justify-center">@Alsfairhotel</div>
    </div>
  );
};

export default Footer;
