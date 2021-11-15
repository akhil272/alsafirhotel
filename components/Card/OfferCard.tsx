import Image from "next/image";
interface OfferCardData {
  title: string;
  content: string;
}

const OfferCard = ({ title, content }: OfferCardData) => {
  return (
    <div className="space-y-2">
      <div className="h-72 w-full">
        <Image
          width="300px"
          height="300px"
          src="/images/offerpage/alsafir-hotel-offer-advance-purchase.jpg"
        />
      </div>
      <h3 className="font-markbook text-lg uppercase">{title}</h3>
      <p className="text-base font-mark">{content}</p>
    </div>
  );
};

export default OfferCard;
