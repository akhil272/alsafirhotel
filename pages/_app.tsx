import type { AppProps } from "next/app";
import BookNow from "../components/BookNow";
import NavBar from "../components/NavBar";
import { AnimatePresence } from "framer-motion";
import "../styles/base.css";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <div className="flex flex-col h-screen">
      <header>
        <NavBar />
      </header>
      <AnimatePresence exitBeforeEnter>
        <main className="flex-1">
          <Component {...pageProps} key={router.route} />
        </main>
      </AnimatePresence>
      <footer className="py-5 bg-black ">
        <BookNow />
      </footer>
    </div>
  );
}

export default MyApp;
