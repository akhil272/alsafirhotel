import Image from "next/image";
const ApolloClub = () => {
  return (
    <div className="h-screen mt-20 font-mark md:px-40 px-2 space-y-10">
      <div className="h-96 w-auto relative ">
        <Image
          layout="fill"
          objectFit="cover"
          src="/images/entertainment/apollo/entertainment-alsafir-cover-01.jpg"
        />
      </div>

      <h2 className="text-3xl text-primary">APOLLO CLUB LOUNGE</h2>
      <p>
        A nightlife destination to you won’t forget in the heart of Juffair.A
        nightclub that gives you the experience of the bar to the dance floor.
      </p>
      <p>
        Groove to the performance of International D.Js and various artist.
        Enjoy the delectable cocktails made by our professional bar tenders and
        experience the best VIP treatment that no other island could offer you.
      </p>
    </div>
  );
};

export default ApolloClub;
