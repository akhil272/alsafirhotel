import Image from "next/image";
import Link from "next/link";
interface DineInCardProps {
  title: string;
  description: string;
  src: string;
  url: string;
}

const DineInCard = ({ title, description, src, url }: DineInCardProps) => {
  return (
    <div className="space-y-2 scale-95 hover:scale-100 transition-all duration-1000 border-b-2 p-2 border-primary ">
      <div className="h-96 w-auto relative">
        <Image
          className="rounded"
          layout="fill"
          objectFit="cover"
          src={`/images/offerpage/${src}`}
        />
        <div className="absolute bottom-5 w-full flex justify-center items-center space-x-4 ">
          <Link href={`dine/${url}`}>
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

export default DineInCard;
