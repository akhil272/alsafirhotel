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

      <main className="flex-1">
        <AnimatePresence initial={false} exitBeforeEnter>
          <Component {...pageProps} key={router.pathname} />
        </AnimatePresence>
      </main>

      <footer className="py-5 bg-black ">
        <BookNow />
      </footer>
    </div>
  );
}

export default MyApp;
