import type { AppProps } from "next/app";
import BookNow from "../components/BookNow";
import NavBar from "../components/NavBar";
import { AnimatePresence } from "framer-motion";
import Script from "next/script";
import "../styles/base.css";

function MyApp({ Component, pageProps, router }: AppProps) {
  const { locale } = router;
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script strategy="lazyOnload">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
        page_path: window.location.pathname,
        });
    `}
      </Script>
      <div className="flex flex-col h-screen ">
        <header>
          <NavBar />
        </header>
        <main dir={locale === "ar" ? "rtl" : "ltl"} className="flex-1">
          <AnimatePresence initial={false} exitBeforeEnter>
            <Component {...pageProps} key={router.pathname} />
          </AnimatePresence>
        </main>
        <footer className="py-5 bg-black ">
          <BookNow />
        </footer>
      </div>
    </>
  );
}

export default MyApp;
