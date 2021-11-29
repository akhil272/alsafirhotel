import Image from "next/image";
import Link from "next/link";
interface ListingCardProps {
  title: string;
  description: string;
  src: string;
  learnMoreUrl?: string;
  bookNowUrl?: string;
}

const ListingCard = ({
  title,
  description,
  src,
  learnMoreUrl,
}: ListingCardProps) => {
  return (
    <div className="space-y-2 scale-95 hover:scale-100 transition-all duration-1000 border-b-2 p-2 border-primary ">
      <div className="h-96 w-auto relative">
        <Image
          className="rounded"
          layout="fill"
          objectFit="cover"
          src={`/images/${src}`}
        />
        <div className="absolute bottom-5 w-full flex justify-center items-center space-x-4 ">
          <Link href={`${learnMoreUrl}`}>
            <a className="uppercase font-mark text-black text-center py-2 px-4 rounded bg-white hover:bg-gray-300">
              Learn More
            </a>
          </Link>
          <button className="uppercase font-mark text-white text-center py-2 px-4 rounded bg-primary hover:bg-secondary">
            Book Now
          </button>
        </div>
      </div>
      <h3 className="font-markbook text-lg uppercase text-primary">{title}</h3>
      <p className="text-base font-mark">{description}</p>
    </div>
  );
};

export default ListingCard;
