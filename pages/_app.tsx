import type { AppProps } from "next/app";
import BookNow from "../components/BookNow";
import NavBar from "../components/NavBar";
import { AnimateSharedLayout } from "framer-motion";
import "../styles/base.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col h-screen">
      <header>
        <NavBar />
      </header>
      <AnimateSharedLayout>
        <main className="flex-1">
          <Component {...pageProps} />
        </main>
      </AnimateSharedLayout>
      <footer className="py-5 bg-black ">
        <BookNow />
      </footer>
    </div>
  );
}

export default MyApp;
