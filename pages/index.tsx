import Card from "../components/Card";
import ImageSlider from "../components/ImageSlider";
import Head from "next/head";
import useTranslation from "../hooks/useTranslatiion";
import en from "../locales/home/en";
import ar from "../locales/home/ar";
import Footer from "../components/Footer";

function Homepage({ weather }: { weather: any }) {
  const locale = useTranslation();
  const t = locale === "en" ? en : ar;

  const image1 = "/images/homepage/homeCoverImage01.jpg";
  const image2 = "/images/homepage/homeCover2.jpg";
  const image3 = "/images/homepage/Inside-Al-Safir-Hotel.jpg";
  return (
    <div dir={locale === "ar" ? "rtl" : "ltl"}>
      <Head>
        <title>Alsafir Hotel</title>
        <meta
          property="og:title"
          content="Al Safir Hotel | Experience luxury above all"
          key="title"
        />
      </Head>
      <div className="h-screen w-full">
        <ImageSlider images={[image1, image3, image2]}>
          <div
            className="bg-gradient-to-l from-transparent to-black rtl:bg-gradient-to-r flex flex-wrap content-end py-64
     min-h-screen px-4"
          >
            <h1 className="text-primary font-brandon sm:w-1/2 tracking-widest text-6xl lg:text-8xl ">
              {t.hero}
            </h1>
            <div className="min-w-full font-mark  lg:text-2xl">
              <h5>{t.subtitle}</h5>
            </div>
            <div className="text-secondary font-mark lg:text-lg">
              <p>
                {t.location} :
                <span className="pl-2">{Math.floor(weather.main.temp)} °C</span>
              </p>
            </div>
          </div>
        </ImageSlider>
      </div>

      <Card />
      <div className="p-10 space-y-4 text-secondary">
        <img src="/images/AlsafirLogo.svg" />
        <p>{t.p1}</p>
        <p>{t.p2}</p>
      </div>
      <Footer />
    </div>
  );
}

export default Homepage;

export const getStaticProps = async function () {
  const res = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=Bahrain&units=metric&appid=${process.env.API_KEY}`
  );
  const data = await res.json();
  return {
    props: {
      weather: data,
    },
  };
};
