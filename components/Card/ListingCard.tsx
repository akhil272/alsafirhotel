import Link from "next/link";
interface ListingCardProps {
  title: string;
  description: string;
  src: string;
  learnMoreUrl?: string;
  bookNowUrl?: string;
  enableLearnMoreButton?: boolean;
}

const ListingCard = ({
  title,
  description,
  src,
  learnMoreUrl,
  enableLearnMoreButton,
}: ListingCardProps) => {
  return (
    <div className="space-y-2 scale-95 hover:scale-100 transition-all duration-1000 border-b-2 p-2 border-primary ">
      <div className="h-96 w-auto relative">
        <img
          className="rounded h-96 w-full object-cover"
          src={`/images/${src}`}
        />
        {enableLearnMoreButton ? (
          <div className="absolute bottom-5 w-full flex justify-center items-center space-x-4 ">
            <Link href={`${learnMoreUrl}`}>
              <a className="uppercase font-mark text-white text-center py-2 px-4 rounded bg-primary hover:bg-secondary">
                Learn More
              </a>
            </Link>
            {/* <button className="uppercase font-mark text-white text-center py-2 px-4 rounded bg-primary hover:bg-secondary">
            Book Now
          </button> */}
          </div>
        ) : null}
      </div>
      <h3 className="font-markbook text-lg uppercase text-primary">{title}</h3>
      <p className="text-base font-mark">{description}</p>
    </div>
  );
};

export default ListingCard;
