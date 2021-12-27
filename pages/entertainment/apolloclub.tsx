import Image from "next/image";
import { useRouter } from "next/router";
import en from "../../locales/stay/en";
import ar from "../../locales/stay/ar";

const ApolloClub = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : ar;
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
      <p>{t.p1}</p>
      <p>
        Groove to the performance of International D.Js and various artist.
        Enjoy the delectable cocktails made by our professional bar tenders and
        experience the best VIP treatment that no other island could offer you.
      </p>
    </div>
  );
};

export default ApolloClub;
